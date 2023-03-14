import React from 'react'

const Navbar = () => {
  return (
    
<nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 m-auto" id="mobile-menu-language-select">
    <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
      <li className='px-5 border-r-[1px] border-gray-100 text-[18px]'>
        <a href="#" class="block px-2 pl-3 pr-4 text-white">About</a>
      </li>
      <li className='pr-5 border-r-[1px] border-gray-100 text-[18px]'>
        <a href="#" class="block px-2 pl-3 pr-4 text-white">Pricing</a>
      </li>
      <li className='pr-5 border-r-[1px] border-gray-100 text-[18px]'>
        <a href="#" class="block px-2 pl-3 pr-4 text-white">Features</a>
      </li>
      <li className='pr-5 border-gray-100 text-[18px]'>
        <a href="#" class="block px-2 pl-3 pr-4 text-white">Contact</a>
      </li>
    </ul>
    </div>
</div>
</nav>

  )
}

export default Navbar