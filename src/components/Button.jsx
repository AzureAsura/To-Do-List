// components/Button.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    onClick, 
    disabled = false, 
    icon, 
    type = 'button',
    className = '',
    // Link props
    to,         // kalau ada 'to', jadi Link. Kalau ga ada, jadi Button
    ...props 
}) => {
    // Base styles
    const baseStyles = "relative font-semibold transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group/btn"
    
    // Variant styles
    const variants = {
        primary: "bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white",
        edit: "bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white",
        delete: "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        success: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
    }
    
    // Size styles
    const sizes = {
        sm: "py-2 px-3 text-xs rounded-lg",
        md: "py-3 px-4 text-sm rounded-xl", 
        lg: "py-4 px-6 text-base rounded-xl"
    }
    
    // Hover overlay styles
    const overlayStyles = {
        primary: "from-indigo-700 to-blue-700",
        edit: "from-yellow-600 to-orange-600",
        delete: "from-red-700 to-pink-700",
        secondary: "from-gray-700 to-gray-700",
        success: "from-green-700 to-emerald-700"
    }

    // Kombinasi classes
    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
    
    // Content yang sama untuk Button dan Link
    const content = (
        <>
            {/* Hover overlay effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${overlayStyles[variant]} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
            
            {/* Button/Link content */}
            <div className="relative flex items-center justify-center gap-2">
                {icon && (
                    <i className={`${icon} group-hover/btn:scale-110 transition-transform duration-200`}></i>
                )}
                <span>{children}</span>
            </div>
        </>
    )

    // Kalau ada 'to' prop, render sebagai Link
    if (to) {
        return (
            <Link
                to={to}
                className={`${combinedClasses} text-center inline-flex items-center justify-center`}
                {...props}
            >
                {content}
            </Link>
        )
    }

    // Kalau ga ada 'to' prop, render sebagai Button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedClasses}
            {...props}
        >
            {content}
        </button>
    )
}

export default Button