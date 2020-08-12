import React from 'react'
import TitreH1 from "../UI/Titres/TitreH1"

function Error(props) {
    return (
        <>
            <TitreH1 bgColor="bg-danger">Erreur {props.type}</TitreH1>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Error
