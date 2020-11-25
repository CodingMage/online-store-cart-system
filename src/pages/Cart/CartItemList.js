import React from "react";
import { Add, Remove } from "@material-ui/icons";

import Bag from "../../svg/bag.jpg";

const CartItemList = () => {
  return (
    <div className="itemlist">
      <div className="itemlist__img">
        <img src={Bag} alt="bag" />
      </div>
      <div className="itemlist__info">
        <div className="itemlist__info-name">
          Rose Gold Plated Double Flared Tunnel Plug
        </div>
        <div className="itemlist__info-price">$40</div>
      </div>
      <div className="itemlist__action">
        <div className="itemlist__action-remove">Remove</div>
        <div className="itemlist__action-change">
          <div className="change-icon">
            <Remove />
          </div>
          1
          <div className="change-icon">
            <Add />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
