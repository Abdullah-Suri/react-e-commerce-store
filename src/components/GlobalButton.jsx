import React from 'react'
import { Link } from 'react-router-dom'

const GlobalButton = ({ onClick, label, link = '/', customeStyle = {}, customClasses = ''}) => {
    const baseStyle = {
        backgroundColor: 'var(--primary)',
        padding: '15px 72px',
        color: '#fff',
        fontWeight: 'semibold',
        display: 'inline-block',
    }

    const styleVariants = {
        ...baseStyle,
        ...customeStyle
    };

    return (
        <div className='h-fit'>
            <Link to={link} style={styleVariants} className={`transition-all duration-300 ${customClasses} hover:!bg-transparent !border hover:!border-primary hover:!text-primary`}> {label}</Link>
        </div>
  )
}

export default GlobalButton