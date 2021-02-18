import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonsAccion, anteriorPokemonAccion, unPokeDetalleAccion } from '../redux/pokeDucks'
import Detalle from './Detalle'

const Pokemones = () => {

    const dispatch = useDispatch()

    //const pokemones = useSelector(store => store.pokemones.array)
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    console.log(pokemones);

    return (
        <>
        <div className="row">
            <div className="col-md-6">
                <h2>Lista de pokemon</h2>
                <button onClick={ () => dispatch(obtenerPokemonesAccion()) }
                className ="btn btn-dark">Obtener Pokemones</button>
                {/* { 
                    pokemones.lenght === 0 && 
                    <button onClick={ () => dispatch(obtenerPokemonesAccion()) }>Obtener Pokemones</button>
                
                } */}
                {
                    next && 
                    <button onClick={ () => dispatch(siguientePokemonsAccion()) } 
                    className ="btn btn-primary mx-2 "> Next</button>
                }
                {
                    previous &&
                    <button onClick={ () => dispatch(anteriorPokemonAccion()) }
                    className ="btn btn-primary">Prev</button>
                }


                <ul className="list-group mt-3">
                    {
                        pokemones.map(item =>(
                            <li key= {item.name } className="list-group-item ">
                                { item.name }
                                <button 
                                className="btn btn-success float-end"
                                onClick={ () => dispatch(unPokeDetalleAccion(item.url))}
                                > Info </button>
                            </li>
                        ))
                        
                    }
                </ul>
        
          

            </div>

            <div className="col-md-6">
                <h2>Detalle de pokemon</h2>
                <Detalle/>
            </div>
        </div>

      
            

           

       
   

        </>
    )

}

export default Pokemones