import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../i18n';
import { useData } from '../context/DataContext';
import { Sermon } from '../types';

const AudioPlayer: React.FC<{ src: string }> = ({ src }) => {
    const { t } = useTranslation();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current?.duration || 0);
    };
    
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = Number(e.target.value);
            setCurrentTime(audio.currentTime);
        }
    };
    
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="flex items-center gap-3 w-full">
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
            />
            <button onClick={togglePlayPause} className="p-2 text-primary hover:bg-light rounded-full">
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                )}
            </button>
            <div className="flex items-center gap-2 flex-grow">
                <span className="text-sm text-gray-500 w-10">{formatTime(currentTime)}</span>
                <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-500 w-10">{formatTime(duration)}</span>
            </div>
        </div>
    );
};


const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: sermon.title,
      text: `${sermon.title} by ${sermon.speaker}. From Community Grace Church.`,
      url: sermon.videoUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(sermon.videoUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={sermon.thumbnailUrl} alt={sermon.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500">{sermon.date} | {sermon.series}</p>
        <h3 className="text-xl font-bold text-dark mt-2 mb-1">{sermon.title}</h3>
        <p className="text-gray-700 mb-4">by {sermon.speaker}</p>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{sermon.description}</p>
        <div className="mt-auto space-y-4">
            <div className="flex items-center gap-2">
                <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-2 text-center text-white bg-primary rounded-md font-semibold hover:bg-blue-800 transition">
                    {t('sermonsPage.watchVideo')}
                </a>
                <button onClick={handleShare} title={t('sermonsPage.shareSermon')} className="p-2.5 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 hover:text-primary transition relative">
                {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                )}
                {copied && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-2 py-1 rounded">{t('sermonsPage.copied')}</span>}
                </button>
            </div>
            <AudioPlayer src={sermon.audioUrl} />
        </div>
      </div>
    </div>
  );
};

const SermonsPage: React.FC = () => {
  const { t } = useTranslation();
  const { sermons } = useData();

  return (
    <div className="bg-light py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-primary">{t('sermonsPage.title')}</h1>
          <p className="mt-2 text-lg text-gray-600">{t('sermonsPage.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SermonsPage;