import React from 'react';
import { Route, Routes}   from "react-router-dom";
import styled from 'styled-components';
import ListProducts from '../Product/ListProducts';
import AddProduct from '../Product/form/AddProduct';
import AddSale from '../Sale/form/AddSale';
import InputAdornments from './InputAdornments';
import { ListSale } from '../Sale/ListSale';


const Main = () => {
    return(
      <ContenedorMain>
        <Routes>
          <Route path="/" exact={true} element={ <ListProducts />}>Home</Route>
          <Route path="/addProduct" element={<AddProduct />}>Add Product</Route>
          <Route path="/addSale" element={<AddSale />}>Add Sell</Route>
          <Route path="/sale" element={<ListSale />}>List Sell</Route>
          <Route path="/example" element={<InputAdornments />}>Input adornements</Route>
          <Route element={<>Page Not Found.</>} />
        </Routes>
      </ContenedorMain>
    )
}

const ContenedorMain = styled.main`
  padding: 40px;
  background-color: #f2f2f2;
`;
export default Main;