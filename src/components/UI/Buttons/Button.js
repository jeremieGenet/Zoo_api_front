import React from 'react'

const Button = (props) => {

    const btnCss =`btn ${props.typeBtn} ${props.css}`
    const click = props.click 
    
    return (
        <button className={btnCss} onClick={click}>
            {props.children}
        </button>
    )
}

export default Button
