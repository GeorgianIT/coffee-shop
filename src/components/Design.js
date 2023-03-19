import React from 'react'
import { chemex} from '../assets';
import { motion} from 'framer-motion';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from '../util/motion';

const Design = () => {
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
    animate={control} className='flex lg:w-[60%] w-[80%] flex-col text-start mt-20 text-black m-auto'>
        <div className='flex justify-between pb-10 flex-col'>
              <h1 className='text-[40px] lg:w-[45%] w-[90%]'>We provide the stylish design and best quality just for you!</h1>
              <div className='flex lg:flex-row flex-col lg:gap-40 gap-10 mt-20'>
                    <div>
                      <img src={chemex} className='lg:w-[650px] lg:h-[650px] object-cover rounded-xl '/>
                    </div>
                    <div className='lg:w-[500px] flex flex-col'>
                      <h1 className='font-bold text-[40px] lg:mt-10'>Teapot Coffee</h1>
                      <h3 className='text-neutral-500 text-[20px] mt-6'>Full Spectrum CBD Oil</h3>
                      <div className='flex gap-20'>
                            <div className='flex-col mt-14'>
                                <h1 className='font-bold text-[40px]'>$120.99</h1>
                                <h3 className='text-neutral-500 text-[20px] lg:mt-6'>Special Price</h3>
                             </div>
                            <div className='flex-col mt-14'>
                                <h1 className='font-bold text-[40px]'>$120.99</h1>
                                <h3 className='text-neutral-500 text-[20px] lg:mt-6'>Special Price</h3>
                            </div>
                      </div>
                      <h3 className='text-neutral-500 text-[20px] mt-6'>We're thrilled about our light roast. It was our first coffee we ever roasted, so it has a special place in our hearts this single origin is inspired.</h3>
                    <div className='flex gap-10 mt-10 justify-center'>
                          <button className='text-[20px] bg-black text-white px-8 h-[60px] w-[200px] rounded-xl'>Buy Now</button>  
                          <button className='font-bold text-[20px] px-8 h-[60px] w-[200px] rounded-xl'>See More</button> 
                    </div>
                  </div>
              </div>
        </div>
    </motion.div>
  )
}

export default Design