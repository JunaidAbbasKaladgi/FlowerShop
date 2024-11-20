// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import toast from 'react-hot-toast';

// const Order = () => {

//   return (
//     <div className='flex flex-col min-h-screen'>
//       <Navbar />
//       <div className='flex-grow'>
//         <div className='max-w-screen-2xl mt-[20vh] container mx-auto md:px-20 px-4'>
//               <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
//                 <h1 className='text-2xl font-bold mb-4'>Order List</h1>
//                 <div className='overflow-x-auto'>
//                   <table className='min-w-full bg-white shadow-md rounded-lg'>
//                     <thead>
//                       <tr className='bg-gray-100 text-left'>
//                         <th className='p-4'>#</th>
//                         <th className='md:p-4 px-6'>Date-Ordered</th>
//                         <th className='p-4'>OrderID</th>
//                         <th className='p-4'>Total Amount</th>
//                         <th className='p-4'>Status</th>
//                         <th className='px-8'>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                         <tr key="" className='border-b'>
//                           <td className='p-4 '>1</td>
//                           <td className='p-6'>12-10-2024</td>
//                           <td className='p-6'>1234</td>
//                           <td className='p-6'>&#8377;1000</td>
//                           <td className='p-3'><span className='bg-gray-700 text-white rounded-lg p-1'>Pending</span></td>
//                           <td className='p-9'>
//                             <button
//                               onClick={() => {toast.success("Order Cancelled Successfully")}}
//                               className='text-white bg-red-600 px-1 rounded-lg duration-250'
//                             >Cancel
//                             </button>
//                           </td>
//                         </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Order;



import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import toast from 'react-hot-toast';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4001/orders'); // Endpoint to get orders
        setOrders(response.data);
      } catch (error) {
        toast.error("Error fetching orders");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
        <div className='max-w-screen-2xl mt-[20vh] container mx-auto md:px-20 px-4'>
          <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <h1 className='text-2xl font-bold mb-4'>Order List</h1>
            <div className='overflow-x-auto'>
              <table className='min-w-full bg-white shadow-md rounded-lg'>
                <thead>
                  <tr className='bg-gray-100 text-left'>
                    <th className='p-4'>#</th>
                    <th className='md:p-4 px-6'>Date-Ordered</th>
                    <th className='p-4'>OrderID</th>
                    <th className='p-4'>Total Amount</th>
                    <th className='p-4'>Status</th>
                    <th className='px-8'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order._id} className='border-b'>
                      <td className='p-4'>{index + 1}</td>
                      <td className='p-6'>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className='p-6'>{order._id}</td>
                      <td className='p-6'>&#8377;{order.total}</td>
                      <td className='p-3'>
                        <span className={`bg-${order.status === 'Pending' ? 'gray' : 'green'}-700 text-white rounded-lg p-1`}>
                          {order.status}
                        </span>
                      </td>
                      <td className='p-9'>
                        <button
                          onClick={() => { toast.success("Order Cancelled Successfully"); }}
                          className='text-white bg-red-600 px-1 rounded-lg duration-250'
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
