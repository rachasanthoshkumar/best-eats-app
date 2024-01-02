import React from 'react'

const Hero = () => {
  return (
    <div className='container w-screen mx-auto p-2'>
        <div className='relative max-h-[500px] w-full'>
        <div className='absolute ml-1 text-white text-6xl w-full h-full font-bold sm:text-6xl lg:text-7xl flex flex-col justify-center'>
            <h2>The <span className='text-orange-400 '>Best</span></h2>
            <h2 className='text-orange-400 sm:text-white'>Foods <span className='text-white sm:text-orange-400'>Delivered</span></h2>
        </div>
        <img className=' w-full h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
        </div>
        
    </div>
  )
}

export default Hero