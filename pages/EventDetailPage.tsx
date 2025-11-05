import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useTranslation } from '../i18n';

const EventDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const { events } = useData();
    const event = events.find(e => e.id === Number(id));

    if (!event) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Event not found</h1>
                <Link to="/events" className="mt-4 inline-block text-primary hover:underline">
                    &larr; Back to all events
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-light">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    <img src={event.imageUrl} alt={event.title} className="w-full h-64 md:h-96 object-cover" />
                    <div className="p-8 md:p-12">
                        <span className="inline-block bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider">{event.category}</span>
                        <h1 className="text-4xl font-bold font-serif text-primary mt-4">{event.title}</h1>
                        
                        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-lg text-gray-700">
                            <div className="flex items-center gap-2">
                                {/* Calendar Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <span>{new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                {/* Clock Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{event.time}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                {/* Location Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>{event.location}</span>
                            </div>
                        </div>

                        <div className="mt-8 prose max-w-none text-gray-800 text-lg">
                            <p>{event.description}</p>
                        </div>
                        
                        <div className="mt-10 flex flex-wrap gap-4">
                            {event.registrationUrl && (
                                <a href={event.registrationUrl} className="bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition">
                                    {t('eventDetail.register')}
                                </a>
                            )}
                             {event.calendarLink && (
                                <a href={event.calendarLink} className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition">
                                    {t('eventDetail.addToCalendar')}
                                </a>
                            )}
                        </div>
                         <div className="mt-12 border-t pt-6">
                            <Link to="/events" className="text-primary font-semibold hover:underline">&larr; {t('eventDetail.backToEvents')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;