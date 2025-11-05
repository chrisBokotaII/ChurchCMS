import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { Event } from '../../types';

const EventForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { events, addEvent, updateEvent } = useData();
    const [event, setEvent] = useState<Omit<Event, 'id'>>({
        title: '', date: '', time: '', location: '', imageUrl: '', description: '', category: 'Community'
    });

    const isEditing = Boolean(id);

    useEffect(() => {
        if (isEditing) {
            const existingEvent = events.find(e => e.id === Number(id));
            if (existingEvent) {
                setEvent(existingEvent);
            }
        }
    }, [id, isEditing, events]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEvent(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            updateEvent({ ...event, id: Number(id) });
        } else {
            addEvent(event);
        }
        navigate('/admin/events');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{isEditing ? 'Edit Event' : 'Add New Event'}</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4 max-w-2xl mx-auto">
                <div><label className="block text-sm font-medium text-gray-700">Title</label><input required name="title" value={event.title} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Category</label>
                    <select name="category" value={event.category} onChange={handleChange} className="mt-1 w-full p-2 border rounded">
                        <option>Community</option>
                        <option>Youth</option>
                        <option>Worship</option>
                        <option>Outreach</option>
                    </select>
                </div>
                <div><label className="block text-sm font-medium text-gray-700">Date</label><input required type="date" name="date" value={event.date} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Time</label><input required name="time" value={event.time} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Location</label><input required name="location" value={event.location} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Description</label><textarea required name="description" value={event.description} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Image URL</label><input type="url" name="imageUrl" value={event.imageUrl} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div className="flex justify-end space-x-4">
                    <button type="button" onClick={() => navigate('/admin/events')} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
                    <button type="submit" className="px-4 py-2 text-white bg-primary rounded-md hover:bg-blue-800">{isEditing ? 'Update Event' : 'Create Event'}</button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;
