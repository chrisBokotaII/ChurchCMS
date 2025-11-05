import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { useData } from '../context/DataContext';
import { Sermon, Event } from '../types';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { sermons, events } = useData();

  const latestSermon: Sermon | undefined = sermons.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  const upcomingEvent: Event | undefined = events
    .filter(e => new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white text-center py-24 px-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://picsum.photos/seed/hero/1600/900)' }}></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold font-serif">{t('home.welcomeTitle')}</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">{t('home.welcomeSubtitle')}</p>
          <div className="mt-8">
            <Link to="/new-here" className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition">
              {t('home.imNew')}
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-primary mb-4">{t('home.serviceTimes')}</h2>
          <p className="text-xl text-gray-700">{t('home.serviceDetails')}</p>
          <p className="text-lg text-gray-600 mt-2">{t('home.serviceLocation')}</p>
        </div>
      </section>
      
      {/* Latest Sermon */}
      {latestSermon && (
        <section className="py-16">
          <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold font-serif text-primary text-center mb-8">{t('home.latestSermon')}</h2>
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={latestSermon.thumbnailUrl} alt={latestSermon.title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
              <div className="p-8">
                <p className="text-sm text-gray-500">{latestSermon.date} | {latestSermon.series}</p>
                <h3 className="text-2xl font-bold text-dark mt-2">{latestSermon.title}</h3>
                <p className="text-lg text-gray-700">by {latestSermon.speaker}</p>
                <p className="mt-4 text-gray-600">{latestSermon.description}</p>
                <Link to="/sermons" className="mt-6 inline-block bg-primary text-white font-semibold py-2 px-6 rounded hover:bg-blue-800 transition">
                  {t('home.watchNow')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Event */}
      {upcomingEvent && (
         <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-8">{t('home.upcomingEvent')}</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
                <img className="w-full md:w-1/2 h-64 object-cover" src={upcomingEvent.imageUrl} alt={upcomingEvent.title} />
                <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-dark">{upcomingEvent.title}</h3>
                    <p className="text-gray-600 mt-2">{upcomingEvent.date} @ {upcomingEvent.time}</p>
                    <p className="mt-4 text-gray-700">{upcomingEvent.description.substring(0, 100)}...</p>
                    <Link to={`/events/${upcomingEvent.id}`} className="mt-4 text-secondary font-bold hover:underline">{t('home.learnMore')}</Link>
                </div>
            </div>
          </div>
        </section>
      )}

      {/* Connect Section */}
      <section className="py-20 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-serif text-primary mb-4">{t('home.getConnected')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t('home.connectMessage')}</p>
          <div className="flex justify-center flex-wrap gap-4">
             <Link to="/small-groups" className="bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-700 transition">{t('home.findGroup')}</Link>
             <Link to="/contact" className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition">{t('home.contactUs')}</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;