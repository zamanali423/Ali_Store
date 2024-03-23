import React, { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
import dummy from "../assets/images/dummy.jpeg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { addtoCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const AllProducts = () => {
  const { allProducts } = useContext(ContextApi);
  const dispatch=useDispatch()
  return (
    <div>
      <section className="product-container my-4">
        {allProducts?.map((items, index) => {
          return (
            <div className="product-card" key={index}>
              <div className="product-image-container">
                <Link to={`/products/${items.title}`}>
                  <img
                    src={items.images}
                    alt="Product Image"
                    onError={(e) => {
                      if (e.target.src !== items.images) {
                        e.target.onerror = null;
                        e.target.src = dummy;
                      }
                    }}
                  />
                </Link>
                <div className="overlay mt-2">
                  <button
                    className="btn btn-primary"
                    to="/cart"
                    onClick={() => dispatch(addtoCart(items))}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3>{items.title.slice(0, 18)}...</h3>
                <p>{items.description.slice(0, 90)}...</p>
                <div className="price-rating">
                  <span className="price">${items.price}</span>
                  <span className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <i className="fas fa-star-half-alt"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllProducts;
