import React from 'react'

const CurrentDataCard = ({data}) => {
    return (
       <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Current Data</h2>
                        <p className="text-yellow-100 mt-1">What's currently stored</p>
                    </div>
                </div>
            </div>

            <div className="p-8 space-y-6">
                <div className="group">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fa-solid fa-heading text-yellow-500 text-sm"></i>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Title</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                        <p className="text-lg text-gray-800 font-medium">
                            {data.todo}
                        </p>
                    </div>
                </div>

                <div className="group">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fa-regular fa-calendar text-orange-500 text-sm"></i>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Date</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                        <p className="text-lg text-gray-800 font-medium">
                            {data.date}
                        </p>
                    </div>
                </div>

                <div className="group">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fa-solid fa-map-pin text-red-500 text-sm"></i>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Location</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                        <p className="text-lg text-gray-800 font-medium">
                            {data.location}
                        </p>
                    </div>
                </div>

                <div className="group">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <i className="fa-solid fa-file-text text-purple-500 text-sm"></i>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Details</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                        <p className="text-gray-800 leading-relaxed">
                            {data.details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentDataCard