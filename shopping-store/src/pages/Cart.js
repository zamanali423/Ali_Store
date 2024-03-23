import {
  faHeart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dummy from "../assets/images/dummy.jpeg";
import { ContextApi } from "../context/ContextApi";
import { addtoCart, delProduct } from "../redux/cartSlice";
let pp=0;

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState({});
  const { totalItems, settotalItems } = useContext(ContextApi);
  const dispatch = useDispatch();

  // Function to handle incrementing quantity for a product
  const handleIncrement = (index) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [index]: (prevQuantity[index] || 1) + 1,
    }));
    settotalItems(totalItems + 1);
  };

  // Function to handle decrementing quantity for a product
  const handleDecrement = (index) => {
    if (quantity[index] > 0) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [index]: (prevQuantity[index] || 1) - 1,
      }));
    }
    if (totalItems > 0) {
      settotalItems(totalItems - 1);
    }
  };
  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">
                    Cart - {cartProduct.length + totalItems} items
                  </h5>
                </div>
                {cartProduct.map((items, index) => {
                  return (
                    <div className="card-body" key={index}>
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={items.images}
                              className="w-100"
                              alt="Blue Jeans Jacket"
                              onError={(e) => {
                                if (e.target.src !== items.images) {
                                  e.target.onerror = null;
                                  e.target.src = dummy;
                                }
                              }}
                            />
                            <Link href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </Link>
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{items.title}</strong>
                          </p>
                          <p>Color: blue</p>
                          <p>Size: M</p>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => {
                              dispatch(delProduct(items));
                              if (cartProduct.length == 0) {
                                settotalItems(0);
                              }
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm mb-2"
                            data-mdb-toggle="tooltip"
                            title="Move to the wish list"
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2"
                              onClick={() => handleDecrement(index)}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <h3 className="form-outline">
                              {quantity[index] || 1}
                            </h3>

                            <button
                              className="btn btn-primary px-3 ms-2"
                              onClick={() => handleIncrement(index)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>${items.price}</strong>
                          </p>
                        </div>
                      </div>

                      <hr className="my-4" />
                    </div>
                  );
                })}
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                            <strong>
                              $
                        {cartProduct.map((item, i) => {
                          return (
                              <>{Math.floor(pp+= ((item.price * 50) / 100))}</>
                          );
                        })}
                            </strong>
                      </span>
                    </li>
                  </ul>

                  <Link
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    to={"/order"}
                  >
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
