import React from 'react'
import Imagen from './Imagen'

const Comentario = (props) => {
    return (
        <div className="container pt-3">
        <div className="media ">
            <Imagen imagenComentario={props.urlImag }/>
            <div className="media-body">
                <h5 className="mt-0">
                    { props.persona}
                </h5>
                <p>
                    { props.comentario}
                </p>
            </div>
             
        </div>
        </div>
    )
}

export default Comentario
