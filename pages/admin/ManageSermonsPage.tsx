import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const ManageSermonsPage: React.FC = () => {
    const { sermons, deleteSermon } = useData();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manage Sermons</h1>
                <Link to="/admin/sermons/new" className="px-4 py-2 text-white bg-primary rounded-md hover:bg-blue-800">
                    Add New Sermon
                </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speaker</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sermons.map(sermon => (
                            <tr key={sermon.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{sermon.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{sermon.speaker}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{sermon.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link to={`/admin/sermons/edit/${sermon.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</Link>
                                    <button onClick={() => deleteSermon(sermon.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSermonsPage;
