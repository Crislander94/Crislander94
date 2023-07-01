import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from './components/common/Header';
import Main from './components/common/Main';
import Footer from './components/common/Footer';
const  App = () => {
  return (
    <BrowserRouter>
        <Header></Header>
        <Main />
        <Footer />
    </BrowserRouter>
  );
}

export default App;