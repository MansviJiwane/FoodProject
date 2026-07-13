import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { toast } from "react-toastify";


import {
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";

<Link to="/offers">Offers</Link>




import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const { user, loading } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    setMenuOpen(false);
  };

  return (
    <header className="header">

      <nav className="navbar">

        {/* Logo */}
    <div className="logo-section">
  <Link to="/" className="logo-text">

    <span className="logo-icon">🍴</span>

    <div className="logo-content">
      <h2>Order It</h2>
      
    </div>

  </Link>
</div>
        {/* Mobile Menu */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}

        <div
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >
          <Link
  to="/"
  onClick={() => setMenuOpen(false)}
>
  Home
</Link>

<a
  href="#restaurants"
  onClick={() => setMenuOpen(false)}
>
  Restaurants
</a>

<Link
  to="/offers"
  onClick={() => setMenuOpen(false)}
>
  Offers
</Link>

<Link
  to="/about"
  onClick={() => setMenuOpen(false)}
>
  About Us
</Link>
  

<Link
  to="/contact"
  onClick={() => setMenuOpen(false)}
>
  Contact
</Link>
</div>

        

        {/* Right */}

        <div className="header-right">

          <div className="location-pill">
            <FaMapMarkerAlt />
            <span>India</span>
          </div>

          <Link
            to="/cart"
            className="cart-btn"
          >
            <FaShoppingCart />

            Cart

            <span className="cart-count">
              {cartItems.length}
            </span>

          </Link>

          {user ? (

            <div className="profile-dropdown">

              <button className="profile-btn">

                <img
                  src={user?.avatar?.url}
                  alt={user?.name}
                  className="avatar-nav"
                />

                <span>{user?.name}</span>

              </button>

              <div className="dropdown-menu-custom">

                <Link to="/users/me">
                  My Profile
                </Link>

                <Link to="/eats/orders/me/myOrders">
                  My Orders
                </Link>

                <button onClick={logoutHandler}>
                  Logout
                </button>

              </div>

            </div>

          ) : (

            !loading && (

              <Link
                to="/users/login"
                className="login-btn"
              >
                <FaUserCircle />
                Login
              </Link>

            )

          )}
        

        </div>

      </nav>

    </header>
  );
};

export default Header;