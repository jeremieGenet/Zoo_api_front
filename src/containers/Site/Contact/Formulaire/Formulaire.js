import React, { Component } from 'react'
//import ReactDOM from 'react-dom';
import './formulaire.css';
import { Field, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';


const CustomInput = ({ field, form, children, ...props }) => {
    return (
        <div className="form-group mb-1">
            <label className="mb-0" htmlFor={field.name}>{ children ? children : field.name }</label>
            <input { ...field } { ...props } className="form-control"/>
        </div>
    )
}

const CustomError = props => {
    return (
        <small className="text-danger">{ props.children }</small>
    )
}


class Formulaire extends Component {

    render() {

        const { handleSubmit } = { ...this.props }

        return(

            <div className="container p-5 bg-dark d-flex flex-column justify-centent-center align-items-center">
                <form onSubmit={ handleSubmit } className="contact__formulary bg-dark border p-5 d-flex flex-column">

                {/* CHAMP NAME + ERREUR */}
                <Field name="name" children="Nom" type="text" placeholder="Entrez votre nom" component={ CustomInput } />
                <ErrorMessage name="name" component={ CustomError } />

                {/* CHAMP EMAIL + ERREUR */}
                <Field name="email" type="email" children="Email" placeholder="Entrez votre adresse Email" component={ CustomInput } />
                <ErrorMessage name="email" component={ CustomError } /> 

                {/* CHAMP MESSAGE + ERREUR (méthode Vanilla, sans utilisé de composant Formik) */}
                <div className="form-group mb-1">
                    <label className="mb-0" htmlFor="message">Message :</label>
                    <textarea className="form-control" rows="4" placeholder="Entrez votre message ici..."
                        name="message" 
                        onChange={this.props.handleChange} // C'est cette propriété qui fait le lien
                        value={this.props.values.message}
                        onBlur={this.props.handleBlur}
                    >
                    </textarea>
                </div>
                {/* AFFICHAGE MESSAGE D'ERREUR de champ "Message" (Condition si le champs 'Message' a bien été touché et qu'il y a une erreur alors on affiche l'erreur) */}
                {this.props.touched.message && this.props.errors.message && <small className="text-danger">{this.props.errors.message}</small>}
                
                <button type="submit" className="btn btn-primary my-3 w-25" onClick={handleSubmit}>Envoyer</button>
                </form>
            </div>
        


            
        )
    }
}

const MyForm = withFormik({
    mapPropsToValues: () => ({ name: '', email: '', message: ''}),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'trop court').max(10, 'trop long').required('required'),
        email: Yup.string().email('mauvais email').required('required'),
        message: Yup.string().min(5, 'trop court').max(500, 'trop long').required('required')
    }),
    handleSubmit: (values, {props}) => {  
        console.log(values, props)

        // Récup des données du formulaire sous la forme d'objet (message)
        const message = {
            name: values.name,
            email: values.email,
            content: values.message
        }
        // On crée la propriété "dataFormContact" qui contiendra les données du formulaire (message)
        props.dataFormContact(message);

    }
})(Formulaire)

export default MyForm
