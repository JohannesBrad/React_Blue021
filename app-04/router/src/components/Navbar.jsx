
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const Navbar = () => {
    return <>
    <Router>
        <nav className="navbar navbar-expand-lg navbar-secondary bg-light">
            <div className="container">
            <a className="navbar-brand" href="/">Router </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">                        
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="active" aria-current="page">Home</NavLink>                        
                    </li>
                    <li className="nav-item">                        
                        <Link to="/about" className="nav-link " aria-current="page">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link " aria-current="page">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link " aria-current="page">Contact</Link>
                    </li>
                </ul>                                  
            </div>
        </div>
        </nav>

        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>   
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/services">
                <Services/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            {/* <Route path="/services" component={Services}/> */}
                         
        </Switch>

    </Router>

</>
}

export default Navbar
