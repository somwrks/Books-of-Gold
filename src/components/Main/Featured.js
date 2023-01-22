import React from 'react'
import {Link} from "react-router-dom"
import Rating from "./Rating"
import products from "../../data/Products";
const Featured = () => {
  return (
    <div className="container">
 <section
            id="featured-products"
            className=" flex flex-wrap flex-col p-5"
          >
            <h1 className="aight text-5xl text-center  font-bold ">
              Featured Books 
            </h1>
            <p className="text-2xl text-center  mt-3 ">Best of Summer</p>
            <div className="shop-container ">
             {products.map((product)=>(
                <div className="container" key ={product._id}>
                    <div className="container">
                        <Link to={`/products/${product._id}`}>
                            <div className="container">
                                <img src={product.image} alt={product.name} />
                            </div>
                        </Link>
                    </div>
                    <div className="container">
                        <p>
                            <Link to={`/products/${product._id}`}>{product.name}</Link>
                        </p>
                        <Rating value={product.rating} text = {`${product.numReviews} reviews`}></Rating>
                        <h3>${product.price}</h3>
                    </div>
                </div>
             ))}
            </div>
          </section>
    </div>
  )
}

export default Featured