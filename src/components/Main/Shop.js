import React, { useEffect, useState } from 'react';
import Rating from "./Rating"
import { Link } from 'react-router-dom';
import axios from "axios"
const Shop = () => {
const [products, setProducts] = useState([])

useEffect(() => {
  const fetchproducts = async() =>{
    const {data} = await axios.get("/api/products")
    setProducts(data);
  }
  fetchproducts();
}, [])

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product._id} className="w-1/3 p-4">
          <div className="bg-white rounded-lg p-6">
            <img src={product.image} alt={product.name} className="w-full mb-4 rounded-lg" />
            <h2 className="text-lg font-medium mb-4">
            <Link to={`/products/${product._id}`}>
            {product.name}
            </Link></h2>
            <Rating value = {product.rating} text={`${product.numReviews} reviews`}/>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <h3 className="text-lg font-medium text-indigo-500">${product.price}</h3>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
