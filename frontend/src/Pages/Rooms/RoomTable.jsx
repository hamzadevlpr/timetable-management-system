import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Table({ data, loading }) {
    if (!data) {
        data = [];
    }
    return (
        <div className="h-full">
            <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <div className="p-3">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* table header */}
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">S. No.</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Room Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Floor Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Student Capacity</div>
                                    </th>
                                </tr>
                            </thead>
                            {/* table body */}
                            <tbody className="text-sm divide-y divide-gray-100">
                                {loading ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-4">
                                            <ClipLoader color="#000" loading={loading} size={50} />
                                        </td>
                                    </tr>
                                ) : (
                                    data.length === 0 ? (
                                        <tr>
                                            <td colSpan="4" className="text-center text-3xl py-8">
                                                No Data
                                            </td>
                                        </tr>
                                    ) : (
                                        data.map((item, index) => (
                                            <tr key={index}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-center font-medium text-gray-800">{index + 1}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-center">{item.roomName}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-center">{item.floor}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-center font-medium text-green-500">
                                                        {item.capacity}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
