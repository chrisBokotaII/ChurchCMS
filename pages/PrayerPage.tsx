
import React, { useState } from 'react';
import { useTranslation } from '../i18n';

const PrayerPage: React.FC = () => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-light py-12 px-4">
            <div className="max-w-screen-md mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-serif text-primary">{t('prayerPage.title')}</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">{t('prayerPage.subtitle')}</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {submitted ? (
                         <div className="text-center py-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-2xl font-bold text-dark">{t('prayerPage.requestSent')}</h3>
                            <p className="text-gray-600 mt-2">{t('prayerPage.requestSentDesc')}</p>
                        </div>
                    ) : (
                        <>
                            <p className="text-gray-700 text-lg mb-8 text-center">{t('prayerPage.intro')}</p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('prayerPage.formName')}</label>
                                    <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="request" className="block text-sm font-medium text-gray-700">{t('prayerPage.formRequest')}</label>
                                    <textarea id="request" rows={8} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        {t('prayerPage.submitRequest')}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PrayerPage;
