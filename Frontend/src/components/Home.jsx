import Navbar from './Navbar'
import BestSelling from './BestSelling'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Profile } from './Profile'

const Home = ({handleCategoryClick}) => {
    return (
        <div>
            <div className='mt-[12vh]'>
            <Navbar/>
            </div>
            <div className='max-w-screen-2xl md:grid md:mt-[13vh] container justify-center items-center mx-auto md:px-20 px-4'>
                    <img className='md:w-[100%]  md:h-auto' src="https://png.pngtree.com/background/20210710/original/pngtree-plant-flowers-background-design-picture-image_975811.jpg" alt="" />
                    <div className=" text-center mt-[-12em] md:mt-[-45em]">
                        <p className=" text-red-900 mt-10 text-[13px] md:text-4xl font-bold  bg-opacity-50 p-2 rounded">
                        Freshly Blooming, Naturally Beautiful!
                        </p>
                        <button  className='md:px-12 px-5 mt-3 text-[13px] py-1 md:py-3 rounded-full cursor-pointer md:text-xl text-white bg-red-800 hover:bg-red-900 duration-300'><Link onClick={handleCategoryClick} to="/Categories">Shop Now</Link></button>
                    </div>
            </div>
            <BestSelling />
            <div className='max-w-screen-2xl mt-[24vh] w-[25rem] md:mt-5 md:flex md:flex-row justify-center text-center h-[500px] md:w-[74rem] container md:gap-4 flex flex-col gap-3 mx-auto md:h-[26rem]'>
                <div className=' md:w-1/2 w-full h-full flex flex-col gap-3 text-left'>
                    <p className=' mt- ml-6 font-semibold text-4xl'>Crafting joy with every petal, bringing happiness right to your door.</p>
                    <p className='ml-6 font-semibold'>Welcome to our flower shop, where every bloom is crafted to bring joy. From roses to seasonal favorites, we offer fresh, handpicked flowers for every occasion. Whether it’s love, sympathy, or celebration, we deliver happiness to your door with care and creativity. We have two shops in our city—one dedicated to selling garlands and the other for wholesale flower sales. Our garlands come in various categories, including those for weddings, funerals, engagements, and festivals like Diwali and Holi. With fast, reliable service and a passion for perfection, we’re dedicated to making your moments special with the beauty of flowers.</p>
                </div>
                <div className='md:w-1/2'>
                    <img className='w-full h-full' src="https://thumbs.dreamstime.com/b/person-holds-vibrant-bouquet-mixed-flowers-against-white-background-person-holds-vibrant-bouquet-mixed-flowers-313641542.jpg" alt="" />
                </div>
            </div>
            <div className='mt-[14em] md:mt-[5vh]'>
            <Footer />
            </div>
        </div>
    )
}

export default Home