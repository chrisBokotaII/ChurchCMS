import React from 'react';
import { useTranslation } from '../i18n';
import { useData } from '../context/DataContext';
import { Pastor } from '../types';

const PastorCard: React.FC<{ pastor: Pastor }> = ({ pastor }) => (
    <div className="bg-white rounded-lg shadow-lg text-center p-8">
        <img
            src={pastor.imageUrl}
            alt={`Portrait of ${pastor.name}`}
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-secondary"
        />
        <h3 className="text-2xl font-bold text-primary">{pastor.name}</h3>
        <p className="text-md font-semibold text-gray-500 mb-4">{pastor.title}</p>
        <p className="text-gray-600">{pastor.bio}</p>
    </div>
);


const PastorsPage: React.FC = () => {
    const { t } = useTranslation();
    const { pastors } = useData();

    return (
        <div className="bg-light py-12 px-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-serif text-primary">{t('pastorsPage.title')}</h1>
                    <p className="mt-2 text-lg text-gray-600">{t('pastorsPage.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pastors.map(pastor => (
                        <PastorCard key={pastor.id} pastor={pastor} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PastorsPage;