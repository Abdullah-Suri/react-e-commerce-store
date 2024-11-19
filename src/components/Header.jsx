import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '@/assets/svg/logo.svg'
import CartIcon from '@/assets/svg/cart-icon.svg'
import WhishListIcon from '@/assets/svg/wishlist-icon.svg'

const Header = () => {
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
        <img src={CartIcon} alt="Cart Icon" />
      </div>
    </div>
  )
}

export default Header