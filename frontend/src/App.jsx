import React, { useEffect } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./redux/store";
import { loadUser } from "./redux/actions/userActions";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./components/Home";
import Offers from "./components/Home/Offers";
import Menu from "./components/Menu";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";

import Cart from "./components/cart/Cart";

import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";
import AboutUs from "./components/Home/AboutUs";
import Contact from "./components/Home/Contact";


function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />


      <Router>

        <div className="App">


          <Header />


          <Routes>


            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />


            <Route
              path="/restaurants"
              element={<Home />}
            />


            <Route
              path="/eats/stores/search/:keyword"
              element={<Home />}
            />



            {/* Offers */}
            <Route
              path="/offers"
              element={<Offers />}
            />



            {/* Static Pages */}
            <Route
              path="/about"
              element={<AboutUs />}
            />


            <Route
              path="/contact"
              element={<Contact />}
            />



            {/* Restaurant Menu */}
            <Route path="/eats/stores/:id" element={<Menu />} />

            {/* User */}
            <Route
              path="/users/login"
              element={<Login />}
            />


            <Route
              path="/users/signup"
              element={<Register />}
            />


            <Route
              path="/users/me"
              element={<Profile />}
            />


            <Route
              path="/users/me/update"
              element={<UpdateProfile />}
            />



            {/* Cart */}
            <Route
              path="/cart"
              element={<Cart />}
            />



            {/* Orders */}
            <Route
              path="/success"
              element={<OrderSuccess />}
            />


            <Route
              path="/eats/orders/me/myOrders"
              element={<ListOrders />}
            />


            <Route
              path="/eats/orders/:id"
              element={<OrderDetails />}
            />


          </Routes>


          <Footer />


        </div>


      </Router>

    </>
  );
}


export default App;