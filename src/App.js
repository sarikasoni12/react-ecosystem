import React from 'react';
import './App.css';
import ProductsListing from './products/components/ProductsListing';
import Navbar from './navbar/Navbar';

export default function App(){
   return (
     <div className='App'>        
        <Navbar />
        <div id="content">
            <ProductsListing />
        </div>
    </div>
   )
}
