import React from "react";
import { useSelector } from "react-redux";
import './navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/fontawesome-free-solid'


const Navbar = () => {
    const {productIds} = useSelector((state) => state.cart)
    return (
        <div id="navbar" className="nav-flex ">          
                <div className="nav-left navbar-items"> 
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Apparels</li>
                        <li>Accessories</li>
                        <li>
                            Sale
                        </li>
                    </ul>            
                </div>
                <div className="nav-fill navbar-items">  </div>
                <div className="nav-right navbar-items">
                    <ul >
                        <li>                        
                            <FontAwesomeIcon icon={faUser} className="icon"/>                         
                            My Account
                        </li>
                        <li>
                            Orders
                        </li>
                        <li>
                        ({productIds.length})                                                               
                        <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                        </li>
                    </ul>                                                  
                </div>            
        </div>
    )
}

export default Navbar;