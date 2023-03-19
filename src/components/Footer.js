import React from 'react'
import { instagram, plane, twitter, linkedin } from '../assets/index';

const Footer = () => {
  return (
    <footer className='bg-black text-white flex flex-col'>
          <h1 className=' w-[70%] m-auto text-[40px] text-start mt-20'>ColdnBrew.</h1>
          <div className='flex w-[80%] m-auto gap-28 mb-20'>
              <div className='mt-10 w-[30%] flex flex-col'>
                  <h2 className='text-[20px] text-neutral-500'>Subscribe to our news letter</h2>
                  <div className='flex justify-between w-[50%] m-auto'>
                        <input type='text' placeholder='Your email address' className='h-[50px]'></input>
                        <button className='bg-orange-500 w-[50px] h-[50px]'>Go</button>
                  </div>
                  
              </div>
              <div className='w-[20%]'>
                  <h1 className='font-bold text-[30px]'>Address</h1>
                  <h2 className='text-[20px] text-neutral-500'>1090 Richmond Avenue, Houston, Texas 7704, USA</h2>
              </div>
              <div>
                  <h1 className='font-bold text-[30px]'>Contact</h1>
                  <h2 className='text-[20px] text-neutral-500'>+1 624 4251 5125</h2>
                  <h2 className='text-[20px] text-neutral-500'>coldbrew@mail.com</h2>
              </div>
              <div>
                  <h1 className='font-bold text-[30px]'>Office</h1>
                  <h2 className='text-[20px] text-neutral-500'>Monday - Saturday</h2>
                  <h2 className='text-[20px] text-neutral-500'>9AM - 10PM</h2>
              </div>
          </div>
          <div className='flex border-t-2 border-neutral-500 w-[80%] m-auto justify-between mb-8 pt-8'>
              <div className='flex gap-4'>
                  <img src={instagram} />
                  <img src={plane} />
                  <img src={twitter} />
                  <img src={linkedin} />
              </div>
                <h1 className='text-[20px]'>Design made by <a href='https://dribbble.com/shots/17172572-ColdnBrew-Landing-Page' className='text-orange-500'>Azi Melasari</a>, I just code it</h1>
                <h1 className='text-[20px]'>©2021 Copyright. coldnbrew.co</h1>
              
          </div>
    </footer>
  )
}

export default Footer