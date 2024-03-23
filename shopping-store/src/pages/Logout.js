import React, { useContext, useEffect } from 'react'
import { ContextApi } from '../context/ContextApi';
import { Navigate } from 'react-router';

const Logout = () => {
    const { LogoutFunction } = useContext(ContextApi);
    useEffect(() => {
      LogoutFunction();
    }, [LogoutFunction]);
    return <Navigate to={"/"} />;
}

export default Logout
