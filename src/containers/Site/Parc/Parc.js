import React, { Component } from 'react'
import TitreH1 from '../../../components/UI/Titres/TitreH1'
import Button from '../../../components/UI/Buttons/Button'
import AnimalCard from './AnimalCard/AnimalCard'
import axios from "axios"

import './Parc.css'

class Parc extends Component {

    // Propriété qui permet de supprimer la Notice WARNING DE LA CONSOLE: Can't perform a React state update on an unmounted component. 
    // This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    _isMounted = false; 

    state = {
        animals : [],           // Ensemble des animaux reçus par notre API (en fonction des requêtes)
        filterFamily: null,     // Filtre des familles des animaux
        filterContinent: null,  // Filtre des Continent des animaux
        listeFamilies: null,     // Liste des famille (affichage des familles dans la liste déroulante)
        listeContinents: null    // Liste des continent (affichage de continent dans la liste déroulante)
    }

    loadDataAnimals = () => {

        // Si "filterFamily" existe (n'est pas null) on retourne "filterFamily" Sinon on retourne -1 (-1 est le param par défaut et signifie qu'on récup toutes les familles)
        const family = this.state.filterFamily ? this.state.filterFamily : "-1"
        // Si "filterContinent" existe (n'est pas null) on retourne "filterContinent" Sinon on retourne -1 (-1 est le param par défaut et signifie qu'on récup toutes les continents)
        const continent = this.state.filterContinent ? this.state.filterContinent : "-1"

        // Récup des animaux sous forme de JSON de notre API ()
        //axios.get('http://localhost/animal-Project/animal-back-php/front/animals/' + family + '/' + continent)
        axios.get(`http://localhost/animal-Project/animal-back-php/front/animals/${family}/${continent}`) // Concaténation avec le backtick
        .then(res => {
            // CONDITION QUI EVITE LE WARNING DE LA CONSOLE: Can't perform a React state update...
            if (this._isMounted) {
                this.setState({animals:Object.values(res.data)}) // Object.values() => Transforme sous forme d'objet les données reçues (facilite le parcours des données)
            }
        })
    }

    
    
    // A la création du composant...
    componentDidMount = () => {
        // Modification du title de la page
        document.title = "Nos animaux"

        // PROPRIETE QUI EVITE LE WARNING DE LA CONSOLE: Can't perform a React state update...
        this._isMounted = true;

        // Récup des familles sous forme de JSON de notre API ()
        axios.get(`http://localhost/animal-Project/animal-back-php/front/families`)
        .then(res => {
            // CONDITION QUI EVITE LE WARNING DE LA CONSOLE: Can't perform a React state update...
            if (this._isMounted) {
                this.setState({listeFamilies:Object.values(res.data)})
            }
        })
        // Récup des continents sous forme de JSON de notre API ()
        axios.get(`http://localhost/animal-Project/animal-back-php/front/continents`)
        .then(res => {
            // CONDITION QUI EVITE LE WARNING DE LA CONSOLE: Can't perform a React state update...
            if (this._isMounted) {
                this.setState({listeContinents:Object.values(res.data)})
            }
        })
        
        // Chargement des données des Animaux
        this.loadDataAnimals()
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    // Force l'update du composant (en argument les données avant update)
    componentDidUpdate = (oldProps, oldState) => {
        // On s'assure que "filterFamily" ou "filterContinent" ont bien été modifiés avant de recharger recharger les données (this.loadDataAnimals)
        if(oldState.filterFamily !== this.statefilterFamily || oldState.filterContinent !== this.state.filterContinent){
            this.loadDataAnimals() 
        }
    }

    // Gestion du filtre des Familles
    handleSectionFamily = (family_id) => {
        //console.log("Demande de " + family_id)
        if(family_id === "-1"){
            this.handleResetFilterFamily()
        }else{
            this.setState({filterFamily: family_id})
        }
        
    }
    // Gestion du filtre des Continents
    handleSelectionContinent = (continent_id) => {
        //console.log("Demande de l'id de continent n° = " + continent_id)
        if(continent_id === "-1"){
            this.handleResetFilterContinent()
        }else{
            this.setState({filterContinent: continent_id})
        }
    }


    // Gestion de la suppression du filtre des Familles
    handleResetFilterFamily = () => {
        this.setState({filterFamily: null}) // On remet le filtre à null (ce qui le fait disparaitre)
    }
    // Gestion de la suppression du filtre des Continenet
    handleResetFilterContinent = () => {
        this.setState({filterContinent: null}) // On remet le filtre à null (ce qui le fait disparaitre)
    }

    render(){
        // Logique d'affichage du nom de la famille dans le bouton de suppression du filtre des familles
        let nameFamilyFilter = ""
        if(this.state.filterFamily){
            const numCaseFamilyFilter = this.state.listeFamilies.findIndex(family => {
                // On retourne l'index de la famille qui correspond à celui de filterFamily
                return family.family_id === this.state.filterFamily
            })
            // Récup du nom de la famille
            nameFamilyFilter = this.state.listeFamilies[numCaseFamilyFilter].family_name
        }

        // Logique d'affichage du nom du continent dans le bouton de suppression du filtre des continents
        let nameContinentFilter = ""
        if(this.state.filterContinent){
            const numCaseContinentFilter = this.state.listeContinents.findIndex(continent => {
                // On retourne l'index du continent qui correspond à celui de filterContinent
                return continent.continent_id === this.state.filterContinent
            })
            // Récup du nom du continent
            nameContinentFilter = this.state.listeContinents[numCaseContinentFilter].continent_name
        }

        //console.log(this.state.animals) // Affiche la liste des animaux (de la requête)
        return (
            <>
                <TitreH1>Les animaux du parc</TitreH1>

                <div className="container-fluid">
                <span><strong>Filtres : </strong></span>

                    <div className="row">

                        <div className="col-md-2">
    
                            <select className="form-control mb-1" onChange={(event) => this.handleSectionFamily(event.target.value)}>
                                <option value="-1" defaultValue={this.state.filterFamily === null && "selected"} >Famille</option>
                                {
                                    this.state.listeFamilies &&
                                    this.state.listeFamilies.map(family => {
                                        return <option 
                                            value={family.family_id}
                                            defaultValue={this.state.filterFamily === family.family_id && "selected"}
                                            key={family.family_id}
                                        >
                                            {family.family_name}
                                        </option>
                                    })

                                }
                            </select>

                            <select className="form-control mb-2" onChange={(event) => this.handleSelectionContinent(event.target.value)}>
                                <option value="-1" defaultValue={this.state.filterContinent === null && "selected"} >Continents</option>
                                {
                                    this.state.listeContinents &&
                                    this.state.listeContinents.map(continent => {
                                        return <option 
                                            value={continent.continent_id}
                                            defaultValue={this.state.filterContinent === continent.continent_id && "selected"}
                                            key={continent.continent_id}
                                        >
                                            {continent.continent_name}
                                        </option>
                                    })

                                }
                            </select>

                        </div>

                        <div className="col-md-2">

                        

                            {/* GESTION DES BOUTONS DE SUPPRESSION DES FILTRES DES ANIMAUX (fitre familles et filtre continent) */}
                            {
                                // CONDITION 1 (si la condition vaut true, l’élément juste après && sera affiché)
                                // Si il y a un filtre de famille, on affiche alors le bouton avec la croix ()
                                this.state.filterFamily &&
                                <div className="mb-1">
                                <Button
                                    typeBtn="btn-secondary"
                                    click={this.handleResetFilterFamily}
                                >
                                    {/* ICON "Croix" (bootstrap) */}
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
                                    </svg>
                                    {/* NOM DE LA FAMILLE */}
                                    {nameFamilyFilter} &nbsp;
                                    
                                </Button>
                                </div>
                            }
                            {
                                // CONDITION 2 (si la condition vaut true, l’élément juste après && sera affiché)
                                // Si il y a un filtre de Continent, on affiche alors le bouton avec la croix
                                this.state.filterContinent &&
                                <Button
                                    typeBtn="btn-secondary"
                                    click={this.handleResetFilterContinent}
                                >
                                    {/* ICON "Croix" (bootstrap) */}
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
                                    </svg>
                                    {/* NOM DU CONTINENT */}
                                    {nameContinentFilter} &nbsp;

                                </Button>
                            }

                        </div> 

                    </div>   

                    <div className="container-fluid">
                        <div className="row">
                            {/* Boucle sur l'ensemble de "animals" */}
                            {this.state.animals.map(animal => {
                                return (
                                    <div className="col-md-4 card mb-2 pt-3" key={animal.id}>
                                        {/* On passe dans "AnimalCard" la propriété (props) "animal" qui représente un animal (id, name, description, famille...) */}
                                        <AnimalCard 
                                            animal={animal} 
                                            filterFamily={this.handleSectionFamily} 
                                            filterContinent={this.handleSelectionContinent}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                            
                </div>
            </>
        )
    }
    
}

export default Parc
