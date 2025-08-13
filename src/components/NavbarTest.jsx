import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Link } from 'react-router-dom';



const NavbarTest = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'All Listings', href: '/all-listings' },
    ]

    return (
        <nav className=' shadow-lg  top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center md:h-25 h-20'>
                    <div className="flex-shrink-0 flex items-center">
                        <span className="ml-2 text-xl font-bold text-white">AzureAsura();</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-white hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                                >
                                    {item.name}
                                </Link >
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition-transform duration-300 hover:-translate-y-1"
                        >
                            <Github size={24} />
                        </a>

                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white hover: focus:outline-none transition-colors duration-200"
                            >
                                {showMenu ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                    </div>
                </div>
                        {showMenu && (
                            <div className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-b-lg">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="text-white hover:text-indigo-400 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-700 rounded-md"
                                            onClick={() => setShowMenu(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
            </div>
        </nav>
    )
}

export default NavbarTest