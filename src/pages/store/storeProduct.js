import React from "react";
import { ReactComponent as Grey } from "../../svg/shirt.svg";

const StoreProduct = () => {
  return (
    <div className="storeproduct">
      <div className="productads">
        <div className="productads-img">
          <Grey />
        </div>
        <div className="productads-info">
          <h1>Shop with ease</h1>
          <h3>
            Checkout our daily deals <span>Click hear</span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StoreProduct;
