import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const[state,dispach]=useContext(AuthContext)
  return (
    <div data-cy="navbar">

      <Link data-cy="navbar-home-link" to="/" ></Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}cart :0</span>
      <button data-cy="navbar-login-logout-button"  >Login</button>
    </div>
  );
};

export default Navbar;
