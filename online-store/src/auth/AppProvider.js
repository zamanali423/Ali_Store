import React, { useEffect, useState } from "react";
import { CreateContext } from "./context/CreateContext";

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [products, setProducts] = useState([]);

  let isLogin = !!token;
  const LogoutFunction = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const authenticationUser = async () => {
    try {
      const res = await fetch(
        "http://localhost:3002/authentication/user/getUser",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=21");
    const data = await res.json();
    console.log(data.products);
    setProducts(data.products);
  };

  useEffect(() => {
    authenticationUser();
    getProducts();
  }, []);
  return (
    <CreateContext.Provider
      value={{ LogoutFunction, isLogin, user, setToken, token, products }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default AppProvider;
