import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import products from "../data/Products"
import Rating from "../components/Main/Rating"
import axios from "axios"
const ProductDetailsPage = ({match}) => {
  const [product, setProduct] = useState({})

useEffect(() => {
  const fetchproduct = async() =>{
    const {data} = await axios.get(`/api/products/${match.params.id}`)
    setProduct(data);
  }
  fetchproduct();
}, [match])
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault();
    alert("Added to cart!")
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">{product.name}</h2>
        <Link to="">
        <img src={product.image} alt={product.name} className="w-full mb-4 rounded-lg" />
        </Link>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-indigo-500">${product.price}</h3>
          <div className="flex">
            <button className="bg-white text-indigo-500 py-2 px-4 rounded-lg hover:bg-indigo-500 hover:text-white mr-2" onClick={() => setQuantity(quantity - 1)}>
              -
            </button>
            <span className="text-indigo-500 font-medium">{quantity}</span>
            <button className="bg-white text-indigo-500 py-2 px-4 rounded-lg hover:bg-indigo-500 hover:text-white ml-2" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 ml-4" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="text-gray-700">
          <p className="mb-2">Reviews</p>
          <ul className="list-inside">
            <Rating value={product.rating} text= {`${product.numReviews} reviews`}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
