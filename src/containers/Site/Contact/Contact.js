import React, {Component} from 'react'
import axios from "axios"
import TitleH1 from '../../../components/UI/Titres/TitreH1'
import Formulaire from './Formulaire/Formulaire'


class Contact extends Component {
    componentDidMount = () => {
        // Modification du title de la page
        document.title = "Page de contact"
    }

    handleDataFormContact = (message) => {
        //console.log(message);
        axios.post("http://localhost/animal-Project/animal-back-php/front/dataFormContact", message)
        .then(res => {
            //console.log(res)  // Affiche les données envoyées en POST vers l'API (name, email, et message)
        })
        .catch(error => {

        })
    }

    render(){
        return (
            <>
                <TitleH1 bgColor="bg-dark">Contactez nous !</TitleH1>
                <div className="container">
                    <div className="text-center">
                        <h2>Adresse :</h2>
                        xxxxxxxxxxxxxxxxxxxxx
                        <h2>Téléphone :</h2>
                        00 00 00 00 00
                        <h4>Vous préfèrez de nous écrire ?</h4>
                    </div>
                    <Formulaire dataFormContact={this.handleDataFormContact}/>
                </div>
            </>
        )
    }
}

export default Contact
