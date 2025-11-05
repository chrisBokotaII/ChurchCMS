
import React from 'react';
import { useTranslation } from '../i18n';

const Section: React.FC<{ title: string; content: string }> = ({ title, content }) => (
    <div className="mb-6">
        <h2 className="text-2xl font-bold text-dark mb-2">{title}</h2>
        <p>{content}</p>
    </div>
);

const TermsPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-light py-12 px-4">
            <div className="max-w-screen-lg mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-serif text-primary">{t('termsPage.title')}</h1>
                </div>
                
                <div className="prose max-w-none text-gray-700 text-lg">
                    <Section title={t('termsPage.p1Title')} content={t('termsPage.p1Content')} />
                    <Section title={t('termsPage.p2Title')} content={t('termsPage.p2Content')} />
                    <Section title={t('termsPage.p3Title')} content={t('termsPage.p3Content')} />
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
