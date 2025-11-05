
import React from 'react';
import { useTranslation } from '../i18n';

const PrivacyPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-light py-12 px-4">
            <div className="max-w-screen-lg mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-serif text-primary">{t('privacyPage.title')}</h1>
                    <p className="mt-2 text-md text-gray-500">{t('privacyPage.lastUpdated')}</p>
                </div>
                
                <div className="prose max-w-none text-gray-700 text-lg space-y-4">
                    <p>{t('privacyPage.p1')}</p>
                    <p>{t('privacyPage.p2')}</p>
                    <p>{t('privacyPage.p3')}</p>
                    <p>{t('privacyPage.p4')}</p>
                    <p>{t('privacyPage.p5')}</p>
                    <p>{t('privacyPage.p6')}</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
