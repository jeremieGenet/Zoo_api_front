import React from 'react'
import { NavLink } from "react-router-dom"; // React-router
import logo from '../../../assets/images/logo-32x32.png'


const Navbar = (props) => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
            {/* LOGO (importé)*/}
            <img className="Navbar__logo" src={logo} alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    {/* Le composant "Navlink" permet la navigation sans temps de rechargement de la page, le "exact permet de mettre en surbrillance le lien" */}
                    <NavLink to="/" exact className="nav-link">Accueil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/animals" exact className="nav-link">Animaux</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact className="nav-link">Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav>

)

export default Navbar
