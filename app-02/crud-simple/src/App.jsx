import React from 'react'
import './App.css';
import shortid from 'shortid'
function App() {

  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState('')
const [error, setError] = React.useState(null)

  const agregarTarea = (e) => {
    e.preventDefault()

    if(!tarea.trim()){
      console.log('No hay tarea');
      setError('Ingrese una tarea porfavor.')
      return
    }
    setTareas([
        ...tareas,{  id:shortid.generate(),tarea }
    ])
    setTarea('')
    setError(null)
  }

  const eliminarTarea = (idEliminar) => {
    const arryaFiltrado = tareas.filter( item => item.id !== idEliminar)
    setTareas(arryaFiltrado)
  }

  const editarTarea = (itemEditar) => {
    console.log(itemEditar);
    setModoEdicion(true)
    setTarea(itemEditar.tarea)
    setId(itemEditar.id)
    

  }

  const editarTareaSeleccionado = (e) => {
    e.preventDefault()

    if(!tarea.trim()){
      console.log('No hay tarea seleccionado');
      setError('Ingrese una tarea porfavor.')
      return
    }

    const arrayEditado = tareas.map( item => item.id === id ? {id, tarea} : item )
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
    setError(null)
  }
   return (
    <div className="container text-center ">
      <h1 className="py-4">CRUD SIMPLE</h1>

      <div className="row">
        <div className="col-8">
                    <h4 className="text-center"> #Lista de tareas # </h4>
       
          <ul className="list-group">
         {

           tareas.length === 0 ? (
            <li className="list-group-item">No hay tareas</li>
           ) : (
             tareas.map( item => (
                <li className="list-group-item" key={item.id}>
                <span className="lead float-start">{item.tarea} </span>
                <button 
                  className="btn btn-sm btn-danger float-end mx-2"
                  onClick={ () => eliminarTarea(item.id)}
                >Eliminar</button>
                <button 
                  className="btn btn-sm btn-warning float-end"
                  onClick={ () => editarTarea(item)}
                >Editar</button>
              </li>  
             ))
           )
         }    
               
      </ul>
      </div>

        <div className="col-4">
          <h4 className="text-center">
          {
            modoEdicion ? 'Editar Tarea':'Agregar'
          }
          </h4>

            <form onSubmit={ modoEdicion ? editarTareaSeleccionado : agregarTarea }>
              {
                error ? (<span className="text-danger">{ error }</span>) : (null)
              }
              <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Ingrese Tarea"
                onChange={ (e) => setTarea(e.target.value)}
                value={ tarea }            
              />
              {
                modoEdicion ? (
                  <button className="btn btn-warning btn-block" type="submit">Editar</button>
                ):(
                  <button className="btn btn-dark btn-block" type="submit">Agregar</button>
                )

              }
              
        </form>

        

        </div>

      </div>
    </div>
  );
}

export default App;
