import React from 'react';
import { useData } from '../../context/DataContext';
import StatCard from '../../components/admin/StatCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useTranslation } from '../../i18n';

// Mock data for charts
const sermonViewsData = [
    { name: 'Week 1', views: 400 },
    { name: 'Week 2', views: 300 },
    { name: 'Week 3', views: 500 },
    { name: 'Week 4', views: 450 },
];
const givingData = [
    { name: 'Jan', amount: 4000 },
    { name: 'Feb', amount: 3000 },
    { name: 'Mar', amount: 5000 },
    { name: 'Apr', amount: 4500 },
    { name: 'May', amount: 6000 },
    { name: 'Jun', amount: 5500 },
];

const DashboardHomePage: React.FC = () => {
    const { sermons, events, pastors, galleryImages } = useData();
    const { t } = useTranslation();

    const SermonIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.25278C12 6.25278 5.66667 3.75 5.66667 3.75C5.66667 3.75 5 11.25 5 11.25C5 11.25 12 20.25 12 20.25C12 20.25 19 11.25 19 11.25C19 11.25 18.3333 3.75 18.3333 3.75C18.3333 3.75 12 6.25278 12 6.25278Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 14.25C12 14.25 10.3333 13.5 10.3333 12.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    const EventIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
    const PastorIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
    const GalleryIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">{t('admin.dashboardTitle')}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <StatCard title={t('admin.dashboardTotalSermons')} value={sermons.length} icon={SermonIcon} />
                <StatCard title={t('admin.dashboardUpcomingEvents')} value={events.filter(e => new Date(e.date) >= new Date()).length} icon={EventIcon} />
                <StatCard title={t('admin.dashboardPastoralStaff')} value={pastors.length} icon={PastorIcon} />
                <StatCard title={t('admin.dashboardGalleryImages')} value={galleryImages.length} icon={GalleryIcon} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Sermon Views (Last 4 Weeks)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={sermonViewsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="views" fill="#FF8C42" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Giving Overview (YTD)</h2>
                     <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={givingData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value) => `$${value}`} />
                            <Legend />
                            <Line type="monotone" dataKey="amount" stroke="#0A2463" activeDot={{ r: 8 }}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardHomePage;