import React from 'react'
import { chemex} from '../assets';

const Design = () => {
  return (
    <div className='flex w-[60%] flex-col text-start mt-20 text-black m-auto'>
        <div className='flex justify-between pb-10 flex-col'>
              <h1 className='text-[40px] w-[45%]'>Our Blogs Coffe with trending topic for this week</h1>
              <div className='flex gap-40 mt-20'>
                    <div>
                      <img src={chemex} className='w-[650px] h-[650px] object-cover rounded-xl '/>
                    </div>
                    <div className='w-[500px] flex flex-col'>
                      <h1 className='font-bold text-[40px] mt-10'>Teapot Coffee</h1>
                      <h3 className='text-neutral-500 text-[20px] mt-6'>Full Spectrum CBD Oil</h3>
                      <div className='flex gap-20'>
                            <div className='flex-col mt-14'>
                                <h1 className='font-bold text-[40px]'>$120.99</h1>
                                <h3 className='text-neutral-500 text-[20px] mt-6'>Special Price</h3>
                             </div>
                            <div className='flex-col mt-14'>
                                <h1 className='font-bold text-[40px]'>$120.99</h1>
                                <h3 className='text-neutral-500 text-[20px] mt-6'>Special Price</h3>
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
    </div>
  )
}

export default Design