import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { CreateContext } from "../auth/context/CreateContext";

const Navbar = () => {
  const { isLogin } = useContext(CreateContext);
  const { user } = useContext(CreateContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Ali Store
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-3" type="submit">
                Search
              </button>
            </form>

            {isLogin ? (
              <>
                <Link className="btn btn-primary" to={"/logout"}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="btn btn-primary" to={"/login"}>
                  Login
                </Link>
                <Link className="btn btn-primary mx-3" to={"/register"}>
                  Signup
                </Link>
              </>
            )}
            <Link className="display-6 text-success position-relative">
              <FontAwesomeIcon icon={faCartPlus} />
              <span className="zero position-absolute translate-middle badge rounded-pill bg-danger">
                0<span className="visually-hidden">unread messages</span>
              </span>
            </Link>
            <h4>{user.username}</h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
