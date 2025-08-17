import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Hero = ({ addListSubmit }) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newList = {
            title,
            location,
            date,
            details
        }

        try {
            await addListSubmit(newList);
            setTitle('');
            setLocation('');
            setDate('');
            setDetails('');
            navigate('/all-listings');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className='px-4 py-20'>
            <div className='max-w-2xl mx-auto'>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Create New Task</h2>
                        <p className="text-gray-600">Add your task details below</p>
                    </div>

                    <form className='space-y-6' onSubmit={submitForm}>
                        <input
                            type="text"
                            placeholder='Task Title'
                            className='w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none transition-colors duration-200 focus:border-indigo-500'
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input
                                type="text"
                                placeholder='Location'
                                className='w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none transition-colors duration-200 focus:border-indigo-500'
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <input
                                type="date"
                                className='w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none transition-colors duration-200 focus:border-indigo-500'
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <textarea
                            placeholder='Task Details'
                            className='w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none resize-none transition-colors duration-200 focus:border-indigo-500'
                            rows="4"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        />

                        
                        <Button
                            onClick={() => onDeleteClick(todos.id)}  // Ada 'onClick' = jadi Button
                            variant="primary"
                            type='submit'
                            disabled={isSubmitting}
                            icon="fa-solid fa-trash-can"
                            className="flex-1 w-full py-5"
                        >
                            {isSubmitting ? 'Creating Task...' : 'Create Task'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero