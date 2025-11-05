import React from 'react';
import { useData } from '../../context/DataContext';

const ManageGalleryPage: React.FC = () => {
    const { galleryImages } = useData();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manage Gallery</h1>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {galleryImages.map(image => (
                        <div key={image.id} className="relative">
                            <img src={image.thumbnailUrl} alt={image.alt} className="w-full h-auto rounded-md" />
                            <p className="text-xs text-center mt-1 truncate">{image.alt}</p>
                        </div>
                    ))}
                </div>
                 <p className="p-4 text-sm text-center text-gray-500">Gallery management is not implemented in this demo.</p>
            </div>
        </div>
    );
};

export default ManageGalleryPage;
