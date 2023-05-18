import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


import cartIcon from "../../assets/icon-cart.svg";
import logo from '../../assets/logo.svg';

import Cart from '../Cart'

import "./styles.css";


export default function Header() {

  const [cartIsOpen, setCartIsOpen] = useState(false)
  const cart = useSelector((state) => state.cart);

  

  return (
    <div className="headerContainer">
      <div className="navBar">
        <img src={logo} alt="Logo de Kasa" />
        <nav>
          <NavLink to="/">Collections</NavLink>
          <NavLink to="/">Men</NavLink>
          <NavLink to="/">Women</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </nav>
      </div>

      <div className="headerSection">
        <button onClick={() => setCartIsOpen(!cartIsOpen)}>
          <img src={cartIcon} alt="" />
          {cart.length ? (
            <span className="cartQuantity">{cart.length}</span>
          ) : (
            ""
          )}
        </button>
        <img
          src={`${import.meta.env.VITE_API_HOST}/mock/image-avatar.png`}
          className="profilePic"
          alt=""
        />
        <div className="CartSection"></div>
      </div>
      {cartIsOpen ? <Cart /> : ""}
      
    </div>
  );
}
