import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Civil = () => {

    // console.log(useParams());
    const {idCivil} = useParams()

    const [civil, setCivil] = React.useState([])

    useEffect( () => {
        const ObtenerCivil = async () => {
            const respuesta = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${idCivil}`)
            const data = await respuesta.json()
            console.log(data);
            setCivil(data)
        }
        ObtenerCivil()
    },[idCivil])  


    return(
        <>
            <section className="container-fluid bg-success text-light">
                <div className="container py-5">
                    <h1 className="dislpay-3">{civil.name}</h1>
                    <p className="lead">{civil.expansion}</p>
                    <span>{civil.army_type}</span>
                </div>                
                               
            </section>
        </>
    )
}

export default Civil