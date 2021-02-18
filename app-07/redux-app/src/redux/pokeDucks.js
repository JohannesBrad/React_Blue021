import axios from 'axios'

// constantes - 03
const dataInicial = {
    // array : [],
    // offset: 0
    count: 0,
    next: null,
    previos: null,
    results:[]
}
// types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'


// reducer - 02
export default function pokerReducer(state = dataInicial, action){
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            // return { ... state, array: action.payload }
            return { ... state, ...action.payload }
        
        case SIGUIENTE_POKEMONES_EXITO:
           // return { ... state, array: action.payload.array, offset: action.payload.offset }
           return { ... state, ...action.payload }

           case POKE_INFO_EXITO:
            // return { ... state, array: action.payload.array, offset: action.payload.offset }
            return { ... state, unPokemon: action.payload }

        default:
            return state;
            // break;
    }
}

// acciones - 01
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {    
    // console.log('getState',getState().pokemones.offset);
    // const offset = getState().pokemones.offset;
    
    try {
        // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        // res.data.results
        console.log(res.data);

        dispatch({
            type: OBTENER_POKEMONES_EXITO,
             // payload:  res.data.results
            payload:  res.data
        })
    } catch (error) {
        console.log(error);
    }
}


export const siguientePokemonsAccion = () => async (dispatch, getState)  => {
/*
    const offset = getState().pokemones.offset;
    const siguiente = offset + 20
*/
const next = getState().pokemones.next
    console.log(next);
    try {
        //const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        //const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`)
        const res =  await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
            /*
            payload: {
                array: res.data.results,
                offset: siguiente
            }
            */
        })
    } catch (error) {
        console.log(error);
    }
}
export const anteriorPokemonAccion = () => async (dispatch, getState) => {
    const {previous}  =  getState().pokemones

    try {
        
        const res =  await axios.get(previous)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data

        })
    } catch (error) {
        console.log(error);
    }
}



export const unPokeDetalleAccion = (url = 'https://pokeapi.co/api/v2/pokemon/1/') => async (dispatch) => {



    try {
        const res = await axios.get(url)
        console.log(res.data);
        dispatch({
            type: POKE_INFO_EXITO,
            payload: {
                nombre: res.data.name,
                ancho: res.data.weight,
                alto: res.data.height,
                foto: res.data.sprites.front_default

            }
        })
    } catch (error) {
        console.log(error);
    }
}




// 8 de marz0 cumple a aaron