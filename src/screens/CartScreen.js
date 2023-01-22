// import React, { useState } from "react";
// import { useCart } from "./useCart";
// import { Link } from 'react-router-dom';

// const CartScreen = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   const handleRemove = (id) => {
//     removeFromCart(id);
//   };

//   const handleQuantityChange = (id, value) => {
//     updateQuantity(id, value);
//     setQuantity(value);
//   };

//   return (
//     <div className="container mx-auto">
//       <h2 className="text-xl font-medium mb-4">Your Cart</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full text-left table-collapse">
//           <thead>
//             <tr>
//               <th className="text-sm font-medium p-2 bg-gray-100">Product</th>
//               <th className="text-sm font-medium p-2 bg-gray-100">Price</th>
//               <th className="text-sm font-medium p-2 bg-gray-100">Quantity</th>
//               <th className="text-sm font-medium p-2 bg-gray-100"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((product) => (
//               <tr key={product.id} className="border-b">
//                 <td className="p-2">{product.name}</td>
//                 <td className="p-2">{product.price}</td>
//                 <td className="p-2">
//                   <input
//                     type="number"
//                     className="w-12 text-center border rounded-lg p-1"
//                     value={quantity}
//                     onChange={(e) =>
//                       handleQuantityChange(product.id, e.target.value)
//                     }
//                   />
//                 </td>
//                 <td className="p-2">
//                   <button
//                     className="bg-red-500 text-white rounded-lg p-2"
//                     onClick={() => handleRemove(product.id)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="my-4 text-right">
//         <h3 className="text-xl font-medium">Total: {cart.total}</h3>
//         <Link to="/placeorder"><button>Checkout</button></Link>
//       </div>
//     </div>
//   );
// };

// export default CartScreen;
