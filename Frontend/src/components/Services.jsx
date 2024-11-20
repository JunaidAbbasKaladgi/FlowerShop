import React from 'react'
import Product from './Category'

const Services = () => {
  return (
    <>
    <div className='max-w-screen-2xl  text-center w-[25rem] py-3 h-[530px] bg-amber-40 md:w-[74rem]  container mx-auto md:px-20 md:py-8 px-4 md:h-[18rem]'>
        <div className='relative md:h-[80vh] w-full'>
          <p className='font-bold text-2xl'>OUR SERVICES</p><br />
                    <div className='grid md:grid-cols-3 gap-5'>
                    <div className=" p-3 text-center w-full border-4 border-amber-400 rounded-lg shadow-xl ">
                    <div className='flex flex-col gap-2 items-center'>
                        <h2 className=" md:text-[20px] font-semibold">Fast and Reliable Delivery:</h2>
                        <p className=' font-semibold'>Get your orders quickly and in perfect condition with our expedited shipping.</p>
                    </div>
                </div>
                <div className=" p-3 text-center w-full border-4 border-amber-400 rounded-lg shadow-xl ">
                    <div className='flex flex-col gap-2 items-center'>
                        <h2 className=" md:text-[20px] font-semibold">Freshness Guarantee:</h2>
                        <p className=' font-semibold'>Enjoy the freshest dry fruits, backed by our satisfaction guarantee.</p>
                    </div>
                </div>
                <div className=" p-3 text-center w-full  border-4 border-amber-400 rounded-lg shadow-xl ">
                    <div className='flex flex-col gap-2 items-center'>
                        <h2 className=" md:text-[20px] font-semibold">Secure Online Shopping:</h2>
                        <p className=' font-semibold'>Shop safely with our secure payment gateway, protecting your information.</p>
                    </div>
                </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Services