import React from 'react'

import facebook from "../../assets/images/reseau-social/fb.png"
import twitter from "../../assets/images/reseau-social/twitter.png"
import youtube from "../../assets/images/reseau-social/youtube.png"

import './Footer.css'

import {NavLink} from "react-router-dom" // Pour le lien de mentions légales


function Footer() {
    return (
        <>
            {/* "mt-auto permet de caller le footer en bas de l'écran (il faut 'h-100' sur le body et le html */}
            <footer className="text-center mt-auto pb-3 bg-primary">
                <div className="text-dark text-center py-2">
                    <h5>MyZoo - Tout droits réservés</h5>
                </div>
                <div className="row no-gutters align-items-center text-center pt-1">
                    <div className="col-3">
                        <a href="www...." className="d-block" target="_blank">
                            <img src={facebook} alt='facebook' className="imgFB"/>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="www...." className="d-block" target="_blank">
                            <img src={twitter} alt='facebook' className="imgTwitter"/>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="www...." className="d-block" target="_blank">
                            <img src={youtube} alt='facebook' className="imgYoutube"/>
                        </a>
                    </div>
                    <div className="col-3">
                        <NavLink to="/mentionLegales" className="nav-link link p-0 m-0">
                            Mentions légales
                        </NavLink>
                        <a href="mailto:contact@myzoo.com" className="nav-link link p-0 m-0">
                            contact@myzoo.com
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
