import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SERMONS_DATA, EVENTS_DATA, PASTORS_DATA, GALLERY_DATA } from '../constants';
import { Sermon, Event, Pastor, GalleryImage } from '../types';

interface DataContextType {
    sermons: Sermon[];
    events: Event[];
    pastors: Pastor[];
    galleryImages: GalleryImage[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sermons] = useState<Sermon[]>(SERMONS_DATA);
    const [events] = useState<Event[]>(EVENTS_DATA);
    const [pastors] = useState<Pastor[]>(PASTORS_DATA);
    const [galleryImages] = useState<GalleryImage[]>(GALLERY_DATA);

    const value = { 
        sermons, events, pastors, galleryImages
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = (): DataContextType => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};