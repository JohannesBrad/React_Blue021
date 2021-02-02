import React from 'react'
import ButtonApp from './ButtonApp';

const HeroApp = () => {

    const title = '¿Que es React?';
    const text = 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.'

    return (
     <>
     <div className="hero">
        <div className=" container pt-5">
            <h1 className="fs-1 pt-5">{ title }</h1>
            <p className=" pt-3">{ text }</p>
            <p>Comprueba dandole click en el boton.</p>
            
            {/* Componente button */}
            <ButtonApp/>

        </div>
        </div>
    </>
    )
}

export default HeroApp
