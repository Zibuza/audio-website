import React, { createContext, lazy, useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import data from '../data.json';
// import { getAllProducts } from 'api';
// import { Loader } from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Category = lazy(() => import('../pages/category/Category'));



export const DataContext = createContext();

export const App = () => {
  const [products, setProducts] = useState([]);
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await getAllProducts();
  //       setData(response.data.products);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const productsFromStorage =
      JSON.parse(localStorage.getItem('products')) || [];
    setProducts(productsFromStorage);
  }, []);

  const refreshProducts = () => {
    const productsFromStorage =
      JSON.parse(localStorage.getItem('products')) || [];
    setProducts(productsFromStorage);
  };
  return (
    <DataContext.Provider value={{ data, products, refreshProducts }}>
      {/* {isLoading && <Loader />} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </DataContext.Provider>
  );
};
