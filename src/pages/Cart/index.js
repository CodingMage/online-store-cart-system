import React from "react";
import CartProduct from "./CartProduct";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Add } from "@material-ui/icons";

const Cart = () => {
  return (
    <div className="maincart">
      <div className="cartheader">
        <div className="cartheader__content">
          <div className="cartlength flex">
            <div className="cartlength__icon">
              <ShoppingCartOutlinedIcon />
            </div>
            <div className="cartlength__text">Cart</div>
          </div>

          <div className="carttitle">My Cart</div>

          <div className="cartexit">
            <Add />
          </div>
        </div>
      </div>
      <CartProduct />
    </div>
  );
};

export default Cart;
