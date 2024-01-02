import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='container mx-auto px-2 py-12 grid md:grid-cols-3 gap-6'>
        {/*Overlay*/}
        <div className='relative rounded-xl '>
            <div className='absolute  bg-black/50 w-full h-full text-white p-4 flex flex-col items-start gap-2'>
                <p className='text-white font-bold text-2xl pt-2' >Sun's Out,BOGO"s Out</p>
                <p className='font-normal text-md'>Through 8/26</p>
                <button className='mt-3 sm:mt-5 cursor-pointer bg-white text-gray-700 font-semibold border rounded-full px-2 py-1 '>Order Now</button>
            </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='relative rounded-xl'>
            <div className='absolute  bg-black/50 w-full h-full text-white p-4 flex flex-col items-start gap-2'>
                <p className='text-white font-bold text-2xl pt-2' >New Restaurants</p>
                <p className='font-normal text-md'>Added Daily</p>
                <button className='mt-3 sm:mt-5 cursor-pointer bg-white text-gray-700 font-semibold border rounded-full px-2 py-1 '>Order Now</button>
            </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='relative rounded-xl'>
            <div className='absolute  bg-black/50 w-full h-full text-white p-4 flex flex-col items-start gap-2'>
                <p className='text-white font-bold text-2xl pt-2' >We Deliver Desserts</p>
                <p className='font-normal text-md'>Tasty Treats</p>
                <button className='mt-3 sm:mt-5 cursor-pointer bg-white text-gray-700 font-semibold border rounded-full px-2 py-1 '>Order Now</button>
            </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards