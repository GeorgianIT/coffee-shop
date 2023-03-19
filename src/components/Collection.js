import React from 'react'
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LayersIcon from '@mui/icons-material/Layers';
import { grinder, feilma, electric } from '../assets';

const Collection = () => {
    return (
    <div id='pricing' className='flex lg:w-[60%] w-[90%] flex-col text-start mt-20 text-black m-auto'>
        <div className='flex justify-between pb-10'>
            <h1 className='text-[40px] lg:w-[45%] w-[90%]'>Let's see our collection product!</h1>
                
            </div>
        <div className='flex w-[100%] flex-row text-start mb-20'>
            <div className='flex flex-col w-[25%] border-r-2'>      
                <h3 className='lg:text-[30px] text-[20px] font-bold pt-8'>New Edition</h3>
                <h4 className='lg:text-[20px] text-[15px] text-neutral-500'>3 product</h4>    
                </div>
                <div className='flex flex-col w-[25%] text-center border-r-2'>      
                <h3 className='lg:text-[30px] text-[20px] font-bold pt-8'>Popular</h3>
                <h4 className='lg:text-[20px] text-[15px] text-neutral-500'>10 product</h4>    
                </div>
                <div className='flex flex-col w-[25%] text-center border-r-2'>  
                <h3 className='lg:text-[30px] text-[20px] font-bold pt-8'>Grinder Retro</h3>
                <h4 className='lg:text-[20px] text-[15px] text-neutral-500'>12 product</h4>    
                </div>
                <div className='flex flex-col w-[25%] text-center'>  
                <h3 className='lg:text-[30px] text-[20px] font-bold pt-8'>Best Seller</h3>
                <h4 className='lg:text-[20px] text-[15px] text-neutral-500'>8 product</h4>    
            </div>
            </div>  
            <div className='w-[100%] flex lg:flex-row flex-col lg:gap-3 gap-6 m-auto'>
                <div className=' rounded-xl lg:w-[30%] w-[90%] m-auto flex flex-col bg-white'>
                    <img src={grinder} className='object-contain w-full h-[400px]' />
                    <div className='pl-6'>
                        <h1 className='font-bold text-[35px] pt-10'>$ 139.50</h1>
                        <h2 className='font-bold text-[25px]'>Manual Grinder New</h2>
                        <h3 className='text-neutral-600 text-[18px]'>Full Spectrum CBD Oil</h3>
                    </div>
                </div>
                <div className='rounded-xl lg:w-[30%] w-[90%] m-auto flex flex-col bg-white'>
                    <img src={feilma} className='object-contain w-full h-[400px]' />
                    <div className='pl-6'>
                        <h1 className='font-bold text-[35px] pt-10'>$ 139.50</h1>
                        <h2 className='font-bold text-[25px]'>Manual Grinder New</h2>
                        <h3 className='text-neutral-600 text-[18px]'>Full Spectrum CBD Oil</h3>
                    </div>
                </div>
                <div className='rounded-xl lg:w-[30%] w-[90%] m-auto flex flex-col bg-white'>
                    <img src={electric} className='object-cover w-full h-[400px]' />
                    <div className='pl-6'>
                        <h1 className='font-bold text-[35px] pt-10'>$ 139.50</h1>
                        <h2 className='font-bold text-[25px]'>Manual Grinder New</h2>
                        <h3 className='text-neutral-600 text-[18px]'>Full Spectrum CBD Oil</h3>
                    </div>
                </div>
            </div>    
    </div>    
  )
}

export default Collection