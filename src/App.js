import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import Arrays from "./pages/Arrays";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";
import Signout from "./pages/Signout";
import Error from "./pages/Error";
import ProductsItemSingle from "./pages/ProductsItemSingle";
import PostReports from "./pages/PostReports";
import NpmSlider from "./pages/NpmSlider";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="UseState" element={<UseState />} />
              <Route path="UseEffect" element={<UseEffect />} />
              <Route path="Arrays" element={<Arrays />} />
              <Route path="Orders" element={<Orders />} />
              <Route path="Products" element={<Products />} />
              <Route
                path="ProductsItemSingle"
                element={<ProductsItemSingle />}
              />
              <Route path="Customers" element={<Customers />} />
              <Route path="Reports" element={<Reports />} />
              <Route path="PostReports" element={<PostReports />} />
              <Route path="Integrations" element={<Integrations />} />
              <Route path="NpmSlider" element={<NpmSlider />} />
              <Route path="Signout" element={<Signout />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
