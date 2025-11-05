import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

const Sidebar: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };
    
    const navLinkClasses = "block w-full text-left px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200";
    const activeNavLinkClasses = "bg-gray-200";

    return (
        <div className="w-64 bg-white border-r flex flex-col">
            <div className="flex items-center justify-center h-16 border-b flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
            </div>
            <nav className="mt-6 flex-grow p-4 space-y-2">
                <NavLink to="/admin" end className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Dashboard</NavLink>
                <NavLink to="/admin/sermons" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Sermons</NavLink>
                <NavLink to="/admin/events" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Events</NavLink>
                <NavLink to="/admin/pastors" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Pastors</NavLink>
                <NavLink to="/admin/gallery" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Gallery</NavLink>
            </nav>
            <div className="p-4 border-t">
                 <button onClick={handleLogout} className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
