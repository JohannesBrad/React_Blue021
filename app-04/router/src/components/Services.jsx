import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'


// const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
const Services = () => {

    const [civilizaciones, setCivilizaciones] = React.useState([])

    useEffect( () => {
        // console.log('useeffect');
        ObtenerCivilizacion()
    },[])

    const ObtenerCivilizacion = async () => {
        try {
            const respuesta = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
            const data = await respuesta.json()
            console.log(data.civilizations);
            setCivilizaciones(data.civilizations)
        } catch (error) {
            
        }

    }


    return (
        <div className="container hero bg-secundary pt-5">
        <h1 className="pt-5">Services</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. error facere nisi eligendi odit, sed provident cum.</p>
            <p>Haciendo uso del API de civilizaciones</p>

            <ul>
                {
                    civilizaciones.map( (item) => (
                        <li key={item.id}>
                            <Link to={`/services/${item.id}`}> 
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Services

