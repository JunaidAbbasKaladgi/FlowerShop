import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
    return (
        <>
        <Navbar/>
        <div className='max-w-screen-2xl mt-[22vh] gap-4 md:mt-[20vh] w-[25rem] md:flex md:flex-row flex flex-col justify-center text-center h-[530px] md:w-[74rem] container md:gap-4 mx-auto md:h-[26rem]'>
                <div className=' md:w-1/2 md:h-full md:block'>
                    <img className='md:w-full md:h-full' src="https://c1.wallpaperflare.com/preview/372/583/609/sunflower-fields-karnataka-india-flowers.jpg" alt="" />
                </div>
                <div className=' md:w-1/2 w-full h-full flex justify-center flex-col gap-3 text-left'>
                    <p className=' mt- ml-6 font-semibold text-3xl md:text-4xl'>Our Story</p>
                    <p className='ml-6 font-semibold'>Our journey began over 20 years ago with a small flower shop in the heart of our city. What started as a humble family business has blossomed into something much larger, but our commitment to quality and tradition has remained the same. Over the years, we expanded from selling flowers to offering wholesale services and beautiful garlands. Today, we proudly supply flowers to metro cities like Mumbai, Bangalore, Hyderabad, and across Karnataka.
                    Our family is deeply involved in every aspect of the business, from growing a variety of flowers on our own fields to managing two shops in our city—one dedicated to garlands and the other to wholesale flower sales. This journey has been one of passion, hard work, and dedication, and we look forward to continuing to bring beauty and joy through our flowers for years to come</p>
                </div>
                <div className=' w-full md:hidden h-full'>
                    <img className='w-full h-full' src="https://c1.wallpaperflare.com/preview/372/583/609/sunflower-fields-karnataka-india-flowers.jpg" alt="" />
                </div>
            </div>
            <div className='max-w-screen-2xl mt-[30vh] gap-4 md:mt-[10vh] w-[25rem] md:flex md:flex-row flex flex-col justify-center text-center h-[530px] md:w-[74rem] container md:gap-4 mx-auto md:h-[26rem]'>
                <div className=' md:w-1/2 w-full h-full justify-center flex flex-col gap-3 text-left'>
                    <p className=' mt- ml-6 font-semibold text-3xl md:text-4xl'>Crafting joy with every petal, bringing happiness right to your door.</p>
                    <p className='ml-6 font-semibold'>Welcome to our flower shop, where every bloom is crafted to bring joy. From roses to seasonal favorites, we offer fresh, handpicked flowers for every occasion. Whether it’s love, sympathy, or celebration, we deliver happiness to your door with care and creativity. We have two shops in our city—one dedicated to selling garlands and the other for wholesale flower sales. Our garlands come in various categories, including those for weddings, funerals, engagements, and festivals like Diwali and Holi. With fast, reliable service and a passion for perfection, we’re dedicated to making your moments special with the beauty of flowers.</p>
                </div>
                <div className=' md:w-1/2 w-full h-full'>
                    <img className='w-full h-full' src="https://thumbs.dreamstime.com/b/person-holds-vibrant-bouquet-mixed-flowers-against-white-background-person-holds-vibrant-bouquet-mixed-flowers-313641542.jpg" alt="" />
                </div>
            </div>
            <div className='mt-[12em] md:mt-5'>
            <Footer/>
            </div>
        </>
    )
}

export default About