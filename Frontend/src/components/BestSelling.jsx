import React from 'react';
import flowers from '../../public/Flowers.json'; 
import {  useCart } from "react-use-cart";
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

const BestSelling = () => {
  const bestSellingFlowers = flowers.slice(0, 4);
  const { addItem } = useCart();
  const [authUser, setAuthUser] = useAuth()

  return (
    <>

      <div className='max-w-screen-2xl mt-[10vh] md:mt-[4vh] w-[25rem] py-3 h-[530px] md:w-[74rem] container mx-auto md:px-20 md:py-8 px-4 md:h-[30rem]'>
        <div className='md:h-[68vh]'>
          <p className='font-bold text-2xl text-red-900'>BEST SELLING</p><br />
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {bestSellingFlowers.map((flower, index) => (
              <div  key={index} className="p-3 cursor-pointer text-center bg-white rounded-none hover:shadow-xl">
                <figure>
                  <img className='w-full md:p-4 h-[10vh] md:h-[32vh]' src={flower.image} alt={flower.name} />
                </figure>
                <div className='flex flex-col gap-2 items-center'>
                  <h2 className="md:text-[20px] font-semibold">{flower.name}</h2>
                  <p className='font-semibold'>&#8377;{flower.price}</p>
                  {
                      authUser?(
                        <button onClick={() => addItem(flower)} className="btn btn-outline border-[2px]  hover:bg-red-800 border-red-900">Add to Cart</button>
                      ):(
                        <Link to="/Signup" className="btn btn-outline border-[2px]  hover:bg-red-800 border-red-900">Add to Cart</Link>
                      )
                    }
                </div>
              </div>   
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSelling;
