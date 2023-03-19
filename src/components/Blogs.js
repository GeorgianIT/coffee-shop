import React from 'react'
import { coffeeBlog, benefits } from '../assets';


const Blogs = () => {
  return (
    <div className='flex lg:w-[60%] w-[90%] flex-col text-start mt-20 mb-20 text-black m-auto'>
        <div className='flex justify-between pb-10 flex-col'>
              <h1 className='text-[40px] lg:w-[45%] w-[90%]'>Our Blogs Coffe with trending topic for this week</h1>
              <div className='flex lg:flex-row flex-col gap-20 mt-20 '>
                    <div className='bg-neutral-200 p-10 rounded-xl'>
                      <img src={coffeeBlog} className='w-[580px] h-[290px] object-cover rounded-xl '/>
                      <h1 className='font-bold text-[35px] mt-10'>10 Recommendation Coffee 2021</h1>
                      <h3 className='text-neutral-500 text-[25px] mt-6'>We're thrilled about our light roast. It was our first coffee we ever roasted ...</h3>
                    </div>
                    <div className='bg-neutral-200 p-10 rounded-xl'>
                      <img src={benefits} className='w-[580px] h-[290px] object-cover rounded-xl '/>
                      <h1 className='font-bold text-[35px] mt-10'>12 Health Benefits of Coffee</h1>
                      <h3 className='text-neutral-500 text-[25px] mt-6'>Coffee has been both praised and mocked for centuries.It has been blamed ...</h3>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default Blogs