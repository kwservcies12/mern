import React from "react";
import "./navbar.css"
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
                    <img style={{"width" : 25 + '%'}} src="https://images.unsplash.com/photo-1585775636979-1b9dceaae8e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80"></img>
                    <h2>The Tool Shed</h2>                         
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"> 
                            <NavLink className="nav-link" to="/create">
                                <h1>Add Tool</h1>
                            </NavLink>
                         </li>
                        </ul>
                    </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
   </div>
 );
}