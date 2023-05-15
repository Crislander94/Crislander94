import React from 'react';
import { Route, Routes}   from "react-router-dom";
import ListProducts from '../ListProducts';
import AddProduct from '../forms/product/AddProduct';
import AddSell from '../forms/sell/AddSell';
import styled from 'styled-components';
import InputAdornments from '../forms/InputAdornments';
const Main = () => {
    return(
      <ContenedorMain>
        <Routes>
          <Route path="/" exact={true} element={ <ListProducts />}>Home</Route>
          <Route path="/addProduct" element={<AddProduct />}>Add Product</Route>
          <Route path="/addSell" element={<AddSell />}>Add Sell</Route>
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