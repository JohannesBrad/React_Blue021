import React, { useEffect } from 'react'

const About = () => {

    const [usuarios, setUsuarios] = React.useState([])
    useEffect( () => {
        console.log('useeffect');
        ObtenerDats()
    },[])

    const ObtenerDats = async () => {
        const resultado = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resultado.json()
        setUsuarios(data)
    }
    
    
    return (
        <div className="container hero bg-secundary pt-5">
            <h1 className="pt-5">About us</h1>
            <p>Probando UseEffecto, consummiendo data de JsonFake</p>   
            {
                usuarios.map( item => (
                    <li key={item.id}>{ item.name }</li>
                ))
            }

        </div>
    )
}

export default About
