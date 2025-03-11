import { useState } from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    category: 'Religious' | 'Social' | 'Charity';
}

export const Events = () => {
    const [events, setEvents] = useState<Event[]>([
        {
            id: 1,
            title: "Interfaith Dialogue",
            date: "2024-04-15",
            location: "Community Center",
            description: "Join us for an enlightening discussion between different faith leaders.",
            category: "Religious"
        },
        {
            id: 2,
            title: "Community Fundraiser",
            date: "2024-04-20",
            location: "City Park",
            description: "Help us raise funds for local community projects.",
            category: "Charity"
        },
        {
            id: 3,
            title: "Cultural Festival",
            date: "2024-04-25",
            location: "Downtown Square",
            description: "Celebrate diversity through food, music, and dance.",
            category: "Social"
        }
    ]);

    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showForm, setShowForm] = useState(false);
    const [newEvent, setNewEvent] = useState<{
        title: string;
        date: string;
        category: 'Religious' | 'Social' | 'Charity';
        description: string;
        location: string;
    }>({
        title: '',
        date: '',
        category: 'Social',
        description: '',
        location: ''
    });

    const filteredEvents = selectedCategory === 'all' 
        ? events 
        : events.filter(event => event.category === selectedCategory);

    const handleAddEvent = (e: React.FormEvent) => {
        e.preventDefault();
        const event: Event = {
            id: events.length + 1,
            ...newEvent
        };
        setEvents([...events, event]);
        setNewEvent({ title: '', date: '', category: 'Social', description: '', location: '' });
        setShowForm(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Community Events</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                    {showForm ? 'Cancel' : 'Add Event'}
                </button>
            </div>

            {/* Add Event Form */}
            {showForm && (
                <div className="mb-8 p-8 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Add New Event</h2>
                        <p className="mt-1 text-sm text-gray-500">Fill in the details to create a new community event</p>
                    </div>
                    <form onSubmit={handleAddEvent} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Event Title</label>
                                <input
                                    type="text"
                                    required
                                    value={newEvent.title}
                                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 pl-2"
                                    placeholder="Enter event title"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Event Date</label>
                                <input
                                    type="date"
                                    required
                                    value={newEvent.date}
                                    onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                                <select
                                    value={newEvent.category}
                                    onChange={(e) => setNewEvent({...newEvent, category: e.target.value as 'Religious' | 'Social' | 'Charity'})}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                                >
                                    <option value="Religious">🕊️ Religious</option>
                                    <option value="Social">👥 Social</option>
                                    <option value="Charity">❤️ Charity</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                                <input
                                    type="text"
                                    required
                                    value={newEvent.location}
                                    onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 pl-2"
                                    placeholder="Enter event location"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                            <textarea
                                required
                                value={newEvent.description}
                                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                                rows={4}
                                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 pl-2"
                                placeholder="Describe your event in detail..."
                            />
                            <p className="mt-1 text-sm text-gray-500">Include key information about your event that would interest potential attendees.</p>
                        </div>

                        <div className="flex items-center justify-end space-x-4 pt-4">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                            >
                                Create Event
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Category Filter */}
            <div className="mb-8">
                <div className="flex space-x-4">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-4 py-2 rounded-md ${
                            selectedCategory === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        All
                    </button>
                    {['Religious', 'Social', 'Charity'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Event List */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                    <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {event.category}
                                </span>
                            </div>
                            <div className="mt-2 text-sm text-gray-500">
                                <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                                <p>📍 {event.location}</p>
                            </div>
                            <p className="mt-3 text-gray-600">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 