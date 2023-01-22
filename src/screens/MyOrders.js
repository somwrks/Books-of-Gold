import React, { useState } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: '01/01/2022',
      product: 'Product 1',
      price: 50,
      status: 'Shipped'
    },
    {
      id: 2,
      date: '01/02/2022',
      product: 'Product 2',
      price: 100,
      status: 'Delivered'
    },
    {
      id: 3,
      date: '01/03/2022',
      product: 'Product 3',
      price: 75,
      status: 'Pending'
    },
  ]);

  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-lg font-medium mb-4">My Orders</h2>
      <table className="w-full text-left table-collapse">
        <thead>
          <tr>
            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-200">Order ID</th>
            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-200">Date</th>
            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-200">Product</th>
            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-200">Price</th>
            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="p-2 border-t border-gray-400">{order.id}</td>
              <td className="p-2 border-t border-gray-400">{order.date}</td>
              <td className="p-2 border-t border-gray-400">{order.product}</td>
              <td className="p-2 border-t border-gray-400">${order.price}</td>
              <td className="p-2 border-t border-gray-400">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
