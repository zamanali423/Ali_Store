import React, { useEffect, useState } from "react";
import Card from "./Card";

const FeaturedProducts = () => {
  const [products, setproducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=9");
    const data = await response.json();
    setproducts(data);
  };

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <div className="container my-4">
      <h1 className="text-center">Featured Products</h1>
      <Card products={products}/>
    </div>
  );
};

export default FeaturedProducts;
