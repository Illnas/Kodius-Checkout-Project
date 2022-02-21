import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  cartItems,
  totalPrice,
  setTotalPrice,
  setMinusTwenty,
  switchStateOne,
  setSwitchStateOne,
  switchStateTwo,
  setSwitchStateTwo,
  setRng,
  onAdd,
  onRemove,
  twenty,
  setTwenty
}) => {
  const [five, setFive] = useState(false);
  const [originalPrice, setOriginalPrice] = useState();
  const [disabledCheckout, setDisabledCheckout] = useState(false);
  const textRef = useRef();
  const [error, setError] = useState(false);

  useEffect(() => {
    const callingIt = () => {
      setTotalPrice(cartItems.reduce((a, c) => a + c.qty * c.price, 0));
      setOriginalPrice(cartItems.reduce((a, c) => a + c.qty * c.price, 0));
      setFive(false);
      setMinusTwenty(false);
      setTwenty(false);
      setSwitchStateOne(false);
      setSwitchStateTwo(false);
      if (cartItems.length !== 0) {
        setDisabledCheckout(true);
      }
      cartItems.map((e) => {
        if (e.name === "Smoke Sensor") {
          if (e.qty % 2 === 0) {
            let evaulated = originalPrice - (e.qty / 2) * 5;
            setTotalPrice(evaulated);
          }

          if (e.qty > 2 && (e.qty % 2 === 0) === false) {
            let saved =
              cartItems.reduce((a, c) => a + c.qty * c.price, 0) -
              Math.floor(e.qty / 2) * 5;
            setTotalPrice(saved);
          }
        }
      });

      cartItems.map((e) => {
        if (e.name === "Outdoor Motion Sensor") {
          if (e.qty % 3 === 0) {
            let evaulated = originalPrice - (e.qty / 3) * 10;
            setTotalPrice(evaulated);
          }

          if (e.qty > 3 && (e.qty % 3 === 0) === false) {
            let saved =
              cartItems.reduce((a, c) => a + c.qty * c.price, 0) -
              Math.floor(e.qty / 3) * 10;
            setTotalPrice(saved);
          }
        }
      });
    };
    callingIt();
  }, [
    cartItems,
    setTotalPrice,
    setMinusTwenty,
    setSwitchStateOne,
    setSwitchStateTwo,
    originalPrice,
    totalPrice,
  ]);

  const checkoutWindow = () => {
    setRng(Math.floor(Math.random() * 9999));
  };

  const addPromo = (e) => {
    console.log(textRef.current.value);

    if(textRef.current.value !== "20%OFF" && textRef.current.value !== "5%OFF" && textRef.current.value !== "20EUROOFF") {
      setError(true)
    }

    if (
      textRef.current.value === "20%OFF" &&
      switchStateOne === false &&
      switchStateTwo === false
    ) {
      setTwenty(true);
      setError(false)

    }

    if (
      textRef.current.value === "20%OFF" &&
      switchStateOne === true &&
      switchStateTwo === false
    ) {
      setError(true);
    }

    if (
      textRef.current.value === "20%OFF" &&
      switchStateOne === false &&
      switchStateTwo === true
    ) {
      setError(true);
    }

    if (
      textRef.current.value === "20%OFF" &&
      switchStateOne === true &&
      switchStateTwo === true
    ) {
      setError(true);
    }

    if (
      textRef.current.value === "5%OFF" &&
      switchStateOne === false &&
      switchStateTwo === false &&
      twenty === false
    ) {
      setSwitchStateOne(true);
      setError(false)

    }

    if (
      textRef.current.value === "5%OFF" &&
      switchStateOne === false &&
      switchStateTwo === true &&
      twenty === false
    ) {
      setSwitchStateOne(true);
      setError(false)

    }

    if (
      textRef.current.value === "5%OFF" &&
      switchStateOne === true &&
      switchStateTwo === false &&
      twenty === false
    ) {
      setError(true);
    }

    if (
      textRef.current.value === "5%OFF" &&
      switchStateOne === false &&
      switchStateTwo === false &&
      twenty === true
    ) {
      setError(true);
    }

    if (
      textRef.current.value === "20EUROOFF" &&
      switchStateOne === true &&
      switchStateTwo === false &&
      twenty === false
    ) {
      setSwitchStateTwo(true);
      setError(false)

    }

    if (
      textRef.current.value === "20EUROOFF" &&
      switchStateOne === false &&
      switchStateTwo === false &&
      twenty === false
    ) {
      setSwitchStateTwo(true);
      setError(false)

    }

    if (
      textRef.current.value === "20EUROOFF" &&
      switchStateOne === false &&
      switchStateTwo === true &&
      twenty === false
    ) {
      setError(true);
    }

    if (
      textRef.current.value === "20EUROOFF" &&
      switchStateOne === false &&
      switchStateTwo === false &&
      twenty === true
    ) {
      setError(true);
    }
  };

  const removingPromotions = (e) => {
    if (e.target.value === "20%OFF") {
      setTwenty(false);
      setFive(false);
      setMinusTwenty(false);
    }

    if (
      e.target.value === "5%OFF" &&
      switchStateOne === true &&
      switchStateTwo === false
    ) {
      setSwitchStateOne(false);
    }

    if (
      e.target.value === "5%OFF" &&
      switchStateOne === true &&
      switchStateTwo === true
    ) {
      setSwitchStateOne(false);
    }

    if (
      e.target.value === "20EUROOFF" &&
      switchStateOne === false &&
      switchStateTwo === true
    ) {
      setSwitchStateTwo(false);
    }

    if (
      e.target.value === "20EUROOFF" &&
      switchStateOne === true &&
      switchStateTwo === true
    ) {
      setSwitchStateTwo(false);
    }
  };

  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <a href="!#">Third Link</a>
          </li>
        </ul>
      </nav>

      <div className="shopping-cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="35px"
          fill="#000000"
          id="icon"
        >
          <g>
            <rect fill="none" height="24" width="35" />
            <path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" />
          </g>
        </svg>
        <p id="numberOfItems">{cartItems.length}</p>

        <div id="dropdown-content" className="dropdown-class">
          <div className="header">
            <h2>Item Cart</h2>
          </div>
          <div className="cart">
            <div className="item-container">
              {cartItems.length === 0 && <div>Cart is empty</div>}
              {cartItems.map((item) => (
                <div key={item.id} className="item">
                  <h6>{item.name}</h6>
                  <div className="buttons">
                    <button onClick={() => onRemove(item)} className="remove">
                      -
                    </button>{" "}
                    <button onClick={() => onAdd(item)} className="add">
                      +
                    </button>
                  </div>
                  <div className="prices">
                    {item.qty} x {item.price.toFixed(2)}
                    {"\u20AC"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="promo-codes">
            {twenty === true && (
              <div className="promo">
                <div>20%OFF</div>
                <button value={"20%OFF"} onClick={(e) => removingPromotions(e)}>
                  X
                </button>
              </div>
            )}

            {switchStateOne === true && (
              <div className="promo">
                <div>5%OFF</div>

                <button value={"5%OFF"} onClick={(e) => removingPromotions(e)}>
                  X
                </button>
              </div>
            )}

            {switchStateTwo === true && (
              <div className="promo">
                <div>20EUROOFF</div>

                <button
                  value={"20EUROOFF"}
                  onClick={(e) => removingPromotions(e)}
                >
                  X
                </button>
              </div>
            )}

            <div className="inputs">
              <input type="text" ref={textRef} />
              <button onClick={(e) => addPromo(e)}>Add Promo</button>
            </div>

            {error === true && (
              <div className="errors">
                Code entered is wrong! Or entered in wrong combination!
              </div>
            )}
            <div className="errors"></div>
          </div>
          <div className="total-price">
            <h4>Total Price:</h4>
            <p>
              {totalPrice.toFixed(2)}
              {"\u20AC"}
            </p>
          </div>
          <Link
            to={disabledCheckout ? "/checkout" : "#"}
            id="checkout"
            onClick={() => checkoutWindow()}
          >
            Checkout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
