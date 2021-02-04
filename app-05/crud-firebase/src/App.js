// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import { firebase } from './firebase'

function App() {

  const [tarea, setTarea] = React.useState([])  // esto del API Firebase
  const [tareas, setTareas ] = React.useState('') // esto es para el formulario
  
  // usando  stae para la edicion
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState('')

  React.useEffect(() => {

    const ObtenerDatos = async () => {
      try {
        const db = firebase.firestore()
        const data = await db.collection('Tareas').get()
        // console.log(data.docs);
        // creando un array para obtener la data de firebase
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        //console.log(arrayData);
        setTarea(arrayData)     
        //console.log(tarea);          
      } catch (error) {
        console.log(error);
      }
    }
    ObtenerDatos()
  }, [])

  const agregarTarea = async (e) => {
    e.preventDefault()
     // validaciones
    if(!tareas.trim()){
      console.log('No hay texto ingresado');
      return
    }
    // insertar a Firebase (agregar data)
    try {
      const db = firebase.firestore()
      const nuevaTarea = {
        nombre: tareas,
        fecha: Date.now()
      }
      const data = await db.collection('Tareas').add(nuevaTarea)
      setTarea([
        ...tarea,{
          id: data.id, ...nuevaTarea }
      ])
      setTareas('')
    } catch (error) {
      console.log(error);
    }

//    setTareas('')
    console.log(tareas);
   
  }

    // eliminar tarea
    const eliminarTarea = async (idEliminar) => {
      //console.log(idEliminar);
    try {
      const db = firebase.firestore()
      await db.collection('Tareas').doc(idEliminar).delete()

      const arrayfiltrado = tarea.filter(item => item.id !== idEliminar)
      setTarea(arrayfiltrado)
    } catch (error) {
      console.log(error);
    }

    }

    // funcion de editar
    const editarTarea = (itemEditar) => {
      console.log(itemEditar);
      setModoEdicion(true)
      setTareas(itemEditar.nombre)
      setId(itemEditar.id)
    }

    const editar = async (e) => {
      e.preventDefault()
      if(!tareas.trim()){
        console.log('Ingrese data');
        return
      }
      try {
        const db = firebase.firestore()
        await db.collection('Tareas').doc(id).update({
          nombre:tareas
        })

        const arrayEditado = tarea.map( item => (
          item.id === id ? { id: item.id, fecha: item.fecha, nombre:tareas} : item
        ))
        setTarea(arrayEditado)

        setModoEdicion(false)
        setTareas('')
        setId('')

      } catch (error) {
        console.log(error);
      }

    }

  return (
    <div className="container mb-2">
      <div className="row py-4">
        <div className="col-md-6">
            <h3 className="py-3">Lista de Tareas</h3>
            <ul className="list-group">
            {
                tarea.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span>{item.nombre}</span>
                    <button 
                        className="btn btn-danger btn-sm float-end "
                        onClick={ () => eliminarTarea(item.id) }
                    >
                        Eliminar
                    </button>
                    <button 
                        className="btn btn-warning btn-sm float-end mx-1"
                        onClick={ () => editarTarea(item)} 
                    >
                        Editar
                    </button>
                </li>
                ))
            }
            </ul>
        </div>
        <div className="col-md-6">

        <h3 className="py-3">{ modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'}</h3>

        <form onSubmit={ modoEdicion ? editar: agregarTarea }> 
          <input 
              type="text" 
              className="form-control mb-2"
              placeholder='Ingrese Tarea'
              onChange={ (e) => setTareas(e.target.value)} 
              value={tareas}            
          />

          { modoEdicion ? ( 
             <button 
                type='submit'
                className="btn btn-warning btn-block btn-sm">
                Editar
              </button>) : (
              <button 
                type='submit'
                className="btn btn-dark btn-block btn-sm">
                Agregar
              </button>) 
          }        
      </form>
        </div>
      </div>
    </div>
  );
}

export default App;
