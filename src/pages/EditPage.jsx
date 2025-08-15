import React from 'react';

const EditPage = () => {
    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Main Content */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    
                    {/* Current Data Section */}
                    <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Current Data</h2>
                                    <p className="text-yellow-100 mt-1">What's currently stored</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 space-y-6">
                            {/* Current Title */}
                            <div className="group">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-heading text-yellow-400 text-sm"></i>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Title</span>
                                </div>
                                <div className="bg-gray-700/50 rounded-2xl p-4 border border-gray-600">
                                    <p className="text-lg text-white font-medium">
                                        {/* Data akan muncul disini */}
                                        Loading current title...
                                    </p>
                                </div>
                            </div>

                            {/* Current Date */}
                            <div className="group">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-regular fa-calendar text-orange-400 text-sm"></i>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Date</span>
                                </div>
                                <div className="bg-gray-700/50 rounded-2xl p-4 border border-gray-600">
                                    <p className="text-lg text-white font-medium">
                                        Loading current date...
                                    </p>
                                </div>
                            </div>

                            {/* Current Location */}
                            <div className="group">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-map-pin text-red-400 text-sm"></i>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Location</span>
                                </div>
                                <div className="bg-gray-700/50 rounded-2xl p-4 border border-gray-600">
                                    <p className="text-lg text-white font-medium">
                                        Loading current location...
                                    </p>
                                </div>
                            </div>

                            {/* Current Details */}
                            <div className="group">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-file-text text-red-400 text-sm"></i>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Details</span>
                                </div>
                                <div className="bg-gray-700/50 rounded-2xl p-4 border border-gray-600">
                                    <p className="text-white leading-relaxed">
                                        Loading current details...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit Form Section */}
                    <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Update Form</h2>
                                    <p className="text-yellow-100 mt-1">Make your changes here</p>
                                </div>
                            </div>
                        </div>

                        <form className="p-8 space-y-6">
                            {/* Title Input */}
                            <div className="space-y-3">
                                <label className="flex items-center text-sm font-semibold text-gray-300">
                                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-heading text-yellow-400 text-sm"></i>
                                    </div>
                                    New Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your todo title..."
                                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:bg-gray-700 outline-none transition-all duration-300"
                                />
                            </div>

                            {/* Date Input */}
                            <div className="space-y-3">
                                <label className="flex items-center text-sm font-semibold text-gray-300">
                                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-regular fa-calendar text-orange-400 text-sm"></i>
                                    </div>
                                    New Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-gray-700 outline-none transition-all duration-300"
                                />
                            </div>

                            {/* Location Input */}
                            <div className="space-y-3">
                                <label className="flex items-center text-sm font-semibold text-gray-300">
                                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-map-pin text-red-400 text-sm"></i>
                                    </div>
                                    New Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="Where is this happening..."
                                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:bg-gray-700 outline-none transition-all duration-300"
                                />
                            </div>

                            {/* Details Input */}
                            <div className="space-y-3">
                                <label className="flex items-center text-sm font-semibold text-gray-300">
                                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                                        <i className="fa-solid fa-file-text text-purple-400 text-sm"></i>
                                    </div>
                                    New Details
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Describe your todo in detail..."
                                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:bg-gray-700 outline-none transition-all duration-300 resize-none"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-8">
                                <button
                                    type="button"
                                    className="flex-1 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-2xl font-semibold transition-all duration-300 border border-gray-600 hover:border-gray-500"
                                >
                                    <i className="fa-solid fa-times mr-2"></i>
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <i className="fa-solid fa-check mr-2"></i>
                                    Update Todo
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                        <i className="fa-solid fa-arrow-left mr-2"></i>
                        Back to All Todos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditPage;