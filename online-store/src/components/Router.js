import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CreateProduct from "./CreateProduct";
import GetProducts from "./GetProducts";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Logout from "./authentication/Logout";
import Contact from "./Contact";
import Contacts from "./admin panel/Contacts";
import ErrorPage from "./ErrorPage";
import Dashboard from "./admin panel/Dashboard";
import Admin from "./admin panel/Admin";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<GetProducts />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin" element={<Dashboard />}>
            <Route exact path="users" element={<Admin />} />
            <Route exact path="contacts" element={<Contacts />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
