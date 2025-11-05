import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';

const InfoCard: React.FC<{ title: string; children: React.ReactNode, icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
        <div className="flex items-center gap-4 mb-3">
            <div className="bg-secondary text-white p-3 rounded-full">{icon}</div>
            <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        {typeof children === 'string' ? (
            <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: children }} />
        ) : (
            <div className="text-gray-600">{children}</div>
        )}
    </div>
);

const NewHerePage: React.FC = () => {
    const { t } = useTranslation();

    const ClockIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    const LocationIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
    const UsersIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 5.197" /></svg>;
    const CrossIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-6-6h12" /></svg>;

    return (
        <div className="bg-light">
            {/* Hero Section */}
            <section className="bg-primary text-white text-center py-20 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/new-hero/1200/400)', filter: 'brightness(0.4)'}}></div>
                <div className="relative">
                    <h1 className="text-5xl font-bold font-serif">{t('newHere.heroTitle')}</h1>
                    <p className="mt-4 text-xl max-w-2xl mx-auto">{t('newHere.heroSubtitle')}</p>
                </div>
            </section>

            {/* Main Content */}
            <div className="py-16 px-4">
                <div className="max-w-screen-xl mx-auto">
                    {/* Service Times & Location */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <InfoCard title={t('newHere.serviceTimes')} icon={ClockIcon}>
                                {t('newHere.serviceTimesDesc')}
                            </InfoCard>
                             <InfoCard title={t('newHere.location')} icon={LocationIcon}>
                                {t('newHere.locationDesc')}
                            </InfoCard>
                        </div>
                    </section>
                    
                    {/* What to Expect */}
                    <section className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-serif text-primary mb-8">{t('newHere.whatToExpect')}</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2">{t('newHere.worshipStyle')}</h3>
                                <p className="text-gray-600">{t('newHere.worshipStyleDesc')}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2">{t('newHere.whatToWear')}</h3>
                                <p className="text-gray-600">{t('newHere.whatToWearDesc')}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2">{t('newHere.forYourKids')}</h3>
                                <p className="text-gray-600">{t('newHere.forYourKidsDesc')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Beliefs & Connect */}
                    <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <InfoCard title={t('newHere.ourBeliefs')} icon={CrossIcon}>
                            <>
                                <p>{t('newHere.ourBeliefsDesc')}</p>
                                <Link to="/pastors" className="text-secondary font-bold hover:underline mt-2 inline-block">{t('newHere.meetPastors')}</Link>
                            </>
                        </InfoCard>
                        <InfoCard title={t('newHere.getConnected')} icon={UsersIcon}>
                             <>
                                <p>{t('newHere.getConnectedDesc')}</p>
                                <a href="#" className="text-secondary font-bold hover:underline mt-2 inline-block">{t('newHere.fillConnectCard')}</a>
                            </>
                        </InfoCard>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default NewHerePage;