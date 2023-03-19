import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { motion} from 'framer-motion';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from '../util/motion';
import { TitleText } from './CustomText';

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
              <div className='flex flex-col lg:w-[70%] w-[90%] h-[100%] m-auto text-start mt-10'>
                  <TitleText title='@ ColdnBrew.' textStyles={ 'text-white text-[30px] pt-10 lg:pb-10 pb-6'}/>
                  <TitleText title='Chose Your Coffee Maker With CnB.' textStyles={'text-white lg:text-[55px] text-[45px] w-[70%] lg:pt-10 pt-10 font-bold'}/>
                  {/* <h1 className='text-orange-500 text-[80px] font-bold'>.</h1> */}
                  <TitleText title='Buy the best premium coffee makers' textStyles={'lg:pt-10 lg:pb-10 pt-6 pb-6 text-neutral-500 border-b w-[85%] lg:text-[25px] text-[20px]'}/>
              <div className='flex pt-10 justify-between'>
                      <div className='w-[45%]'>
                        <TitleText title='120K' textStyles={'text-orange-500 lg:text-[50px] text-[30px] font-bold'}/>
                        <TitleText title='Testimonials' textStyles={'text-white'}/>
                          <TitleText title='Testimonials from various customers who trust us' textStyles={'text-slate-500'}/>
                      </div> 
                      <div className='w-[45%] pl-10'>
                          <TitleText title='340+' textStyles={'text-orange-500 lg:text-[50px] text-[30px] font-bold'}/>
                          <TitleText title='Exclusive Product' textStyles={'text-white'}/>
                          <TitleText title='Premium materials with various stylish models' textStyles={'text-slate-500'}/>
                      </div> 
              </div>
              </div>
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