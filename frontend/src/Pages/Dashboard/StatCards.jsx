import React, { useState, useEffect } from 'react'
import { GraduationCap, Projector, UserCheck2 } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

function StatCards() {
    const [room, setRoom] = useState('--');

    useEffect(() => {
        // Define an asynchronous function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/rooms/`);
                if (response.status === 200) {
                    setRoom(response.data.length);
                } else {
                    toast.error('Error fetching rooms');
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Error fetching rooms');
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);
    return (
        <>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
                    <div className="p-4 flex items-center">
                        <div className="p-3 rounded-full text-orange-500 bg-orange-100 mr-4">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Total Students
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                8.25K
                            </p>
                        </div>
                    </div>
                </div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
                    <div className="p-4 flex items-center">
                        <div className="p-3 rounded-full text-green-500 bg-green-100 mr-4">
                            <GraduationCap />

                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Total Faculties
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                1.5K
                            </p>
                        </div>
                    </div>
                </div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
                    <div className="p-4 flex items-center">
                        <div className="p-3 rounded-full text-blue-500 bg-blue-100 mr-4">
                            <Projector />

                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Total Rooms
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                {room}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
                    <div className="p-4 flex items-center">
                        <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 mr-4">
                            <UserCheck2 />
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Students this Year
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                4.2K
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StatCards