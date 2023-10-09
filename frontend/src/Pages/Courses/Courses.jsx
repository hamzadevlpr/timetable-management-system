import React, { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext';
import CourseModal from '../../Pages/Courses/CourseModal'

function Courses() {
    const { setIsModalOpen } = useContext(SidebarContext);

    const openModal = () => {
        setIsModalOpen(true);
    };
    return (
        <>
            <header className="py-4 border-b border-gray-100 flex justify-between">
                <h3 className="text-gray-800 font-bold text-3xl">Courses</h3>
                <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    Add Courses
                </button>
            </header>
            <CourseModal />
        </>
    )
}

export default Courses