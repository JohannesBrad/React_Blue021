import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'

const Navbar = (props) => {


    const cerrarSesion = () => {
        console.log('cerrar');
        auth.signOut()
        .then( () => {
            props.history.push('/login')
        })
    }
    return (
        // Dentro del navBar solo estamos usando los Link y Link y en App.js usamos el Router, Switch y Route
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <Link to="/" className="nav-link text-white" >App Authentication</Link>  
                    <div className="d-flex">
                        <NavLink to="/" className="nav-link btn btn-primary mx-1" >
                            Home
                        </NavLink>
                           {
                                props.firebaseUser !== null ? (
                                    <NavLink to="/admin" className="nav-link btn btn-primary mx-1" activeclassname="active">
                                        Admin
                                    </NavLink>
                                ):(
                                    null
                                )
                           } 

                        {
                            props.firebaseUser !== null ? (
                                <button 
                                className="btn btn-danger"
                                onClick={ (e) => cerrarSesion()}
                                >Cerrar Sesion</button>                                        
                            ):
                        <NavLink to="/login" className="nav-link btn btn-primary mx-1" >
                            Login
                        </NavLink>
             
                        }
   
                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter (Navbar)
