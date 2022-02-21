import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker"

const Checkout = ({
  cartItems,
  totalPrice,
  minusTwenty,
  switchStateOne,
  switchStateTwo,
  setBoughtItems,
  setCartItems,
  rng,
  twenty,
}) => {
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());


  async function boughtItems(event) {
    event.preventDefault();
    const oldObject = {
      name: cartItems.map((e) => e.name),
      price: totalPrice,
      qty: cartItems.map((e) => e.qty),
      id: rng,
    };

    if (twenty === true) {
      oldObject.price = Math.floor(totalPrice - totalPrice * 0.2);
    }

    if (switchStateOne === true && switchStateTwo === false) {
      oldObject.price = Math.ceil(totalPrice - totalPrice * 0.05);
    }

    if (switchStateOne === false && switchStateTwo === true) {
      oldObject.price = Math.ceil(totalPrice - 20);
    }

    if (switchStateOne === true && switchStateTwo === true) {
      oldObject.price = Math.ceil(totalPrice - 20 - totalPrice * 0.05);
    }

    setBoughtItems((oldArray) => [...oldArray, oldObject]);
    setCartItems([]);
    navigate("/");
  }

  const promotionList = () => {
    if (twenty) {
      return (
        <div className="promo-container">
          <div className="promo">
            <h5>20%OFF</h5>
            <p>20% of the first item</p>
          </div>
        </div>
      );
    }

    if (switchStateOne === true && switchStateTwo === false) {
      return (
        <div className="promo">
          <h5>5%OFF</h5>
          <p>5% of the total price</p>
        </div>
      );
    }

    if (switchStateTwo === true && switchStateOne === false) {
      return (
        <div className="promo">
          <h5>20EUROOFF</h5>
          <p>20 Euros of the total price</p>
        </div>
      );
    }

    if (switchStateOne === true && switchStateTwo === true) {
      return (
        <div className="promo-container">
          <div className="promo">
            <h5>20EUROOFF</h5>
            <p>20 Euros of the total price</p>
          </div>

          <div className="promo">
            <h5>5%OFF</h5>
            <p>5% of the total price</p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="checkout-page">
      <div className="checkout-container">
        <div className="cartItems">
          <h2>Order ID: {rng}</h2>
          <div className="items-displayed">
            {cartItems.map((e) => {
              return (
                <div className="item" key={cartItems.indexOf(e)}>
                  <h6>{e.name}</h6>
                  <p className="price">
                    {e.qty} x {e.price}
                    {"\u20AC"}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="promotions">
            <h4>Applied Promotions</h4>
            {promotionList()}
          </div>
        </div>

        <form action="#" onSubmit={boughtItems}>
          <h2>Payment Details</h2>
          <div className="form-data">
            <label htmlFor="name">Name:</label>
            <input type="text" />
          </div>

          <div className="form-data">
            <label htmlFor="surname">Surname:</label>
            <input type="text" />
          </div>

          <div className="form-data">
            <label htmlFor="email">Email:</label>
            <input type="email" required />
          </div>

          <div className="form-data">
            <label htmlFor="country">Country:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <div className="form-data">
              <label htmlFor="City">City:</label>
              <input type="text" required />
            </div>
            <div className="form-data">
              <label htmlFor="City">Street:</label>
              <input type="text" required />
            </div>
          </div>
          <h4>Credit Card Details</h4>
          <div className="form-data">
            <label htmlFor="ccn">Credit Card Number:</label>
            <input
              id="ccn"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              maxLength="19"
              placeholder="xxxx xxxx xxxx xxxx"
              required
            />
          </div>

          <div className="form-group">
            <div className="form-data">
              <label htmlFor="date">Expiration Date:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
              />
            </div>
            <div className="form-data">
              <label htmlFor="ccv">CCV:</label>
              <input maxLength="4" type="tel" required />
            </div>
          </div>

          <h3>
            Total Price:
            {twenty === true &&
              Math.floor(totalPrice - totalPrice * 0.2) + "\u20AC"}
            {switchStateOne === true &&
              switchStateTwo === false &&
              Math.ceil(totalPrice - totalPrice * 0.05) + "\u20AC"}
            {switchStateOne === false &&
              switchStateTwo === true &&
              Math.ceil(totalPrice - 20) + "\u20AC"}
            {switchStateOne === true &&
              switchStateTwo === true &&
              Math.ceil(totalPrice - 20 - totalPrice * 0.05) + "\u20AC"}

              {
                twenty === false && switchStateOne === false &&
                switchStateTwo === false && (
                  Math.floor(totalPrice).toFixed(2) + "\u20AC"
                )
              }
          </h3>
          <button type="submit">Buy</button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
