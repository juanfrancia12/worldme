import React from "react";
import Home from "modules/home";
import { useProducts } from 'common/hooks/useProducts';

const Index = () => {
  const { products } = useProducts()
  console.log('index arreglado', products);
  return <Home />;
};

export default Index;
