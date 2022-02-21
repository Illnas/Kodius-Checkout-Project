import React from "react";

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="box-container">
      <h4>{product.name}</h4>
      <img className="small" src={product.image} alt={product.name} />
      <p>{product.p}</p>
      <div className="random-price">
        <p className="priceText">Price:</p>
        <p className="priceNumber">
          {product.price}
          {"\u20AC"}
        </p>
      </div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
