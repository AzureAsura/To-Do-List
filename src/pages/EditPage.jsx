import React from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CurrentDataCard from '../components/CurrentDataCard';
import { Link } from 'react-router-dom';


const EditPage = ({ editListSubmit }) => {
    const list = useLoaderData();
    const navigate = useNavigate();
    const { id } = useParams()

    const [title, setTitle] = useState(list.todo);
    const [location, setLocation] = useState(list.location);
    const [date, setDate] = useState(list.date);
    const [details, setDetails] = useState(list.details);

    const submitForm = (e) => {
        e.preventDefault();

        const updatedList = {
            id,
            title,
            location,
            date,
            details
        }

        editListSubmit(updatedList);
        navigate('/all-listings');
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <CurrentDataCard data={list} />

                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Update Form</h2>
                                    <p className="text-yellow-100 mt-1">Make your changes here</p>
                                </div>
                            </div>
                        </div>

                        <form className="p-8 space-y-6" onSubmit={submitForm}>
                            <div className="space-y-3">
                                <label className="flex items-center text-sm font-semibold text-gray-700">
                                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-heading text-yellow-500 text-sm"></i>
                                    </div>
                                    New Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your todo title..."
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all duration-300"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center text-sm font-semibold text-gray-700">
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-regular fa-calendar text-orange-500 text-sm"></i>
                                    </div>
                                    New Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center text-sm font-semibold text-gray-700">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-map-pin text-red-500 text-sm"></i>
                                    </div>
                                    New Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="Where is this happening..."
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center text-sm font-semibold text-gray-700">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-file-text text-purple-500 text-sm"></i>
                                    </div>
                                    New Details
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Describe your todo in detail..."
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 resize-none"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-4 pt-8">
                                <Link
                                    to={`/all-listings`}
                                    className="flex flex-1 items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-semibold transition-all duration-300 border border-gray-300"
                                >
                                    <i className="fa-solid fa-times mr-2"></i>
                                    Cancel
                                </Link>

                                <button
                                    type="submit"
                                    className="flex-1 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl font-semibold shadow-lg "
                                >
                                    <i className="fa-solid fa-check mr-2"></i>
                                    Update Todo
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditPage;
