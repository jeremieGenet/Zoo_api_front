import React, { Component } from 'react'

import TitreH1 from '../../../components/UI/Titres/TitreH1'

import './Accueil.css'

// Images (basse résolution)
import baleine from '../../../../src/assets/images/animals/previews/baleine-640x426.jpg'
import boa from '../../../../src/assets/images/animals/previews/boa-640x426.jpg'
import girafe from '../../../../src/assets/images/animals/previews/girafe-640x426.jpg'
import lion from '../../../../src/assets/images/animals/previews/lion-640x426.jpg'
import ours from '../../../../src/assets/images/animals/previews/ours-640x426.jpg'
import piranha from '../../../../src/assets/images/animals/previews/piranha-640x426.jpg'
import python from '../../../../src/assets/images/animals/previews/python-640x426.jpg'
import requin from '../../../../src/assets/images/animals/previews/requin-640x426.jpg'
import singe from '../../../../src/assets/images/animals/previews/singe-640x426.jpg'
// Images (haute résolution)
import baleine_HD from '../../../../src/assets/images/animals/full/baleine-1920x1280.jpg'
import boa_HD from '../../../../src/assets/images/animals/full/boa-1920x1280.jpg'
import girafe_HD from '../../../../src/assets/images/animals/full/girafe-1920x1280.jpg'
import lion_HD from '../../../../src/assets/images/animals/full/lion-1920x1280.jpg'
import ours_HD from '../../../../src/assets/images/animals/full/ours-1920x1280.jpg'
import piranha_HD from '../../../../src/assets/images/animals/full/piranha-1920x1280.jpg'
import python_HD from '../../../../src/assets/images/animals/full/python-1920x1280.jpg'
import requin_HD from '../../../../src/assets/images/animals/full/requin-1920x1280.jpg'
import singe_HD from '../../../../src/assets/images/animals/full/singe-1920x1280.jpg'


class Accueil extends Component{

    // A la création du composant :
    componentDidMount = () => {

        // Modification du titre de notre page
        document.title = "Parc d'animaux MyZoo"

        // Ajout d'un script Javascript à notre composant (script Image-fluid-Modal-window)
        const script = document.createElement("script");
        script.src = "./js/accueil-img_modal.js";
        script.async = true;
        document.body.appendChild(script);
        console.log('test')
        console.log(script)
    }

    // A la suppression du composant :
    componentWillUnmount = () => {
        // SUPPRESSION DU SCRIPT () ajouté ci-dessus dans "componentDidMount()" (Sinon à chaque rechargement de la page le script est à nouveau ajouter)
        let scripts = document.getElementsByTagName("script");
        // Boucle sur l'ensemble des scripts
        for (let i = scripts.length; i>=0; i--){
            // Si il y a un script, qu'il a un attribut "src" différent de null, et que sa source correspond à "./js/accueil.js" alors...
            if (scripts[i] && scripts[i].getAttribute("src") !== null && scripts[i].getAttribute("src").indexOf(`${"./js/accueil-img_modal.js"}`) !== -1 ){
                // Suppression du script du dom
                scripts[i].parentNode.removeChild(scripts[i])
                //console.log(scripts)
            }    
        }
        //console.log('alors?')
    }


    render(){

        //console.log('render')

        return (
            <>
                <TitreH1 bgColor="">Visite de notre parc d'animaux MyZoo.</TitreH1>

                <div id="test"></div>

                <div className="gallery mb-4">
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={baleine}
                            alt="baleine"
                            data-original={baleine_HD}
                        />
                    </div>
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={boa}
                            alt="boa"
                            data-original={boa_HD}
                        />
                    </div>
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={girafe}
                            alt="girafe"
                            data-original={girafe_HD}
                        />
                    </div>
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={lion}
                            alt="lion"
                            data-original={lion_HD}
                        />
                    </div>
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={ours}
                            alt="ours"
                            data-original={ours_HD}
                        />
                    </div>
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={piranha}
                            alt="piranha"
                            data-original={piranha_HD}
                        />
                    </div>
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={python}
                            alt="python"
                            data-original={python_HD}
                        />
                    </div>
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={requin}
                            alt="requin"
                            data-original={requin_HD}
                        />
                    </div>
                    <div className="img-container">
                        <img
                            className="rounded"
                            src={singe}
                            alt="singe"
                            data-original={singe_HD}
                        />
                    </div>
                </div>

                <div className="modal_window">
                    <img 
                        src=''
                        alt='test'
                        className="full-img rounded"
                    />
                    <p className="caption"></p>

                </div>
        
            </>
        )
    }
}

export default Accueil
