import React from 'react'
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LayersIcon from '@mui/icons-material/Layers';
import { motion} from 'framer-motion';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from '../util/motion';
import { orangeLine } from '../assets';

const Features = () => {
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
    animate={control} id='features' className='flex lg:w-[60%] flex-col text-start mt-20 text-black m-auto w-[90%]'>
        <div className='flex lg:justify-between lg:flex-row flex-col gap-10 pb-10 '>
            <h1 className='lg:text-[40px] text-[25px] xl:w-[70%] border-l-4 border-orange-500 lg:pl-10 pl-4'>Special Features thats make you happy and cheer up!</h1>
            <button className='bg-black hover:scale-[105%] transform transition duration-300 text-white px-8 h-[50px] rounded-xl'>SEE MORE</button>
                
            </div>
        <div className='flex lg:flex-row flex-col m-auto text-start gap-10'>
            <div className='flex flex-col lg:w-[30%] w-[90%]'>      
                <DesignServicesSharpIcon style={{width:"100px", height: "100px"}}/>
                <h3 className='text-[22px] font-bold pt-8'>Stylish Design</h3>
                <h4 className='text-[20px] text-neutral-500'>A unique and different style from other teapots gives more luxurious</h4>    
                </div>
                <div className='flex flex-col lg:w-[33%] w-[90%] lg:pl-[5%] lg:border-x-2'>      
                <DonutSmallIcon style={{width:"100px", height: "100px"}}/>
                <h3 className='text-[22px] font-bold pt-8'>Premium Quality</h3>
                <h4 className='text-[20px] text-neutral-500'>Premium quality that makes coffee maker more elegant and durable use</h4>    
                </div>
                <div className='flex flex-col lg:w-[30%] w-[90%]  lg:pl-[5%]'>      
                <LayersIcon style={{width:"100px", height: "100px"}}/>
                <h3 className='text-[22px] font-bold pt-8'>The Best Wood</h3>
                <h4 className='text-[20px] text-neutral-500'>We present the best choice of wood with premium quality and sturdy</h4>    
            </div>
        </div>   
    </motion.div>    
  )
}

export default Features