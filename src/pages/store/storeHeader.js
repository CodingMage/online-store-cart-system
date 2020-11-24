import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
const StoreHeader = () => {
  return (
    <div className="storeheader">
      <div className="storeheader-content">
        <MenuIcon className="ham" />
        <div className="content-search ">
          <div className="con">
            <input
              type="text"
              placeholder="Find anything you are looking for"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="content-cart flex">
          <div className="content-cart_icon">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="content-cart_text">Cart</div>
        </div>
        <AccountCircleOutlinedIcon className="ava" />
      </div>
    </div>
  );
};

export default StoreHeader;
