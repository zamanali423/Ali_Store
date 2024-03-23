import { useEffect, useState } from "react";
import { ContextApi } from "./ContextApi";
import { useSelector } from "react-redux";

export const AppProvider = ({ children }) => {
  const cartProduct = useSelector((state) => state.cart);
  const [allProducts, setallProducts] = useState([]);
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [totalItems, settotalItems] = useState(0);

  const isLogin = !!token;

  const LogoutFunction = () => {
    settoken("");
    return localStorage.removeItem("token");
  };
  const authenticationUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/getUser", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const products = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    setallProducts(data);
  };

  useEffect(() => {
    products();
    authenticationUser();
  }, []);

  return (
    <ContextApi.Provider
      value={{ allProducts, isLogin, settoken, token, user,LogoutFunction,totalItems,settotalItems }}
    >
      {children}
    </ContextApi.Provider>
  );
};
