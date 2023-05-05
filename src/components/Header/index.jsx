import { NavLink } from "react-router-dom";

import logo from '../../assets/logo.svg';

import "./styles.css";

export default function Header() {
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
      {/* cart  */}
      <div className="Cart">

      </div>
    </div>
  );
}
