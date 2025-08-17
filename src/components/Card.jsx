import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const Card = ({ todos, deleteList, noMb = false }) => {
    const navigate = useNavigate()

    const onDeleteClick = (listId) => {
        const confirm = window.confirm('Are you sure you want to delete this?')

        if (!confirm) {
            return
        }
        deleteList(listId)
        navigate('/all-listings')
    }

    return (
        <div className={`group relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-indigo-200 hover:-translate-y-2 ${noMb ? '' : 'mb-8'} `}>
        
            
            <div className="relative p-7 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
                            {todos.title}
                        </h3>
                    </div>
                </div>


                <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white group-hover:border-indigo-100 transition-all duration-300">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-sm">
                            <i className="fa-solid fa-location-dot text-white text-xs"></i>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Location</p>
                            <p className="text-sm font-semibold text-gray-700">{todos.location}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg shadow-sm">
                            <i className="fa-regular fa-calendar-days text-white text-xs"></i>
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-gray-500 font-medium">Date</p>
                            <p className="text-sm font-semibold text-gray-700">{todos.date}</p>
                        </div>
                    </div>
                </div>


                <div className="flex-grow mb-6">
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                        {todos.details}
                    </p>
                </div>


                <div className="flex gap-3">
                    {/* Button as Link - pakai prop 'to' */}
                    <Button
                        to={`/edit/${todos.id}`}  // Ada 'to' = jadi Link
                        variant="edit"
                        icon="fa-solid fa-pen-to-square"
                        className="flex-1"
                    >
                        Edit
                    </Button>
                    
                    {/* Button as Button - pakai prop 'onClick' */}
                    <Button
                        onClick={() => onDeleteClick(todos.id)}  // Ada 'onClick' = jadi Button
                        variant="delete"
                        icon="fa-solid fa-trash-can"
                        className="flex-1"
                    >
                        Delete
                    </Button>
                </div>
            </div>


           
        </div>
    )
}

export default Card