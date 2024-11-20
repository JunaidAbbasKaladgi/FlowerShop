// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { useCart } from 'react-use-cart';
// import toast from 'react-hot-toast';

// const Cart = () => {
//   const {
//     isEmpty,
//     items,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();

  
//   const itemSubtotal = (price, quantity) => {
//     return price * quantity;
//   };
  

  
//   const grandTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className='flex flex-col min-h-screen'>
//       <Navbar />
//       <div className='flex-grow'>
//         <div className='max-w-screen-2xl mt-[20vh] container mx-auto md:px-20 px-4'>
//           {isEmpty ? (
//             <div className='flex justify-center text-2xl font-medium'>
//               Your cart is empty
//             </div>
//           ) : (
//             <>
//               <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
//                 <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>
//                 <div className='overflow-x-auto'>
//                   <table className='min-w-full bg-white shadow-md rounded-lg'>
//                     <thead>
//                       <tr className='bg-gray-100 text-left'>
//                         <th className='p-4'>Item</th>
//                         <th className='md:p-4 px-6'>Price</th>
//                         <th className='p-4'>Quantity</th>
//                         <th className='p-4'>Subtotal</th>
//                         <th className='p-4'>Remove</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {items.map((flower) => (
//                         <tr key={flower.id} className='border-b'>
//                           <td className='md:p-4 py-4 flex items-center'>
//                             <img
//                               src={flower.image}
//                               alt={flower.name}
//                               className='md:w-16 md:h-16 w-8 h-10 object-cover mr-4'
//                             />
//                             <span>{flower.name}</span>
//                           </td>
//                           <td className='md:p-4 px-7'>&#8377;{flower.price}</td>
//                           <td className='p-6'>
//                             <span className='border-2 flex gap-1 md:w-[9vh]'>
//                               <button
//                                 onClick={() => updateItemQuantity(flower.id, Math.max(1, flower.quantity - 1))}
//                                 className='border- font-bold w-5 flex justify-center px-2 border-r-2'
//                               >
//                                 -
//                               </button>
//                               <p>{flower.quantity}</p>
//                               <button
//                                 onClick={() => updateItemQuantity(flower.id, flower.quantity + 1)}
//                                 className='w-5 font-bold flex justify-center px-2 border-l-2'
//                               >
//                                 +
//                               </button>
//                             </span>
//                           </td>
//                           <td className='p-4'>&#8377;{itemSubtotal(flower.price, flower.quantity)}</td>
//                           <td className='p-9'>
//                             <button
//                               onClick={() => removeItem(flower.id)}
//                               className='text-red-500 hover:text-red-700'
//                             >
//                               <FontAwesomeIcon icon={faTrash} style={{ color: '#a41919' }} />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               <div className='max-w-screen-2xl mt-[3vh] container mx-auto md:px-20 px-4'>
//                 <button
//                   onClick={emptyCart}
//                   className='bg-red-600 py-1 px-2 font-semibold text-white rounded-lg'
//                 >
//                   Clear Cart
//                 </button>
//               </div>

//               <div className='max-w-screen-2xl flex justify-end mt-[5vh] container mx-auto md:px-20 px-4'>
//                 <div className='flex gap-3 flex-col border- w-[20em] h-[14em]'>
//                   <div className='flex w-full justify-between'>
//                     <p className='font-bold'>Subtotal:</p>
//                     <p>&#8377;{grandTotal}</p>
//                   </div>
//                   <div className='flex w-full justify-between'>
//                     <p className='font-bold'>Shipping:</p>
//                     <p>&#8377;0.00</p>
//                   </div>
//                   <hr className='h-[2px] w-full bg-slate-500' />
//                   <div className='flex w-full justify-between'>
//                     <p className='font-bold'>Grand Total:</p>
//                     <p>&#8377;{grandTotal}</p>
//                   </div>
//                   <div className='flex mt-3 justify-center'>
//                     <button onClick={()=>{
//                       toast.success("Order Placed Successfully"),
//                       setTimeout(() => {
//                         emptyCart()
//                       }, 1500);
//                     }} className='bg-black font-semibold py-1 px-2 w-[10em] text-white'>
//                       Place Order
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart';
import toast from 'react-hot-toast';
import axios from 'axios';

const Cart = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const itemSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const grandTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to handle placing an order
  // const handlePlaceOrder = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:4001/orders', { items, total: grandTotal });
  //     if (response.status === 201) {
  //       toast.success("Order Placed Successfully");
  //       emptyCart(); 
  //     }
  //   } catch (error) {
  //     toast.error("Error placing order");
  //   }
  // };

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
        <div className='max-w-screen-2xl mt-[20vh] container mx-auto md:px-20 px-4'>
          {isEmpty ? (
            <div className='flex justify-center text-2xl font-medium'>
              Your cart is empty
            </div>
          ) : (
            <>
              <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>
                <div className='overflow-x-auto'>
                  <table className='min-w-full bg-white shadow-md rounded-lg'>
                    <thead>
                      <tr className='bg-gray-100 text-left'>
                        <th className='p-4'>Item</th>
                        <th className='md:p-4 px-6'>Price</th>
                        <th className='p-4'>Quantity</th>
                        <th className='p-4'>Subtotal</th>
                        <th className='p-4'>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((flower) => (
                        <tr key={flower.id} className='border-b'>
                          <td className='md:p-4 py-4 flex items-center'>
                            <img
                              src={flower.image}
                              alt={flower.name}
                              className='md:w-16 md:h-16 w-8 h-10 object-cover mr-4'
                            />
                            <span>{flower.name}</span>
                          </td>
                          <td className='md:p-4 px-7'>&#8377;{flower.price}</td>
                          <td className='p-6'>
                            <span className='border-2 flex gap-1 md:w-[9vh]'>
                              <button
                                onClick={() => updateItemQuantity(flower.id, Math.max(1, flower.quantity - 1))}
                                className='border- font-bold w-5 flex justify-center px-2 border-r-2'
                              >
                                -
                              </button>
                              <p>{flower.quantity}</p>
                              <button
                                onClick={() => updateItemQuantity(flower.id, flower.quantity + 1)}
                                className='w-5 font-bold flex justify-center px-2 border-l-2'
                              >
                                +
                              </button>
                            </span>
                          </td>
                          <td className='p-4'>&#8377;{itemSubtotal(flower.price, flower.quantity)}</td>
                          <td className='p-9'>
                            <button
                              onClick={() => removeItem(flower.id)}
                              className='text-red-500 hover:text-red-700'
                            >
                              <FontAwesomeIcon icon={faTrash} style={{ color: '#a41919' }} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='max-w-screen-2xl mt-[3vh] container mx-auto md:px-20 px-4'>
                <button
                  onClick={emptyCart}
                  className='bg-red-600 py-1 px-2 font-semibold text-white rounded-lg'
                >
                  Clear Cart
                </button>
              </div>

              <div className='max-w-screen-2xl flex justify-end mt-[5vh] container mx-auto md:px-20 px-4'>
                <div className='flex gap-3 flex-col border- w-[20em] h-[14em]'>
                  <div className='flex w-full justify-between'>
                    <p className='font-bold'>Subtotal:</p>
                    <p>&#8377;{grandTotal}</p>
                  </div>
                  <div className='flex w-full justify-between'>
                    <p className='font-bold'>Shipping:</p>
                    <p>&#8377;0.00</p>
                  </div>
                  <hr className='h-[2px] w-full bg-slate-500' />
                  <div className='flex w-full justify-between'>
                    <p className='font-bold'>Grand Total:</p>
                    <p>&#8377;{grandTotal}</p>
                  </div>
                  <div className='flex mt-3 justify-center'>
                    <button onClick={handlePlaceOrder} className='bg-black font-semibold py-1 px-2 w-[10em] text-white'>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
