import React from "react";
import "./style.css";
import stamp from "../../assets/myStamp.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function NavBar() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.productsRed);

  return (
    <div className="navbar">
      <img
        onClick={() => navigate("/")}
        className="stamp"
        src={stamp}
        alt="stamp"
      />
      <div className="search">
        <input type="text" placeholder="search.." className="input" />
        <div className="searchIcon">
          <SearchIcon sx={{ color: "white" }} />
        </div>
      </div>

      <div className="navItems">
        <div className="item">
          <FavoriteIcon sx={{ color: "white" }} />
          <span onClick={() => navigate("/wishList")}>WishList</span>
          <div className="notification">
            <span>{data.wishList?.length}</span>
          </div>
        </div>
        <div className="item">
          <ShoppingCartIcon sx={{ color: "white" }} />
          <span onClick={() => navigate("/cart")}>Cart</span>
          <div className="notification">
            <span>{data.cart?.length}</span>
          </div>
        </div>
      </div>
      <div style={{ paddingRight: "5%" }} className="item">
        <AccountCircleIcon sx={{ color: "white" }} />
        <span>Profile</span>
      </div>
    </div>
  );
}

export default NavBar;
