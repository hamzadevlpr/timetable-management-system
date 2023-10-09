import React, { useContext } from 'react'
import FacultyModal from '../../Pages/Faculty/FacultyModal'
import { SidebarContext } from '../../context/SidebarContext';

function Faculty() {
    const { setIsModalOpen } = useContext(SidebarContext);

    const openModal = () => {
        setIsModalOpen(true);
    };
    return (
        <>
            <header className="py-4 border-b border-gray-100 flex justify-between">
                <h3 className="text-gray-800 font-bold text-3xl">Faculty</h3>
                <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    Add Faculty
                </button>
            </header>
            <FacultyModal />
        </>
    )
}

export default Faculty