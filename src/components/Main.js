import React, { useState } from "react";
import Product from "./Product";

const Main = (props) => {
  const { products, onAdd } = props;

  return (
    <main id="main">
      <h2>Welcome to Item Selection</h2>

      <section>
      {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </section>
    </main>
  );
};

export default Main;
