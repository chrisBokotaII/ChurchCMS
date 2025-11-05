import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { useData } from '../context/DataContext';

const GalleryPage: React.FC = () => {
    const { t } = useTranslation();
    const { galleryImages } = useData();

    const albums = [...new Set(galleryImages.map(img => img.album))];
    const [selectedAlbum, setSelectedAlbum] = useState('All');
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const filteredImages = selectedAlbum === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.album === selectedAlbum);

    return (
        <div className="bg-light py-12 px-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-serif text-primary">{t('galleryPage.title')}</h1>
                    <p className="mt-2 text-lg text-gray-600">{t('galleryPage.subtitle')}</p>
                </div>
                
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    <button onClick={() => setSelectedAlbum('All')} className={`px-4 py-2 rounded-full font-semibold text-sm ${selectedAlbum === 'All' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}>
                        {t('galleryPage.all')}
                    </button>
                    {albums.map(album => (
                        <button key={album} onClick={() => setSelectedAlbum(album)} className={`px-4 py-2 rounded-full font-semibold text-sm ${selectedAlbum === album ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}>
                            {album}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map(image => (
                        <div key={image.id} className="group relative cursor-pointer" onClick={() => setLightboxImage(image.imageUrl)}>
                            <img src={image.thumbnailUrl} alt={image.alt} className="w-full h-full object-cover rounded-lg shadow-md" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-2">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center" onClick={() => setLightboxImage(null)}>
                    <img src={lightboxImage} alt="Lightbox view" className="max-w-full max-h-full p-4" onClick={(e) => e.stopPropagation()}/>
                    <button className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;