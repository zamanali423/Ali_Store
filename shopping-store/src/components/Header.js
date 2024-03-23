import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLogin, user, totalItems } = useContext(ContextApi);
  const total = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Your Logo" width="150" height="50" />
          </Link>

          {/* Collapse button for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible navigation content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Add custom navigation links here (if needed) */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              {/* ... (add more links as needed) */}
            </ul>

            {/* Login, Signup, and Cart buttons */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isLogin ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link className="nav-link" to="/cart">
                      <FontAwesomeIcon
                        style={{ fontSize: "larger" }}
                        icon={faCartShopping}
                      />
                      <span
                        className="position-absolute translate-middle badge rounded-pill bg-danger"
                        style={{ top: "28%", right: "6%" }}
                      >
                        {total.length + totalItems}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {isLogin && user && (
              <div className="rounded-circle nameLogo">
                {user.name.slice(0, 1).toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
