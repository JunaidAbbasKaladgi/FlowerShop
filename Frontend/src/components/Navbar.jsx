import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { faCartShopping, } from '@fontawesome/free-solid-svg-icons'
import { useCart } from "react-use-cart";
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = ({ handleCategoryClick }) => {
    const [authUser, setAuthUser] = useAuth()
    const {
        totalUniqueItems,
    } = useCart();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successful")
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } catch (error) {
            toast.error("Error: " + "Something went wrong Try again")
        }
    }
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },)
    const navItems = (<>
        <li className=''><Link to="/" style={{ backgroundColor: 'transparent', outline: 'none' }} onMouseDown={(e) => e.target.style.backgroundColor = 'transparent'}>Home</Link></li>
        <li className=''><Link onClick={handleCategoryClick} to="/Categories" style={{ backgroundColor: 'transparent', outline: 'none' }} onMouseDown={(e) => e.target.style.backgroundColor = 'transparent'} >Categories</Link></li>
        <li className=''><Link to="/About" style={{ backgroundColor: 'transparent', outline: 'none' }} onMouseDown={(e) => e.target.style.backgroundColor = 'transparent'}>About</Link></li>
        <li className=''><Link to="/Contact" style={{ backgroundColor: 'transparent', outline: 'none' }} onMouseDown={(e) => e.target.style.backgroundColor = 'transparent'}>Contact</Link></li>
    </>)
    return (
        <>
            <div className={`max-w-screen-2xl fixed container mx-auto md:px-20 top-0 left-0 right-0 px-4 ${sticky
                ? "sticky-navbar shadow-md bg-base-100 duration-300 transition-all ease-in-out"
                : ""
                }`}>
                <div className="navbar" >
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navItems}
                            </ul>
                        </div>
                        <a className="text-3xl font-bold text-red-800 cursor-pointer">Petal Paradise</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu text-xl gap-2 hover:bg-transparent menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>

                    <div className="navbar-end md:gap-5 gap-2">
                        {
                            authUser ? (
                                <div className="indicator">
                                    <span className="indicator-item badge bg-black text-white">{totalUniqueItems}</span>
                                    <Link className=' cursor-pointer' to="/Cart"><FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#9d0c0c", }} /></Link>
                                </div>
                            ) : (
                                <div className="indicator">
                                    <span className="indicator-item badge bg-black text-white">0</span>
                                    <Link className=' cursor-pointer' to="/Signup"><FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#9d0c0c", }} /></Link>
                                </div>
                            )
                        }
                        {
                            authUser ? (
                                <div className="dropdown dropdown-end">
                                    <button tabIndex={0} role="button" className="btn bg-transparent shadow-none hover:bg-transparent border-none">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        Account
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li><Link to="/Profile">My Account</Link></li>
                                        <li><Link to="/Order">My Orders</Link></li>
                                        <li><button onClick={handleLogout} className='text-white justify-center font-medium bg-red-800 hover:bg-red-900 duration-300' >Logout</button></li>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/Login" className="px-2 py-2 rounded-md cursor-pointer md:text-xl text-white bg-red-800 hover:bg-red-900 duration-300">Login</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar