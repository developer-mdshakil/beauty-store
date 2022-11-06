import React from 'react';
import './Banner.css';
import image from '../../../assets/images/banner/banner-slider.png';
import { FaLaptop, FaMemory, FaMobile, } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='banner container mx-auto text-white flex items-center justify-between'>
            <div className='text-start'>
            <h2 className='text-5xl font-bold mb-4'>Beauty-Store</h2>
            <p className='text-xl font-semibold'>Beauty-Store is ready to your bussiness</p>
            </div>
            <div className='flex items-center'>
            <div>
                <img src={image} className='w-80 h-auto' alt="" srcset="" />
                </div>
                <div className='ml-6'>
                    <h4 className='text-start'>
                        <FaMemory className='w-12 h-auto'/>
                        <span className='block text-2xl'>32 GB RAM</span>
                    </h4>
                    <h4 className='text-start my-4'>
                        <FaLaptop className='w-12 h-auto'/>
                        <span className='block text-2xl'>Retina AMOLED</span>
                    </h4>
                    <h4 className='text-start'>
                        <FaMobile />
                        <span className='block text-2xl'>Pentium 9 DT</span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;