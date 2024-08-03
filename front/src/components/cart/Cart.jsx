import React from "react";
import "./style.css";

function Cart() {
  return (
    <div className="cartContenair">
      <h1 className="cartHeader">Shopping Cart </h1>
      <div className="cartSections">
        <div className="cartLeftSide">
          <h3 className="cartHeader">Items</h3>
        </div>
        <div className="cartRightSide">
          <h3 className="cartHeader">Order Summary</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
