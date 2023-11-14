import React from "react";
import { useSelector } from "react-redux";
import './navbar.css';

const Navbar = () => {
    const {productIds} = useSelector((state) => state.cart)
    return (
        <div id="navbar" className="nav-flex ">
            <div id="nav-belt">    
                <div className="nav-left">  </div>
                <div className="nav-fill">  </div>
                <div className="nav-right"> 
                    <div id="nav-cart">
                        <div id="nav-cart-count-container">
                            <span id="nav-cart-count" aria-hidden="true" className="nav-cart-count nav-cart-1 nav-progressive-attribute nav-progressive-content">
                                {productIds.length}
                            </span>
                            <span className="nav-cart-icon nav-sprite"></span>
                        </div>
                        <div id="nav-cart-text-container" className=" nav-progressive-attribute">
                            <span aria-hidden="true" className="nav-line-1">
                                
                            </span>
                            <span aria-hidden="true" className="nav-line-2">
                                Cart
                                <span className="nav-icon nav-arrow"></span>
                            </span>
                        </div>
                    </div>                                     
                </div>
            </div>
        </div>
    )
}

export default Navbar;