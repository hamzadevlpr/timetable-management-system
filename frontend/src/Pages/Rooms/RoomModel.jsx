import { XCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import HeaderText from "../../components/Global/HeaderText";
import toast from "react-hot-toast";
import axios from "axios";
import { API_BASE_URL } from '../../config';
import ClipLoader from 'react-spinners/ClipLoader'

function Modal() {
    const { isModalOpen, setIsModalOpen } = useContext(SidebarContext);
    const [loading, setLoading] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleOverlayClick = () => {
        closeModal();
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isModalOpen]);

    const [formData, setFormData] = useState({
        roomName: '',
        floor: '',
        capacity: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.roomName || !formData.floor || !formData.capacity) {
            toast.error('Please fill in all fields');
            return;
        }
        try {
            setLoading(true)
            const response = await axios.post(`${API_BASE_URL}/api/rooms/add`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // console.log('API Response:', response.data.length);

            if (response.status === 200) {
                toast.success('Room Added Successfully');
                window.location.reload();
            } else if (response.status === 400) {
                alert('Room with the same ID already exists');
            } else {
                toast.error('Error adding room');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
            closeModal();
        }
    };

    return (
        <div>
            {isModalOpen && (
                <div className="modal-background-blur modal-open" onClick={handleOverlayClick}>
                    <div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        onClick={handleOverlayClick}
                    >
                        <div
                            className="mx-auto rounded-md shadow-md"
                            onClick={handleModalClick}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-500"
                                onClick={closeModal}
                            >
                                <XCircle size={24} />
                            </button>
                            <section className="p-6 mx-auto rounded-md shadow-md bg-white">
                                <HeaderText title="Add Room" />
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-gray-600" htmlFor="roomName">
                                                Room Name
                                            </label>
                                            <input
                                                id="roomName"
                                                name="roomName"
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                                                value={formData.roomName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600" htmlFor="floor">
                                                Floor Name
                                            </label>
                                            <input
                                                id="floor"
                                                name="floor"
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                                                value={formData.floor}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600" htmlFor="roomCapacity">
                                                Room Capacity
                                            </label>
                                            <input
                                                id="roomCapacity"
                                                name="capacity"
                                                type="number"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                                                value={formData.capacity}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-6">
                                        <button className="w-40 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                                            {loading ? <ClipLoader color="#fff" loading={loading} size={20} /> : 'Add Room'}
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
