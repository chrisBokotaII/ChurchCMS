import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SERMONS_DATA, EVENTS_DATA, PASTORS_DATA, GALLERY_DATA } from '../constants';
import { Sermon, Event, Pastor, GalleryImage } from '../types';

interface DataContextType {
    sermons: Sermon[];
    events: Event[];
    pastors: Pastor[];
    galleryImages: GalleryImage[];
    addSermon: (sermon: Omit<Sermon, 'id'>) => void;
    updateSermon: (sermon: Sermon) => void;
    deleteSermon: (id: number) => void;
    addEvent: (event: Omit<Event, 'id'>) => void;
    updateEvent: (event: Event) => void;
    deleteEvent: (id: number) => void;
    // ... similar functions for pastors and gallery
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sermons, setSermons] = useState<Sermon[]>(SERMONS_DATA);
    const [events, setEvents] = useState<Event[]>(EVENTS_DATA);
    const [pastors, setPastors] = useState<Pastor[]>(PASTORS_DATA);
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(GALLERY_DATA);

    const addSermon = (sermon: Omit<Sermon, 'id'>) => {
        setSermons(prev => [{ ...sermon, id: Date.now() }, ...prev]);
    };
    const updateSermon = (updatedSermon: Sermon) => {
        setSermons(prev => prev.map(s => s.id === updatedSermon.id ? updatedSermon : s));
    };
    const deleteSermon = (id: number) => {
        setSermons(prev => prev.filter(s => s.id !== id));
    };

    const addEvent = (event: Omit<Event, 'id'>) => {
        setEvents(prev => [{ ...event, id: Date.now() }, ...prev]);
    };
    const updateEvent = (updatedEvent: Event) => {
        setEvents(prev => prev.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    };
    const deleteEvent = (id: number) => {
        setEvents(prev => prev.filter(e => e.id !== id));
    };

    // Implement pastor and gallery functions if needed for the admin panel

    const value = { 
        sermons, events, pastors, galleryImages, 
        addSermon, updateSermon, deleteSermon,
        addEvent, updateEvent, deleteEvent
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
