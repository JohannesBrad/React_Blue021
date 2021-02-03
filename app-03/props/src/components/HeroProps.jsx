import React from 'react'

const HeroProps = () => {
    return(
        <>
            <div className="container-fluid bg-dark text-start text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <h2 className="fs-1 py-4">Conociendo los Props</h2>
                            <p className="pt-2 pb-4">Render props es un patrón utilizado en React que consiste en delegar lo que un componente va a renderear a otro componente, la mayoría de la veces, a un padre en el árbol de componentes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HeroProps