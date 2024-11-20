import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-2xl container mx-auto md:px-2 px-4">
                <div className='max-w-screen-2xl md:mt-[13vh] mt-[9vh] justify-center flex mx-auto md:px-20 px-4'>
                    <form
                        // onSubmit={handleSubmit}
                        className="p-6 rounded w-full max-w-md"
                    >
                    <div className='text-center'>
                        <p className='md:text-4xl text-3xl font-semibold'>Personal information</p>
                    </div>

                        <div className="mb-4 mt-5">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value="Test"
                                // onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value="test@dev.com"
                                // onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                value="test test test test  "
                                // onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                                placeholder="Enter your address"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
