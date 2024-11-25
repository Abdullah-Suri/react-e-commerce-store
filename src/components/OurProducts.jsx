import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProdImg1 from '@/assets/img/image-3.png'
import ProdImg3 from '@/assets/img/image-8.png'
import ProdImg2 from '@/assets/img/image-6.png'
import ProdImg4 from '@/assets/img/image-3.png'
import ProdImg5 from '@/assets/img/image-3.png'
import GlobalButton from '@/components/GlobalButton'
import { useDispatch } from 'react-redux';
import { addItem } from '../config/store/reducers/cartSlice'

function OurProducts({productsData}) {
    
    const dispatch = useDispatch();
    const addItemToCart = (product) => {
        dispatch(addItem(product))
    }
    

    
  return (
    <div className='container py-14'>
        <div className='pb-16 text-center'>
            <h2 className='text-3xl font-bold'>Our Products</h2>
        </div>
        <div className='flex items-center justify-center text-start flex-wrap gap-5'>
            {productsData && productsData?.map((product, index) => (
                <div key={index} className='w-[23%] relative group cursor-pointer'>
                    <div className='invisible group-hover:visible absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg'>
                        <button onClick={()=> addItemToCart(product)} className='transition-all duration-300 px-16 py-3 !bg-primary !border-primary !hover:bg-white rounded-md hover:!bg-secondary text-white !border hover:!border-primary hover:!text-primary'>Add to cart</button>
                    </div>
                    <div className='overflow-hidden rounded-t-xl'>
                        <img src={product?.thumbnail} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='bg-[#F4F5F7] py-3.5 px-2'>
                        <h4 className='text-lg font-semibold text-text-color'>{product?.title}</h4>
                        <p className='text-paragraph-color text-sm my-1.5'>{product?.desc}</p>
                        <div className='flex items-center'>
                            <span className='text-sm mr-1.5'>{product.price}</span>
                            <span className='text-paragraph-color line-through text-xs'>{(product.price + product.discountPercentage)?.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className='text-xl font-semibold mt-5'>{}</div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default OurProducts