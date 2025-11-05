import React from 'react';
import { useNavigate } from 'react-router-dom';

const PastorForm: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Pastor</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <p>Pastor form is not implemented in this demo.</p>
                <button onClick={() => navigate('/admin/pastors')} className="mt-4 px-4 py-2 text-white bg-primary rounded-md hover:bg-blue-800">
                    Back to Pastors
                </button>
            </div>
        </div>
    );
};

export default PastorForm;
