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
import Error from "./pages/Error";
import ProductsItemSingle from "./pages/ProductsItemSingle";
import PostReports from "./pages/PostReports";
import NpmSlider from "./pages/NpmSlider";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AnimatedCursor from "react-animated-cursor";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={8}
        outerSize={36}
        color="69, 69, 69"
        outerAlpha={0}
        innerScale={2}
        outerScale={1.5}
        trailingSpeed={5}
        outerStyle={{
          border: "2px solid #454545",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signIn/signup" element={<SignUp />} />
        <Route path="signout" element={<SignIn />} />
        <Route path="*" element={<Error />} />
        <Route
          path="dashboard/*"
          element={
            <PrivateRouter>
              <Header />
              <div className="container-fluid">
                <div className="row">
                  <SideNav />
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="usestate" element={<UseState />} />
                    <Route path="useeffect" element={<UseEffect />} />
                    <Route path="arrays" element={<Arrays />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:productId" element={<ProductsItemSingle />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="postreports" element={<PostReports />} />
                    <Route path="integrations" element={<Integrations />} />
                    <Route path="npmslider" element={<NpmSlider />} />
                    <Route path="*" element={<Error />} />
                  </Routes>
                </div>
              </div>
              <Footer />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
