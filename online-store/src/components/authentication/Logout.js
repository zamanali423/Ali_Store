import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { CreateContext } from "../../auth/context/CreateContext";

const Logout = () => {
  const { LogoutFunction } = useContext(CreateContext);
  useEffect(() => {
    LogoutFunction();
  }, [LogoutFunction]);
  return <Navigate to={"/login"} />;
};

export default Logout;
