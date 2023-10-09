
import React, { useState } from "react";
import HeaderText from "./HeaderText";
import axios from "axios";
import toast from "react-hot-toast";
import { API_BASE_URL } from '../../config';

function Edit() {
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
            const response = await axios.post(`${API_BASE_URL}/api/rooms/add`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('API Response:', response);

            if (response.status === 400) {
                toast.error('Room with the same ID already exists');
            } else if (response.status === 201) {
                toast.success('Room added successfully');
            } else {
                toast.error('Error adding room');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };

    return (
        <div>

            <HeaderText title="Add Room" />
            <section className="max-w-3xl mt-5 p-6 mx-auto rounded-md shadow-md bg-white">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1">
                        <div>
                            <label className="text-gray-600" htmlFor="roomName">
                                Room Name
                            </label>
                            <input
                                id="roomName"
                                name="roomName" // Match the name attribute with the state key
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
                                name="floor" // Match the name attribute with the state key
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
                                name="capacity" // Match the name attribute with the state key
                                type="number" // Use "number" instead of "Number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                                value={formData.capacity}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                            Add Faculty
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Edit;
