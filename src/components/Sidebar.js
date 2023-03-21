import React from 'react'
import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'


const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
        
  {showSidebar ? (
    <button
      className="lg:hidden flex text-4xl text-white items-center cursor-pointer lg:right-8 lg:top-6 right-2 absolute top-2 z-50 text-[40px]"
      onClick={() => setShowSidebar(!showSidebar)}>
    <Hamburger color='white' direction='right'/>
    </button>
  ) : (
    <button
      onClick={() => setShowSidebar(!showSidebar)}
      className="lg:hidden absolute z-30 flex items-center cursor-pointer lg:right-8 lg:top-6  right-2 top-2"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <Hamburger color='white'/>
    </button>
  )}
    <div className={`text-end top-0 right-0 w-full bg-gradient-to-l from-neutral-900 to-transparent p-10 pl-20 text-white absolute h-full z-40 ${showSidebar ? "translate-x-0 " : "translate-x-full"} ease-in-out duration-300`}>
    <ul class="flex flex-col gap-4 p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
      <li className='text-[18px]'>
        <a href="#about" class="block px-2 pl-3 pr-4 text-white">About</a>
      </li>
      <li className=' text-[18px]'>
        <a href="#pricing" class="block px-2 pl-3 pr-4 text-white">Pricing</a>
      </li>
      <li className=' text-[18px]'>
        <a href="#features" class="block px-2 pl-3 pr-4 text-white">Features</a>
      </li>
      <li className=' border-gray-100 text-[18px]'>
        <a href="#contact" class="block px-2 pl-3 pr-4 text-white">Contact</a>
      </li>
    </ul>
  </div>
</>
  )
}

export default Sidebar