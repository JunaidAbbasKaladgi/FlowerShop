import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* <div className='max-w-screen-2xl bg-base-200 md:mt-7 flex flex-col md:items-center md:flex-row w-[25rem] md:flex justify-center md:justify-center text-center px-5 py-4 md:p-0 h-[450px] md:w-[74rem] container md:gap-40 mx-auto md:h-[16rem]'>
          <div className=' md:w-[30vh] md:h-[25vh]  flex flex-col  justify-center text-left'>
                        <p className='font-semibold font-serif'>CUSTOMER SERVICE</p><br />
                        <span className='flex flex-col gap-1 text-[14px]'>
                        <Link to="/Products">ONLINE STORE</Link>
                        <Link to="/Contact">CONTACT US</Link>
                        <Link to="/About">ABOUT</Link>
                        </span>
          </div>
          <div className='md:w-[30vh] md:h-[25vh]  flex flex-col  justify-center text-left'>
                    <p className='font-semibold font-serif'>COMPANY</p><br />
                    <span className='flex flex-col gap-2 text-[14px]'>
                    <Link to="/About">ABOUT</Link>
                    <Link to="/Contact">CONTACT US</Link>
                    <Link to="/Products">PRODUCTS</Link>
                    </span>
          </div>
          <div className='md:w-[30vh] md:h-[25vh]  flex flex-col justify-center text-left'>
                    <p className='font-semibold font-serif'>SOCIAL MEDIA</p><br />
                    <span className='flex flex-col gap-2 text-[14px]'>
                    <Link to="">TWITTER</Link>
                    <Link to="">INSTAGRAM</Link>
                    <Link to="">FACEBOOK</Link>
                    </span>
          </div>
      </div>
      <div className='max-w-screen-2xl bg-base-300 font-serif flex items-center w-[25rem] md:flex justify-center h-[5vh] text-center md:w-[74rem] container md:gap-4 mx-auto md:h-[3rem]'>
        <p className=''>Petal Paradise</p>|
        <p className=''> Copyright &copy; 2024</p>
        </div> */}
            <footer className="footer bg-neutral text-neutral-content p-8 md:justify-center md:gap-[22em]">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
        </>
    )
}

export default Footer