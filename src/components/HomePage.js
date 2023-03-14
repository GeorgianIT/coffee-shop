import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div className='flex w-[100vw] h-[100vh]'>
          <div className='flex flex-col bg-gradient-to-r from-neutral-800 to bg-black w-[50vw] h-[100vh]'>
              <div className='flex flex-col w-[70%] h-[100%] m-auto text-start'>
                  <h1 className='text-white text-[30px] pt-10 pb-10'>
                      @ ColdnBrew.
                  </h1>
                  <h1 className='text-white text-[70px] w-[70%] pt-20 font-bold'>Chose Your Coffee Maker With CnB.</h1>
                  {/* <h1 className='text-orange-500 text-[80px] font-bold'>.</h1> */}
              <p className='pt-10 pb-10 text-neutral-500 border-b w-[85%]'> Buy the best premium coffee makers</p>
              <div className='flex pt-10'>
                      <div className='w-[40%]'>
                          <h1 className='text-orange-500 text-[50px] font-bold'>120K</h1>
                          <h2 className='text-white'>Testimonials</h2>
                          <h3 className='text-slate-500'>Testimonials from various customers who trust us</h3>
                      </div> 
                      <div className='w-[40%] pl-10'>
                          <h1 className='text-orange-500 text-[50px] font-bold'>340+</h1>
                          <h2 className='text-white'>Exclusive Product</h2>
                          <h3 className='text-slate-500'>Premium materials with various stylish models</h3>
                      </div> 
              </div>
              </div>
          </div>
          <div className='bg-chemex bg-no-repeat bg-cover w-[50vw] h-[100vh]'>
              <Navbar/>
          </div>
    </div>
  )
}

export default HomePage