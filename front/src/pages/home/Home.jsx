import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/asyncThunk";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  addToCart,
  addToWishList,
  removeFromWishList,
} from "../../redux/slice";

function Home() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const productsData = useSelector((state) => state.productsRed);
  const dispatch = useDispatch();

  const handleAddToFavorite = (item) => {
    const newFavoriteList = [...favoriteList];
    const isExist = newFavoriteList.find((el) => el.id === item.id);

    if (isExist) {
      const index = newFavoriteList.findIndex((el) => el.id === isExist.id);
      newFavoriteList.splice(index, 1);
      setFavoriteList(() => [...newFavoriteList]);
      dispatch(removeFromWishList(newFavoriteList));
    } else {
      newFavoriteList.push(item);
      setFavoriteList([...newFavoriteList]);
      dispatch(addToWishList(newFavoriteList));
    }
  };

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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      {productsData.isLoading ? (
        <h1 className="homeHeader">Loading..</h1>
      ) : (
        <div className="homeContenaire">
          <h1 className="homeHeader">Our Products</h1>
          <div className="productGrid">
            {productsData.data &&
              productsData.data.length > 0 &&
              productsData.data.map((el, i) => {
                return (
                  <div className="gridItem" key={i}>
                    <div
                      className="favorite"
                      onClick={() => handleAddToFavorite(el)}
                    >
                      {favoriteList.find((item) => item.id === el.id) ? (
                        <FavoriteIcon
                          style={{ fontSize: "50", color: "rgb(211, 8, 8)" }}
                        />
                      ) : (
                        <FavoriteBorderOutlinedIcon
                          style={{ fontSize: "50" }}
                        />
                      )}
                    </div>
                    <img
                      src={el.image}
                      alt="productImg"
                      className="productImg"
                    />

                    <div className="productMeta">
                      <h2 className="productTitle">
                        {el.title.slice(0, 50)}..
                      </h2>
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
      )}
    </>
  );
}

export default Home;
