import React, { useState } from 'react'
import Products from './Products'
import Footer from './Footer';
import Navbar from './Navbar';


const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [viewAllProducts, setViewAllProducts] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setViewAllProducts(false);
    };

    const handleViewAllProducts = () => {
        setSelectedCategory('');
        setViewAllProducts(true);
    };
    return (
        <>
            <Navbar/>
            <div className='max-w-screen-2xl mt-[12vh] container mx-auto  md:px-20'>
                <div className=' md:flex'>
                    <div className='border- gap-x-10 grid grid-cols-2 ml-12 md:gap-[8vh]  md:h-[40vh] w-[75%]  md:w-[35%] md:grid-cols-1'>
                        <div onClick={() => handleCategoryClick('SEASONAL FLOWERS')} className="bg-base-100 md:flex md:w-full relative md:flex-row md:justify-center w-[15vh] md:items-center flex flex-col tex-[#ffffff] cursor-pointer rounded-xl hover:shadow-lg hover:scale-105 duration-500 ">
                            <figure className='md:w-1/2'>
                                <img className='md:h-[20vh] rounded-xl'
                                    src="https://4.imimg.com/data4/IF/FI/MY-2120688/stock-seasonal-flower-500x500.jpg"
                                    alt="" />
                            </figure>
                            <div className='md:w-1/2 md:text-left  text-center'>
                                <h2 className=" md:text-[20px] font-normal">SEASONAL FLOWERS</h2>
                            </div>
                        </div>
                        <div onClick={() => handleCategoryClick('ROSES')} className="w-[15vh] bg-base-100 md:flex md:w-full md:flex-row md:justify-center md:items-center md:gap-2  dark:text-black cursor-pointer rounded-xl hover:shadow-lg hover:scale-105 duration-500 ">
                            <figure className=' md:w-1/2'>
                                <img className='md:h-[20vh] rounded-xl'
                                    src="https://floralife.com/wp-content/uploads/2021/12/Roses-DT_2560X1790.png"
                                    alt="" />
                            </figure>
                            <div className='  md:w-1/2 md:text-left text-center'>
                                <h2 className=" md:text-[20px] font-normal">ROSES</h2>
                            </div>
                        </div>


                        <div onClick={() => handleCategoryClick('WEDDING FLOWERS')} className="bg-base-100 md:flex md:w-full md:flex-row md:justify-center md:items-center md:gap-2 w-[15vh] dark:text-black cursor-pointer rounded-xl hover:shadow-lg hover:scale-105 duration-500">
                            <figure className='md:w-1/2'>
                                <img className='md:h-[20vh] rounded-xl'
                                    src="https://thumbs.dreamstime.com/b/wedding-flowers-outdoor-25505971.jpg"
                                    alt="" />
                            </figure>
                            <div className='md:w-1/2  md:text-left text-center'>
                                <h2 className=" md:text-[20px] font-normal">WEDDING FLOWERS</h2>
                            </div>
                        </div>


                        <div onClick={() => handleCategoryClick('BOUQUETS')} className="bg-base-100 md:flex md:w-full md:flex-row md:justify-center md:items-center md:gap-2 w-[15vh] dark:text-black cursor-pointer rounded-xl hover:shadow-lg hover:scale-105 duration-500 ">
                            <figure className='md:w-1/2'>
                                <img className='md:h-[20vh] rounded-xl '
                                    src="https://media.istockphoto.com/id/1159802579/photo/a-lot-of-flower-bouquets-at-the-florist-shop-on-the-table-made-of-hydrangea-roses-peonies.jpg?s=612x612&w=0&k=20&c=bI1YqRYuX_F0E0HSvQM4Zqo2MawIi_-SJ-sWekU681U="
                                    alt="" />
                            </figure>
                            <div className='md:w-1/2 md:text-left text-center'>
                                <h2 className=" md:text-[20px] font-normal">BOUQUETS</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100vh] h-[455vh]'>
                        <Products selectedCategory={selectedCategory} viewAllProducts={viewAllProducts} />
                    </div>
                </div>
                <div className="">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Categories