import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice";

function WishList() {
  const wishList = useSelector((state) => state.productsRed.wishList);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const handleAddToCart = (el) => {
    const newAddToCart = [...cart];
    const isExist = newAddToCart.find((item) => item.id === el.id);
    if (isExist) {
      alert("This item is already added to the cart!");
    } else {
      newAddToCart.push(el);
      setTotal(() => total + el.price);
      setCart([...newAddToCart]);
      dispatch(addToCart({ items: newAddToCart, total: total }));
    }
  };
  return (
    <div className="wishListContenair">
      <div className="wishListHead">
        <h1>Your favorite items</h1>
        <h2>There are {wishList?.length} products in this list</h2>
      </div>

      <div className="favoriteItems">
        {wishList &&
          wishList.length > 0 &&
          wishList.map((el, i) => {
            return (
              <div className="gridItem" key={i}>
                <img src={el.image} alt="productImg" className="productImg" />

                <div className="productMeta">
                  <h2 className="productTitle">{el.title.slice(0, 50)}..</h2>
                  <p className="productDesc">
                    {el.description.slice(0, 200)}...
                  </p>
                  <h1 className="productPrice">{el.price} $</h1>
                  <button
                    onClick={() => handleAddToCart(el)}
                    className="productBtn"
                  >
                    Add To Card
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WishList;
