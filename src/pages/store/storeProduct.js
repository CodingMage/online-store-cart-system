import { Add } from "@material-ui/icons";
import React from "react";
import { ReactComponent as Grey } from "../../svg/shirt.svg";
import Bag from "../../svg/bag.jpg";

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
            Checkout our daily deals <span>Click here</span>{" "}
          </h3>
        </div>
      </div>

      <div className="productlist-container">
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  );
};

export default StoreProduct;

const ProductList = () => {
  return (
    <div className="productlist">
      <div className="productlist-img">
        <img src={Bag} alt="Bag" />
      </div>
      <div className="productlist-title ">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </div>
      <div className="productlist-footer">
        <div className="footer-price">$40</div>
        <div className="footer-add">
          <Add />
        </div>
      </div>
    </div>
  );
};
