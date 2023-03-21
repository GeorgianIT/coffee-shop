import React from 'react'
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LayersIcon from '@mui/icons-material/Layers';
import { grinder, feilma, electric, add , arrow} from '../assets';
import { motion} from 'framer-motion';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from '../util/motion';

const Collection = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
    return (
    <motion.div
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control} id='pricing' className='flex lg:w-[60%] w-[90%] flex-col text-start mt-20 text-black m-auto'>
        <div className='flex justify-between pb-10'>
            <h1 className='lg:text-[40px] text-[25px] lg:w-[45%] w-[90%] border-l-4 border-orange-500 pl-10'>Let's see our collection product!</h1>
                
            </div>
        <div className='flex w-[100%] flex-row text-start mb-20'>
            <div className='flex flex-col w-[25%] border-r-2 justify-between'>      
                <h3 className='lg:text-[30px] text-[20px] font-bold pt-8'>New Edition</h3>
                <h4 className='lg:text-[20px] text-[15px] text-neutral-500'>3 product</h4>    
                </div>
                <div className='flex flex-col w-[25%] text-center border-r-2 justify-between'>      
                <h3 className='lg:text-[30px] text-[20px] font-bold pt-8'>Popular</h3>
                <h4 className='lg:text-[20px] text-[15px] text-neutral-500'>10 product</h4>    
                </div>
                <div className='flex flex-col w-[25%] text-center border-r-2 justify-between'>  
                <h3 className='lg:text-[30px] text-[20px] font-bold pt-8'>Grinder Retro</h3>
                <h4 className='lg:text-[20px] text-[15px] text-neutral-500'>12 product</h4>    
                </div>
                <div className='flex flex-col w-[25%] text-center justify-between'>  
                <h3 className='lg:text-[30px] text-[20px] font-bold pt-8'>Best Seller</h3>
                <h4 className='lg:text-[20px] text-[15px] text-neutral-500'>8 product</h4>    
            </div>
            </div>  
            <div className='w-[100%] flex xl:flex-row flex-col xl:gap-3 gap-6 m-auto'>
                <div className='p-8 hover:scale-[110%] transform transition duration-300 rounded-xl xl:w-[30%] lg:w-[60%] w-[90%] m-auto flex flex-col bg-white'>
                    <img src={grinder} className='object-contain w-full h-[400px]' />
                    <div className='pl-6'>
                        <h1 className='font-bold text-[35px] pt-10'>$ 139.50</h1>
                        <h2 className='font-bold text-[25px]'>Manual Grinder New</h2>
                        <h3 className='text-neutral-600 text-[18px]'>Full Spectrum CBD Oil</h3>
                        <button className='z-99 absolute right-10 scale-[0.8] hover:scale-[1.1] transform transition duration-300 bottom-28'><img src={add}/></button>
                    </div>
                </div>
                <div className='p-8 hover:scale-[110%] transform transition duration-300 rounded-xl xl:w-[30%] lg:w-[60%] w-[90%] m-auto flex flex-col bg-white'>
                    <img src={feilma} className='object-contain w-full h-[400px]' />
                    <div className='pl-6'>
                        <h1 className='font-bold text-[35px] pt-10'>$ 124.90</h1>
                        <h2 className='font-bold text-[25px]'>Electric Burr Coffee </h2>
                        <h3 className='text-neutral-600 text-[18px]'>Adjustable Burr Mill</h3>
                        <button className='z-99 absolute right-10 scale-[0.8] hover:scale-[1.1] transform transition duration-300 bottom-28'><img src={add}/></button>
                    </div>
                </div>
                <div className='p-8 hover:scale-[110%] transform transition duration-300 rounded-xl xl:w-[30%] lg:w-[60%] w-[90%] m-auto flex flex-col bg-white'>
                    <img src={electric} className='object-cover w-full h-[400px]' />
                    <div className='pl-6'>
                        <h1 className='font-bold text-[35px] pt-10'>$ 108.59</h1>
                        <h2 className='font-bold text-[25px]'>Feima Coffee Grinder</h2>
                        <h3 className='text-neutral-600 text-[18px]'>Adjustable Boe June</h3>
                        <button className='z-99 absolute right-10 scale-[0.8] hover:scale-[1.1] transform transition duration-300 bottom-28'><img src={add}/></button>
                    </div>
                </div>
            </div>    
    </motion.div>    
  )
}

export default Collection