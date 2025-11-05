import React from 'react';
import { useData } from '../../context/DataContext';

const ManagePastorsPage: React.FC = () => {
    const { pastors } = useData();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manage Pastors</h1>
                {/* <Link to="/admin/pastors/new" className="px-4 py-2 text-white bg-primary rounded-md hover:bg-blue-800">
                    Add New Pastor
                </Link> */}
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {pastors.map(pastor => (
                            <tr key={pastor.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{pastor.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pastor.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <span className="text-gray-400">Editing disabled</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 <p className="p-4 text-sm text-gray-500">Pastor management is not implemented in this demo.</p>
            </div>
        </div>
    );
};

export default ManagePastorsPage;
