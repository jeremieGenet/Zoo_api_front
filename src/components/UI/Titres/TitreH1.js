import React from 'react'

function TitreH1(props) {

    const backgroundColor = props.bgColor ? props.bgColor : "";
    const monCss = `my-1 p-4 text-white text-center ${backgroundColor}` 

    return (
        <h1 className={monCss}>
            {props.children}
        </h1>
    )
}

export default TitreH1
