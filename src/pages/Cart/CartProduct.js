import React from "react";
import CartItemList from "./CartItemList";

const CartProduct = () => {
  return (
    <div className="cartproduct">
      <div className="cartproduct__list">
        <CartItemList />
        <CartItemList />
        <CartItemList />
        <CartItemList />
        <CartItemList />
      </div>
    </div>
  );
};

export default CartProduct;
