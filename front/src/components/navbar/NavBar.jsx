import React from "react";
import "./style.css";
import stamp from "../../assets/myStamp.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
function NavBar() {
  return (
    <div className="navbar">
      <img className="stamp" src={stamp} alt="stamp" />
      <div className="search">
        <input type="text" placeholder="search.." className="input" />
        <div className="searchIcon">
          <SearchIcon sx={{ color: "white" }} />
        </div>
      </div>

      <div className="navItems">
        <div className="item">
          <FavoriteIcon sx={{ color: "white" }} />
          <span>WishList</span>
        </div>
        <div className="item">
          <ShoppingCartIcon sx={{ color: "white" }} />
          <span>Cart</span>
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
