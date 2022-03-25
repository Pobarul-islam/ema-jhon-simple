import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  console.log(props.product);
  return (
    <div className="product">
      <img src={img} alt="img"></img>
      <div className="product-info">
        <p className="product-name">{name} </p>
        <p>Price: {price}</p>
        <p>Seller: {seller}</p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
          </div>
          <button className="btn-cart">
              <p>Add to Cart</p>
          </button>
    </div>
  );
};

export default Product;
