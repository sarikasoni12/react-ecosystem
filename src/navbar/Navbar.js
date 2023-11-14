import React from "react";
import { useSelector } from "react-redux";
import './navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/fontawesome-free-solid'


const Navbar = () => {
    const {productIds} = useSelector((state) => state.cart)
    return (
        <div id="navbar">
            <section className="menu-section">                      
                    <div className="mixed-menu">
                        <nav className="multi-level-menu">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">New</a></li>
                                <li><a href="">Apparels</a></li>
                                <li><a href="">Accessories</a></li>
                            </ul>
                        </nav>
                        <nav className="social-menu">
                            <ul>
                                <li><FontAwesomeIcon icon={faUser} className="icon"/>  </li>
                                <li>Orders</li>
                                <li><FontAwesomeIcon icon={faShoppingCart} className="icon"/></li>
                            </ul>
                        </nav>
                    </div>        
            </section>
        </div>
    )
}

export default Navbar;