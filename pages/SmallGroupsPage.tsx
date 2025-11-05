
import React from 'react';
import { useTranslation } from '../i18n';

const InfoSection: React.FC<{ title: string; content: string }> = ({ title, content }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark mb-3">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{content}</p>
    </div>
);

const SmallGroupsPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-light">
            <section className="bg-dark text-white text-center py-20 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/groups-hero/1200/400)', filter: 'brightness(0.5)'}}></div>
                <div className="relative">
                    <h1 className="text-5xl font-bold font-serif">{t('smallGroupsPage.title')}</h1>
                    <p className="mt-4 text-xl max-w-2xl mx-auto">{t('smallGroupsPage.subtitle')}</p>
                </div>
            </section>

            <div className="py-16 px-4">
                <div className="max-w-screen-md mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
                    <InfoSection title={t('smallGroupsPage.section1Title')} content={t('smallGroupsPage.section1Content')} />
                    <InfoSection title={t('smallGroupsPage.section2Title')} content={t('smallGroupsPage.section2Content')} />
                    <InfoSection title={t('smallGroupsPage.section3Title')} content={t('smallGroupsPage.section3Content')} />
                </div>
            </div>
        </div>
    );
};

export default SmallGroupsPage;
