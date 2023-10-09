import React, { useContext, useEffect, useState } from 'react'
import Table from './RoomTable'
import { SidebarContext } from '../../context/SidebarContext';
import RoomModal from './RoomModel';
import { API_BASE_URL } from '../../config';
import toast from 'react-hot-toast';
import axios from 'axios';

function Rooms() {
    const { setIsModalOpen } = useContext(SidebarContext);
    const [roomData, setRoomData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setRoom } = useContext(SidebarContext);

    const openModal = () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_BASE_URL}/api/rooms/`);
                console.log('API Response:', response.data.length);
                if (response.status === 200) {
                    setRoomData(response.data);
                } else {
                    toast.error('Error fetching rooms');
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Error fetching rooms');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <header className="py-4 border-b border-gray-100 flex justify-between">
                <h3 className="text-gray-800 font-bold text-3xl">Rooms</h3>
                <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    Add Rooms
                </button>
            </header>
            <Table title="Rooms" button="Add Room" data={roomData} loading={loading} />
            <RoomModal />
        </>
    )
}

export default Rooms