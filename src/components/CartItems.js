import React from "react";
import { v4 as uuidv4 } from "uuid";

const CartItems = ({ boughtItems }) => {

  const concatArr = (arr1, arr2, sep) =>
    arr1.map(function (num, idx) {
      return (
        <span key={uuidv4()} className="multiple">
          {num.toString().concat(sep, arr2[idx].toString())}
        </span>
      );
    });


  return (
    <div className="order-items">
      <div className="orders">
        <h4>Your orders</h4>
        {boughtItems.map((e) => {
          return (
            <div key={boughtItems.indexOf(e)} className="order-list-items">
              <h4>{e.id}</h4>
              <p>{concatArr(e.name, e.qty, " #")}</p>

              <h3>
                Price:
                {e.states[2] === true &&
                  Math.ceil(e.price - e.price * 0.2) + "\u20AC"}
                {e.states[0] === true &&
                  e.states[1] === false &&
                  Math.ceil(e.price - e.price * 0.05) + "\u20AC"}
                {e.states[0] === false &&
                  e.states[1] === true &&
                  Math.ceil(e.price - 20) + "\u20AC"}
                {e.states[0] === true &&
                  e.states[1] === true &&
                  Math.ceil(e.price - 20 - e.price * 0.05) + "\u20AC"}
                {e.states[2] === false &&
                  e.states[0] === false &&
                  e.states[1] === false &&
                  Math.ceil(e.price) + "\u20AC"}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItems;
