// import React, { useEffect, useState, } from 'react'
// import axios from "axios"
// import {  useCart } from "react-use-cart";
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvider';


// const Products = ({ selectedCategory }) => {
//     const [flowers, setFlowers] = useState([]);
//     const [authUser, setAuthUser] = useAuth()

//     const { addItem } = useCart();
    
    
//     useEffect(() => {
//       const getFlower = async () => {
//         try {
//           const res = await axios.get("http://localhost:4001/flower");
//           setFlowers(res.data);
//         } catch (error) {
//           console.log("Error:", error);
//         }
//       };
//       getFlower();
//     }, []);
//   console.log(items)
//     const displayedFlowers = selectedCategory
//       ? flowers.filter(flower => flower.category === selectedCategory)
//       : flowers;
  
//     return (
//       <>
//         <div className="max-w-screen-2xl container mx-auto md:px-2 px-4">
//           <div className="md:grid grid grid-cols-2 md:grid-cols-2 gap-5">
//             {displayedFlowers.length > 0 ? (
//               displayedFlowers.map((flower, index) => (
//                 <div key={index} className="p-3 cursor-pointer text-center bg-white rounded-none hover:shadow-xl">
//                   <figure>
//                     <img
//                       className="w-full md:p-4 h-[10vh] md:h-[32vh]"
//                       src={flower.image}
//                       alt={flower.name}
//                       style={{ aspectRatio: "3/2", objectFit: "contain" }}
//                     />
//                   </figure>
//                   <div className="flex flex-col gap-2 items-center">
//                     <h2 className="md:text-[20px] font-semibold">{flower.name}</h2>
//                     <p className="font-semibold">&#8377;{flower.price}</p>
//                     {
//                       authUser?(
//                         <button onClick={() => addItem(flower)} className="btn btn-outline border-[2px]  hover:bg-red-800 border-red-900">Add to Cart</button>
//                       ):(
//                         <Link to="/Signup" className="btn btn-outline border-[2px]  hover:bg-red-800 border-red-900">Add to Cart</Link>
//                       )
//                     }
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No products found for the selected category.</p>
//             )}
//           </div>
//         </div>
//       </>
//     );
  
//   export default Products;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Products = ({ selectedCategory, viewAllProducts }) => {
    const [flowers, setFlowers] = useState([]);
    const [authUser] = useAuth();
    const { addItem } = useCart();

    useEffect(() => {
        const getFlower = async () => {
            try {
                const res = await axios.get("http://localhost:4001/flower"); // Replace "API" with your endpoint.
                setFlowers(res.data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        getFlower();
    }, []);

    const displayedFlowers = selectedCategory
        ? flowers.filter(flower => flower.category === selectedCategory)
        : flowers;

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-2 px-4">
            <div className="grid md:grid-cols-2 gap-5">
                {displayedFlowers.length > 0 ? (
                    displayedFlowers.map((flower, index) => (
                        <div key={index} className="p-3 cursor-pointer text-center bg-white hover:shadow-xl">
                            <figure>
                                <img
                                    className="w-full md:p-4 h-[10vh] md:h-[32vh]"
                                    src={flower.image}
                                    alt={flower.name}
                                    style={{ aspectRatio: "3/2", objectFit: "contain" }}
                                />
                            </figure>
                            <div className="flex flex-col gap-2 items-center">
                                <h2 className="md:text-[20px] font-semibold">{flower.name}</h2>
                                <p className="font-semibold">&#8377;{flower.price}</p>
                                {authUser ? (
                                    <button
                                        onClick={() => addItem(flower)}
                                        className="btn btn-outline border-2 hover:bg-red-800 border-red-900"
                                    >
                                        Add to Cart
                                    </button>
                                ) : (
                                    <Link
                                        to="/Signup"
                                        className="btn btn-outline border-2 hover:bg-red-800 border-red-900"
                                    >
                                        Add to Cart
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found for the selected category.</p>
                )}
            </div>
        </div>
    );
};

export default Products;



      // const userInfo={
      //       name:data.name,
      //       email:data.email,
      //       address:data.address,
      //       password:data.password
      // }
      // await axios.post("http://localhost:4001/cart",userInfo)
      // .then((res)=>{
      //   console.log(res.data)
      //   if(res.data){
      //     toast.success('Signup Succesfull');
      //     navigate('/');
      //   }
      //   localStorage.setItem("Users",JSON.stringify(res.data.user))
      // }).catch((err)=>{
      //     if(err.response){
      //       toast.error('Error: '+ 'user already exists');
      //     }
      // })
    
    // const addToCart = async (productId, quantity) => {
//       try {
//         const response = await fetch('/api/cart', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             // Authorization: `Bearer ${token}`, // Assuming you use JWT for auth
//           },
//           body: JSON.stringify({ productId, quantity }),
//         });
//         const data = await response.json();
//         if (response.ok) {
//           toast.success('Item added to cart');
//         } else {
//           toast.error('Failed to add item');
//         }
//       } catch (error) {
//         console.error(error);
//         toast.error('An error occurred');
//       }
//     };
//     const fetchCart = async () => {
//   try {
//     const response = await fetch('http://localhost:4001/cart', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const cart = await response.json();
//     setCartItems(cart.items); // Assuming you have a state for cart items
//   } catch (error) {
//     console.error(error);
//   }
// };

// useEffect(() => {
//   fetchCart();
// }, []);