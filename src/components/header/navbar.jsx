import React from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./snav.css"

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
    <nav>
        <Link to="/" className="title">FoodMarket</Link> 
        <div className="menu" 
        onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>  
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/products">Produtos</NavLink>
            </li>
            <li>
                <NavLink to="/addproduct">Venda</NavLink>
            </li>
            <li>
                <NavLink to="/contract">Contato</NavLink>
            </li>
            <li className="login">
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Perfil</NavLink>
            </li>
        </ul>
        <Link to="/cart" className="cart"><AiOutlineShoppingCart size={30}/></Link>

    </nav>
    )
}