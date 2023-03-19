import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { motion} from 'framer-motion';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from '../util/motion';

const HomePage = () => {
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
      <div className='flex w-[100vw] h-[100vh]'>
          <div className='flex flex-col bg-gradient-to-r from-neutral-800 lg:pl-0 lg:pl-20 pl-10 to bg-black lg:w-[50vw] w-[100vw] h-[100vh]'>
              <Sidebar/>
              <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control} className='flex flex-col lg:w-[70%] w-[90%] h-[100%] m-auto text-start mt-10'>
                  <h1 className='text-white text-[30px] pt-10 lg:pb-10 pb-6'>
                      @ ColdnBrew.
                  </h1>
                  <h1 className='text-white lg:text-[55px] text-[45px] w-[70%] lg:pt-10 pt-10 font-bold'>Chose Your Coffee Maker With CnB.</h1>
                  {/* <h1 className='text-orange-500 text-[80px] font-bold'>.</h1> */}
              <p className='lg:pt-10 lg:pb-10 pt-6 pb-6 text-neutral-500 border-b w-[85%] lg:text-[25px] text-[20px]'> Buy the best premium coffee makers</p>
              <div className='flex pt-10'>
                      <div className='w-[40%]'>
                          <h1 className='text-orange-500 lg:text-[50px] text-[30px] font-bold'>120K</h1>
                          <h2 className='text-white'>Testimonials</h2>
                          <h3 className='text-slate-500'>Testimonials from various customers who trust us</h3>
                      </div> 
                      <div className='w-[40%] pl-10'>
                          <h1 className='text-orange-500 lg:text-[50px] text-[30px] font-bold'>340+</h1>
                          <h2 className='text-white'>Exclusive Product</h2>
                          <h3 className='text-slate-500'>Premium materials with various stylish models</h3>
                      </div> 
              </div>
              </motion.div>
          </div>
          <div className='hidden lg:block bg-chemex bg-no-repeat bg-cover w-[50vw] h-[100vh]'>
              <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}>
              <Navbar />
              </motion.div>
          </div>
    </div>
  )
}

export default HomePage