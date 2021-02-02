import React from 'react'

const ButtonApp = () => {

    const [texto, setTexto] = React.useState('')

     // Evento Click
     const eventoClick = () => {
        // console.log('diste click');
        setTexto('Hola Me diste Click')
    }

    return (
        <>
            <button className="btn btn-info mt-3" onClick={ () => eventoClick() }>Dale click</button>
            <span className="px-2 pt-2">{ texto }</span>
        </>
    )

}

export default ButtonApp