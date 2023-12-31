import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Currency from '../../util/currency';
import cartSlice from '../../cart/cartSlice';
import { fetchAllProducts } from '../productsSlice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'

import './productsListing.css';
const ProductsListing = () => { 
  const {addToCart, removeFromCart} = cartSlice.actions
  const {products} = useSelector(state => state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts('http://localhost:3000/products'))
  },[])
   return (
    <div className='centered'>
      <section className='cards'>
      {products.data.map((product, index) =>   
        <div className='card'>
            <a href='#'>
              <div className='thumbnail'>
                <img src={product.img} className='product-image'/>
              </div>
              <div className='card-content'>
                <h2>{product.name}</h2>
                <p>{product.detail.split(/\s+/).slice(0, 10).join(" ")}...</p>
              </div>
              <div>
                <button>Add to Cart</button>
              </div>
            </a>
        </div>
        )}    
      </section>
    </div>
    // <div className="min-h-screen bg-gray-100 flex flex-wrap">
    //   {products.data.map((product, index) =>       
    //     <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer" key={index}>
    //       <div 
    //           className="overflow-x-hidden rounded-2xl relative"
              
    //         >
    //         <img className="h-40 rounded-2xl w-full object-cover" src={product.img}/>
    //         <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"
    //         onClick={() => dispatch(addToCart(product.id))}
    //         >
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    //           </svg>
    //         </p>
    //         <p className="absolute right-2 top-12 bg-white rounded-full p-2 cursor-pointer group"
    //         onClick={() => dispatch(removeFromCart(product.id))}
    //         >
    //           <FontAwesomeIcon icon={faShoppingCart} />

    //         </p>
    //       </div>
    //       <div className="mt-4 pl-2 mb-2 flex justify-between ">
    //         <div>
    //           <p className="text-lg font-semibold text-gray-900 mb-0">{product.name}</p>
    //           <p className="text-md text-gray-800 mt-0">{Currency.format(product.price)}</p>
    //         </div>
    //         <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   )}         
    // </div>
   )
}


export default ProductsListing