import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <div className="container-fluid text-start">
                <div className="container">
                <p>Saludos {props.persona}</p>
                </div>
            </div>
        </div>
    )
}

export default Saludo
