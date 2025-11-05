import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';

// A mock component to simulate react-youtube
const YouTube: React.FC<{ videoId: string; opts: object, className?: string }> = ({ videoId, opts, className }) => {
    const src = `https://www.youtube.com/embed/${videoId}`;
    return (
        <iframe
            className={className}
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
};

const GivingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [amount, setAmount] = useState('50');
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile'>('card');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        // Reset form state when modal opens
        if (isOpen) {
            setAmount('50');
            setPaymentMethod('card');
            setIsProcessing(false);
            setIsSuccess(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;
    
    const handleDonate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
            }, 2000);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 relative">
                    <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
                    {isSuccess ? (
                        <div className="text-center py-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-2xl font-bold text-dark">{t('give.thankYou')}</h3>
                            <p className="text-gray-600 mt-2">{t('give.thankYouMessage')}</p>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold text-center text-dark mb-6">{t('give.modalTitle')}</h3>
                            <form onSubmit={handleDonate}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('give.amountLabel')}</label>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 text-lg mr-2">$</span>
                                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md text-lg" required />
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        {['25', '50', '100', '250'].map(val => (
                                            <button type="button" key={val} onClick={() => setAmount(val)} className={`px-4 py-1 text-sm rounded-full border ${amount === val ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>${val}</button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex border-b border-gray-200">
                                        <button type="button" onClick={() => setPaymentMethod('card')} className={`flex-1 py-2 text-sm font-semibold ${paymentMethod === 'card' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}>{t('give.card')}</button>
                                        <button type="button" onClick={() => setPaymentMethod('mobile')} className={`flex-1 py-2 text-sm font-semibold ${paymentMethod === 'mobile' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}>{t('give.mobile')}</button>
                                    </div>
                                    <div className="pt-4">
                                        {paymentMethod === 'card' ? (
                                            <div className="space-y-3">
                                                <input type="text" placeholder={t('give.cardNumber')} className="w-full p-2 border border-gray-300 rounded-md" />
                                                <div className="flex gap-3">
                                                    <input type="text" placeholder={t('give.expiry')} className="w-1/2 p-2 border border-gray-300 rounded-md" />
                                                    <input type="text" placeholder={t('give.cvc')} className="w-1/2 p-2 border border-gray-300 rounded-md" />
                                                </div>
                                            </div>
                                        ) : (
                                            <input type="tel" placeholder={t('give.phoneNumber')} className="w-full p-2 border border-gray-300 rounded-md" />
                                        )}
                                    </div>
                                </div>
                                <button type="submit" disabled={isProcessing} className="w-full bg-secondary text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-700 transition disabled:bg-orange-300">
                                    {isProcessing ? t('give.processing') : t('give.giveAmount', { amount })}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


const LivePage: React.FC = () => {
    const { t } = useTranslation();
    const [isLive, setIsLive] = useState(true); 
    const [isGivingModalOpen, setIsGivingModalOpen] = useState(false);
    const YOUTUBE_VIDEO_ID = 'jfKfPfyJRdk'; // A placeholder live stream video

    return (
        <>
            <div className="bg-light py-12 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold font-serif text-primary">{t('live.title')}</h1>
                        <p className="mt-2 text-lg text-gray-600">{t('live.subtitle')}</p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-2xl overflow-hidden">
                        <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                           {isLive ? (
                                <YouTube 
                                    videoId={YOUTUBE_VIDEO_ID} 
                                    className="absolute top-0 left-0 w-full h-full"
                                    opts={{
                                        height: '100%',
                                        width: '100%',
                                        playerVars: {
                                            autoplay: 1,
                                            controls: 1,
                                            fs: 1,
                                        },
                                    }} 
                                />
                           ) : (
                                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-dark text-white p-4 text-center">
                                    <h2 className="text-3xl font-bold">{t('live.notLiveTitle')}</h2>
                                    <p className="mt-2 text-lg">{t('live.notLiveSubtitle')}</p>
                                </div>
                           )}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
                        {isLive && (
                            <span className="inline-flex items-center bg-red-100 text-red-800 text-lg font-medium px-4 py-2 rounded-full">
                                <span className="relative flex h-3 w-3 mr-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                {t('live.liveNow')}
                            </span>
                        )}
                        <button onClick={() => setIsGivingModalOpen(true)} className="w-full md:w-auto text-center px-8 py-3 text-lg font-medium text-white bg-secondary rounded-lg shadow hover:bg-orange-700 transition">
                            {t('live.giveOnline')}
                        </button>
                         <a href={`https://youtube.com/live_chat?v=${YOUTUBE_VIDEO_ID}`} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-center px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg shadow hover:bg-blue-800 transition">
                            {t('live.joinChat')}
                        </a>
                    </div>

                    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-2xl font-bold text-dark mb-4">{t('live.welcomeTitle')}</h3>
                        <p className="text-gray-600">
                           {t('live.welcomeMessage')}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                            <a href="#" className="text-primary font-semibold hover:underline">{t('live.sermonNotes')}</a>
                            <a href="#" className="text-primary font-semibold hover:underline">{t('live.connectCard')}</a>
                            <a href="#" className="text-primary font-semibold hover:underline">{t('live.aboutUs')}</a>
                        </div>
                    </div>

                </div>
            </div>
            <GivingModal isOpen={isGivingModalOpen} onClose={() => setIsGivingModalOpen(false)} />
        </>
    );
};

export default LivePage;