import React, { useState } from 'react';
import { useTranslation } from '../i18n';

const GivePage: React.FC = () => {
    const { t } = useTranslation();
    const [amount, setAmount] = useState('50');
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile'>('card');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleDonate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 1500);
    };
    
    const handleReset = () => {
        setIsSuccess(false);
        setAmount('50');
        setPaymentMethod('card');
    }

    return (
        <div className="bg-light py-12 px-4">
            <div className="max-w-screen-md mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-serif text-primary">{t('give.pageTitle')}</h1>
                    <p className="mt-2 text-lg text-gray-600">{t('give.pageSubtitle')}</p>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                    {isSuccess ? (
                        <div className="text-center py-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-3xl font-bold text-dark">{t('give.thankYou')}</h3>
                            <p className="text-gray-600 mt-2 text-lg">{t('give.thankYouMessage')}</p>
                             <button onClick={handleReset} className="mt-8 w-full md:w-auto text-center px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg shadow hover:bg-blue-800 transition">
                                {t('give.giveAgain')}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleDonate}>
                            <div className="mb-6">
                                <label className="block text-lg font-semibold text-gray-800 mb-3">{t('give.chooseAmountLabel')}</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                                    {['25', '50', '100', '250'].map(val => (
                                        <button type="button" key={val} onClick={() => setAmount(val)} className={`p-3 text-lg font-semibold rounded-lg border-2 transition ${amount === val ? 'bg-primary text-white border-primary' : 'bg-white text-gray-800 border-gray-300 hover:border-primary'}`}>${val}</button>
                                    ))}
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 text-2xl mr-2">$</span>
                                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-3 border-2 border-gray-300 rounded-lg text-2xl font-bold focus:ring-primary focus:border-primary" required />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-lg font-semibold text-gray-800 mb-3">{t('give.paymentMethodLabel')}</label>
                                <div className="flex border-b border-gray-200">
                                    <button type="button" onClick={() => setPaymentMethod('card')} className={`flex-1 py-3 text-md font-semibold ${paymentMethod === 'card' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}>{t('give.card')}</button>
                                    <button type="button" onClick={() => setPaymentMethod('mobile')} className={`flex-1 py-3 text-md font-semibold ${paymentMethod === 'mobile' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}>{t('give.mobile')}</button>
                                </div>
                                <div className="pt-6">
                                    {paymentMethod === 'card' ? (
                                        <div className="space-y-4">
                                            <input type="text" placeholder={t('give.cardNumber')} className="w-full p-3 border border-gray-300 rounded-md text-lg" />
                                            <div className="flex gap-4">
                                                <input type="text" placeholder={t('give.expiry')} className="w-1/2 p-3 border border-gray-300 rounded-md text-lg" />
                                                <input type="text" placeholder={t('give.cvc')} className="w-1/2 p-3 border border-gray-300 rounded-md text-lg" />
                                            </div>
                                        </div>
                                    ) : (
                                        <input type="tel" placeholder={t('give.phoneNumber')} className="w-full p-3 border border-gray-300 rounded-md text-lg" />
                                    )}
                                </div>
                            </div>
                            <button type="submit" disabled={isProcessing} className="w-full bg-secondary text-white font-bold py-4 px-4 rounded-lg text-xl hover:bg-orange-700 transition disabled:bg-orange-300">
                                {isProcessing ? t('give.processing') : t('give.giveAmount', { amount })}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GivePage;