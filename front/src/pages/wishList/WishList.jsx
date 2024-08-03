import React from "react";
import "./style.css";

function WishList() {
  return (
    <div className="wishListContenair">
      <h1 className="wishListHead">Your favorite items</h1>
      <h4 className="wishListHead">There are 4 products in this list</h4>
      <div className="favoriteItems"></div>
    </div>
  );
}

export default WishList;
