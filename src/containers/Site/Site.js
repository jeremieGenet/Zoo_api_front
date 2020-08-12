import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Parc from './Parc/Parc'
import Navbar from '../../components/UI/Navbar/Navbar'
import Accueil from './Accueil/Accueil'
import Error from '../../components/Error/Error'
import Footer from '../../components/Footer/Footer'
import Contact from '../../containers/Site/Contact/Contact'

class Site extends Component{
    render(){
        return(
            <>
                <div className="site h-100">
                    <Navbar />

                    <Switch>
                        <Route path="/animals" exact render={() => <Parc />} />
                        <Route path="/contact" exact render={() => <Contact />} />
                        <Route path="/mentionLegales" exact render={() => <h1>Page des mentions légales</h1>} />
                        <Route path="/" exact render={() => <Accueil />} />
                        <Route render={()=><Error type="404">La page n'existe pas</Error>} />
                    </Switch>
                    <Footer />
                </div>
                
            </>
        )
    }
}

export default Site

