import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
import dummy from "../assets/images/dummy.jpeg";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const SingleProduct = () => {
  const { title } = useParams();
  const { allProducts } = useContext(ContextApi);
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="container">
        {allProducts.map((items, index) => {
          return title == items.title ? (
            <>
              <div className="product">
                <img
                  src={items.images}
                  alt="Loading..."
                  onError={(e) => {
                    if (e.target.src !== items.images) {
                      e.target.onError = null;
                      e.target.src = dummy;
                    }
                  }}
                />
                <div className="product-details">
                  <h2 className="product-title">{items.title}</h2>
                  <p className="product-description">{items.description}</p>
                  <p className="product-price">${(items.price * 50) / 100}</p>
                  <div className="product-actions">
                    <button
                      className="btn"
                      onClick={() => dispatch(addtoCart(items))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
