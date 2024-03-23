import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import AllProducts from './pages/AllProducts';
import { AppProvider } from './context/AppProvider';
import Logout from './pages/Logout';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Order from './pages/Order';

const App = () => {
  
  return (
    <div>
    <AppProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:title' element={<SingleProduct/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </BrowserRouter>
    </AppProvider>
    
    </div>
  )
}

export default App
