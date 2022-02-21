import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

const CartItems = ({ boughtItems, switchStateOne, switchStateTwo, twenty }) => {
  console.log(boughtItems);
  const [stateOne, setStateOne] = useState(false)
  const [stateTwo, setStateTwo] = useState(false)
  const [stateTwenty, setStateTwenty] = useState(false)




  const concatArr = (arr1, arr2, sep) =>
    arr1.map(function (num, idx) {
      return (
        <span key={uuidv4()} className="multiple">
          {num.toString().concat(sep, arr2[idx].toString())}
        </span>
      );
    });

    console.log(boughtItems.states)

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
                Price: {e.price} {"\u20AC"}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItems;
