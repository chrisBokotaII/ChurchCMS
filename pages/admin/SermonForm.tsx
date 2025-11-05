import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { Sermon } from '../../types';

const SermonForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { sermons, addSermon, updateSermon } = useData();
    const [sermon, setSermon] = useState<Omit<Sermon, 'id'>>({
        title: '', speaker: '', series: '', date: '', videoUrl: '', audioUrl: '', thumbnailUrl: '', description: ''
    });

    const isEditing = Boolean(id);

    useEffect(() => {
        if (isEditing) {
            const existingSermon = sermons.find(s => s.id === Number(id));
            if (existingSermon) {
                setSermon(existingSermon);
            }
        }
    }, [id, isEditing, sermons]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSermon(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            updateSermon({ ...sermon, id: Number(id) });
        } else {
            addSermon(sermon);
        }
        navigate('/admin/sermons');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{isEditing ? 'Edit Sermon' : 'Add New Sermon'}</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4 max-w-2xl mx-auto">
                <div><label className="block text-sm font-medium text-gray-700">Title</label><input required name="title" value={sermon.title} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Speaker</label><input required name="speaker" value={sermon.speaker} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Series</label><input name="series" value={sermon.series} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Date</label><input required type="date" name="date" value={sermon.date} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Description</label><textarea required name="description" value={sermon.description} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                 <div><label className="block text-sm font-medium text-gray-700">Video URL</label><input type="url" name="videoUrl" value={sermon.videoUrl} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Audio URL</label><input type="url" name="audioUrl" value={sermon.audioUrl} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div><label className="block text-sm font-medium text-gray-700">Thumbnail URL</label><input type="url" name="thumbnailUrl" value={sermon.thumbnailUrl} onChange={handleChange} className="mt-1 w-full p-2 border rounded"/></div>
                <div className="flex justify-end space-x-4">
                    <button type="button" onClick={() => navigate('/admin/sermons')} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
                    <button type="submit" className="px-4 py-2 text-white bg-primary rounded-md hover:bg-blue-800">{isEditing ? 'Update Sermon' : 'Create Sermon'}</button>
                </div>
            </form>
        </div>
    );
};

export default SermonForm;