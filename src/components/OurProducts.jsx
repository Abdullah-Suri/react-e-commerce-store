import React from 'react'
import { Link } from 'react-router-dom'
import ProdImg1 from '@/assets/img/image-3.png'
import ProdImg3 from '@/assets/img/image-8.png'
import ProdImg2 from '@/assets/img/image-6.png'
import ProdImg4 from '@/assets/img/image-3.png'
import ProdImg5 from '@/assets/img/image-3.png'
// import ProdImg4 from '@/assets/img/images-1.png'
// import ProdImg5 from '@/assets/img/Images.png'
import GlobalButton from '@/components/GlobalButton'

function OurProducts() {
    const products = [
        { src: ProdImg1, title: `Syltherine`, desc: 'Stylish cafe chair', salePrice: 'Rp 2.500.000', defaultPrice: 'Rp 3.500.000', link: '/men-clothing'},
        { src: ProdImg2, title: `Leviosa`, desc: 'Stylish cafe chair', salePrice: 'Rp 2.500.000', defaultPrice: '', link: '/women-clothing'},
        { src: ProdImg3, title: `Lolito`, desc: 'Luxury big sofa', salePrice: 'Rp 7.000.000', defaultPrice: 'Rp 14.000.000', link: '/jewelery'},
        { src: ProdImg4, title: `Respira`, desc: 'Outdoor bar table and stool', salePrice: 'Rp 500.000', defaultPrice: '', link: '/jewelery'},
        { src: ProdImg5, title: `Grifo`, desc: 'Night lamp', salePrice: 'Rp 500.000', defaultPrice: '', link: '/jewelery'},
        { src: ProdImg1, title: `Muggo`, desc: 'Small mug', salePrice: 'Rp 1.500.000', defaultPrice: '', link: '/jewelery'},
        { src: ProdImg2, title: `Pingky`, desc: 'Cute bed set', salePrice: 'Rp 150.000', defaultPrice: 'Rp 14.000.000', link: '/jewelery'},
        { src: ProdImg3, title: `Potty`, desc: 'Minimalist flower pot', salePrice: 'Rp 7.000.000', defaultPrice: '', link: '/jewelery'},
    ]
  return (
    <div className='container py-14'>
        <div className='pb-16 text-center'>
            <h2 className='text-3xl font-bold'>Our Products</h2>
        </div>
        <div className='flex items-center justify-center text-start flex-wrap gap-5'>
            {products.map((product, index) => (
                <div key={index} className='w-[23%] relative group cursor-pointer'>
                    <div className='invisible group-hover:visible absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg'>
                        <GlobalButton label={'Add to Cart'} link={'/shop'}  customClasses={'!bg-primary !border-primary !hover:bg-white rounded-md'}/>
                    </div>
                    <div className='overflow-hidden rounded-t-xl'>
                        <img src={product.src} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='bg-[#F4F5F7] py-3.5 px-2'>
                        <h4 className='text-lg font-semibold text-text-color'>{product.title}</h4>
                        <p className='text-paragraph-color text-sm my-1.5'>{product.desc}</p>
                        <div className='flex items-center'>
                            <span className='text-sm mr-1.5'>{product.salePrice}</span>
                            <span className='text-paragraph-color line-through text-xs'>{product.defaultPrice}</span>
                        </div>
                    </div>
                    <div className='text-xl font-semibold mt-5'>{}</div>
                    {/* <Link to={'/'} className='absolute inset-0 z-1'></Link> */}
                </div>
            ))}
        </div>
    </div>
    )
}

export default OurProducts