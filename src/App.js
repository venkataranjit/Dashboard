import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Products from './components/Products';
import Customers from './components/Customers';
import Reports from './components/Reports'; 
import Integrations from './components/Integrations';
import Signout from './components/Signout';
import Error from './components/Error';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header />
          <div className='container-fluid'>
            <div className='row'>
              <SideNav />
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/Orders' element={<Orders />} />
                  <Route path='/Products' element={<Products />} />  
                  <Route path='/Customers' element={<Customers />} />
                  <Route path='/Reports' element={<Reports />} />
                  <Route path='/Integrations' element={<Integrations />} />
                  <Route path='/Signout' element={<Signout />} />
                  <Route path='*' element={<Error />} />
                </Routes>
            </div>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
