import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { useData } from '../context/DataContext';
import { Event } from '../types';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover" />
        <div className="p-6">
            <span className="inline-block bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">{event.category}</span>
            <h3 className="text-2xl font-bold text-dark mt-3">{event.title}</h3>
            <p className="text-gray-700 mt-2">{event.date} &bull; {event.time}</p>
            <p className="text-gray-600 mt-1">{event.location}</p>
            <p className="mt-4 text-gray-600">{event.description.substring(0, 120)}...</p>
            <Link to={`/events/${event.id}`} className="mt-4 inline-block text-primary font-bold hover:underline">
                View Details &rarr;
            </Link>
        </div>
    </div>
);


const EventsPage: React.FC = () => {
    const { t } = useTranslation();
    const { events } = useData();

    return (
        <div className="bg-light py-12 px-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-serif text-primary">{t('eventsPage.title')}</h1>
                    <p className="mt-2 text-lg text-gray-600">{t('eventsPage.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;