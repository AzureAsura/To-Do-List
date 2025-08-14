import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = ({addListSubmit}) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');

    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();

        const newList = {
            title,
            location, 
            date,
            details
        }

        addListSubmit(newList);
        navigate('/all-listings');
    }

    return (
        <div className='px-[10px] pb-[60px]'>
            <div className='max-w-[1000px] my-[80px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center'>

                {/* TEXT */}
                <div className='flex flex-col items-center text-center gap-[30px]'>
                    <h1 className="text-[max(4vw,36px)] font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg sm:leading-[70px] leading-[50px]">
                        To Do List <br /> Website
                    </h1>
                    <p className="w-[75%] text-[#e3e3e3] leading-relaxed text-lg opacity-90">
                        A secure and user-friendly crypto marketplace where you can trade, track, and explore digital assets with real-time prices, market trends, and valuable insights for smarter investing.
                    </p>
                </div>

                {/* FORM */}
                <form className='flex flex-col gap-[15px] bg-white p-[20px] rounded-[8px] shadow-lg text-black'
                    onSubmit={submitForm}
                >
                    <input
                        type="text"
                        placeholder='Title'
                        className='border border-gray-300 rounded px-3 py-2 outline-none'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className='flex gap-3'>
                        <input
                            type="text"
                            placeholder='Location'
                            className='border border-gray-300 rounded px-3 py-2 outline-none flex-1'
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}

                        />
                        <input
                            type="date"
                            className='border border-gray-300 rounded px-3 py-2 outline-none flex-1'
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}

                        />
                    </div>
                    <textarea
                        placeholder='Details'
                        className='border border-gray-300 rounded px-3 py-2 outline-none resize-none'
                        rows="4"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}

                    ></textarea>
                    <button
                        type='submit'
                        className='border-none bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-[16px] py-[10px] px-[30px] rounded-[5px]'>
                        Add
                    </button>
                </form>

            </div>
        </div>

    )
}

export default Hero