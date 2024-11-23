import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '@/assets/svg/logo.svg'
import CartIcon from '@/assets/svg/cart-icon.svg'
import WhishListIcon from '@/assets/svg/wishlist-icon.svg'
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from './Cart';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.cart-dropdown') && !event.target.closest('.cart-button')) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const closeCart = () => {
    setIsOpen(false);
  };

  return (
    <div className='container flex items-center justify-between py-7'>
      <div className='flex items-center'>
        <img src={Logo} alt="Furniro Logo" />
        <span className='text-[32px] font-bold'>Furniro</span>
      </div>

      <nav className='flex items-center'>
        <Link to="/" className='mr-[52px]'>Home</Link>
        <Link to="/shop" className='mr-[52px]'>Shop</Link>
        <Link to="/about-us" className='mr-[52px]'>About</Link>
        <Link to="/contact-us" className='mr-[52px]'>Contact</Link>
      </nav>

      <div className='flex items-center'>
        <img src={WhishListIcon} className='mr-[25px]' alt="Cart Icon" />
        <button onClick={toggleCart} className="cart-button">
        <img src={CartIcon} alt="Cart Icon" />
      </button>

        {/* Render the CartDropdown Component */}
        <Cart isOpen={isOpen}   onClose={closeCart}/>
        {isOpen && <div className="blur-background" onClick={closeCart}></div>}
      </div>
    </div>
  )
}

export default Header