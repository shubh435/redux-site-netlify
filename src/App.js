import React from "react";
import Header from "./containers/components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./containers/components/ProductList";
import ProductDetail from "./containers/components/ProductDetail";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ProductList />} /> 
        <Route exact path="/product/:productID" element={<ProductDetail />} /> 
        <Route exact path="/" element={"404 Not Found"} /> 
      </Routes>
    </Router>
  );
}

export default App;
