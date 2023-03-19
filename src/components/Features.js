import React from 'react'
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LayersIcon from '@mui/icons-material/Layers';
const Features = () => {
    return (
    <div className='flex w-[60%] flex-col text-start mt-20 text-black m-auto'>
        <div className='flex lg:justify-between lg:flex-row flex-col gap-10 pb-10'>
            <h1 className='text-[40px] lg:w-[45%] w-[95%]'>Special Features thats make you happy and cheer up!</h1>
            <button className='bg-black text-white px-8 h-[50px] rounded-xl'>SEE MORE</button>
                
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
                <div className='flex flex-col lg:w-[30%] w-[90%]  pl-[5%]'>      
                <LayersIcon style={{width:"100px", height: "100px"}}/>
                <h3 className='text-[22px] font-bold pt-8'>The Best Wood</h3>
                <h4 className='text-[20px] text-neutral-500'>We present the best choice of wood with premium quality and sturdy</h4>    
            </div>
        </div>   
    </div>    
  )
}

export default Features