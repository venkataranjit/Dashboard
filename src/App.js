import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";
import Signout from "./pages/Signout";
import Error from "./pages/Error";
import ProductsItemSingle from "./pages/ProductsItemSingle";
import PostReports from "./pages/PostReports";

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
