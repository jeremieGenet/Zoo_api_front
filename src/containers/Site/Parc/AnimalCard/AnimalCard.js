import React from 'react'
import Button from '../../../../components/UI/Buttons/Button'

import './AnimalCard.css'

function AnimalCard({animal, filterFamily, filterContinent}) {

    //console.log(animal)
    return (
        <div>
            {/*
            {JSON.stringify(props)}
            */}
    
            <div className="">
                <h3 className="card-header text-center bg-dark">{animal.id} - {animal.name}</h3>
                <div className="card-body d-flex justify-content-center">
                    {/* BOUTON DE FILTRE DES FAMILLES (des animaux) */}
                    <Button 
                        typeBtn="btn-outline-secondary btn-sm"
                        click={() => filterFamily(animal.family.id)} // Fonction anonyme pour ne lancer "filterFamily()" que lors du click (et non lors de chaque rendu)
                    >
                        <strong>Famille : </strong>{animal.family.name.toUpperCase()}
                    </Button>
                </div>
                <p className="card-subtitle text-muted text-center pb-3">{animal.family.description}</p>

                <img src={animal.picture_small} alt={animal.name} className="img-fluid card__image w-100 rounded"/>

                <div className="card-body">
                    <p className="card-text">{animal.description}</p>
                </div>
                
                <div className="card-body">
                    <p>Continent(s) :</p>
                    
                    <div className="card-footer text-muted">
                        {/* Boucle de l'ensemble des continents présents pour l'animal */}
                        {animal.continents.map(continent => {

                            // Gestion de la couleur de composant <Button> pour lui donner une couleur différente pour chacun des Id des continents
                            let colorBtn="";
                            switch(continent.id){
                                case "1": colorBtn="btn-outline-primary"
                                break;
                                case "2": colorBtn="btn-outline-warning"
                                break;
                                case "3": colorBtn="btn-outline-info"
                                break;
                                case "4": colorBtn="btn-outline-danger"
                                break;
                                case "5": colorBtn="btn-outline-success"
                                break;
                                default: colorBtn="btn-outline-secondary"
                            }

                            return (
                                // BOUTON DE FILTRE DES CONTINENTS (des animaux)
                                <Button 
                                    typeBtn="btn-outline-secondary m-1" 
                                    css={colorBtn}  
                                    key={continent.id}
                                    click={() => filterContinent(continent.id)} // Fonction anonyme pour ne lancer "filterContinent()" que lors du click (et non lors de chaque rendu)
                                >
                                    {continent.name} 
                                </Button>
                            )       
                        })}
                    </div>

                </div>
            </div>
            
            
        </div>
    )
}

export default AnimalCard
