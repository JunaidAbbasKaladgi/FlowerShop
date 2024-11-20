import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Navbar/>
        <div className='max-w-screen-2xl mt-[2vh] w-[25rem] md:flex md:mt-[10vh] md:flex-col justify-center py-3 text-center h-[530px] bg-amber-4 md:w-[74rem] container mx-auto md:px-20 md:py-8 px-4 md:h-[34rem]'>
          <p className='font-bold text-2xl'>GET IN TOUCH</p><br />
          <div className='md:flex md:w-full text-red-900 bg-pink-100 md:flex-row flex flex-col md:gap-0 gap-3 shadow-[0px_0px_5px]'>
          <div className='grid grid-cols md:px-[10vh] md:py-5 md:w-1/2  text-red-900 bg-pink-100 md:flex md:text-left md:flex-col md:justify-center md:items-center gap- md:gap-0'>
          <div className=" p-3 w-full   rounded-none">
                    <div className='flex flex-col gap-1'>
                        <h2 className=" md:text-[20px] font-semibold">ADDRESS</h2>
                        <p className='font-medium'>First Office</p>
                        <p>Old Bus Stand Vijayapura,Karnataka,India</p>       
                    </div>
                    <div className='flex flex-col md:mt-1 gap-1'>
                        <p className='font-medium'>Second Office</p>
                        <p>LBS Market  Vijayapura,Karnataka,India</p>       
                    </div>
                </div>
                <div className=" p-3 text-center md:text-left w-full   rounded-none  ">
                    <div className='flex flex-col gap-2 '>
                        <h2 className=" md:text-[20px] font-semibold">PHONE</h2>
                        <p className=''>Client Relation :+9196458621 <br />Store :+91874563219</p>
                    </div>
                </div>
                <div className=" p-3  text-center w-full md:text-left   rounded-none  ">
                    <div className='flex flex-col gap-2 '>
                        <h2 className=" md:text-[20px] font-semibold">EMAIL</h2>
                        <p className=' '>petalparadise@mail.com <br />ppstore@mail.com</p>
                    </div>
                </div>
          </div>
          <div className=' md:w-1/2  items-center md:p-0 py-5 flex md:shadow-none  justify-center'>
                <form className='flex flex-col gap-3' action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="9a2f4655-ca2b-4ac2-9ff6-c0917830858f"/>
                    <label>Name</label>
                    <input className='md:w-[40vh] md:h-[4vh] w-[30vh]' name='name' type="text" />
                    <label htmlFor="">Email</label>
                    <input type="email" name='email'/>
                    <label htmlFor="">Messege</label>
                    <textarea name="messege" rows="5" id="" ></textarea>
                    <button type="submit"  className="px-1 py-1 rounded-md cursor-pointer text-center md:text-[15px] text-white bg-red-800 hover:bg-red-900 duration-300">Submit</button>
                </form>
          </div>
          </div>
          </div>
          <div className='md:mt-0 mt-[34vh]'>
          <Footer/>
          </div>
    </>
  )
}

export default Contact