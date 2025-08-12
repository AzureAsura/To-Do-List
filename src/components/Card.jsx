import React from 'react'

const Card = ({ todos }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="p-6 flex flex-col h-full">

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {todos.todo}
                </h3>


                <div class="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span class="flex items-center">
                        <i class="fa-regular fa-calendar-days text-indigo-500 mr-1"></i>
                        {todos.location}
                    </span>
                    <span class="flex items-center">
                        <i class="fa-solid fa-location-dot text-red-500 mr-1"></i>
                        {todos.date}
                    </span>
                </div>


                <p className="text-gray-600 flex-grow">
                    {todos.details}
                </p>


                <div className="border-t border-gray-200 my-4"></div>


                <div className="flex gap-3">
                    <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-sm font-medium transition">
                        <i className="fa-solid fa-pen-to-square mr-1"></i>Edit
                    </button>
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition">
                        <i className="fa-solid fa-trash-can mr-1"></i>Delete
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Card