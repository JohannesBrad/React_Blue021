// import logo from './logo.svg';
// import './App.css';
import React,{useEffect } from 'react'
import { firebase } from './firebase'


function App() {

  const [tarea, setTarea] = React.useState([])

  useEffect(() => {

    const ObtenerDatos = async () => {
      try {
        const db = firebase.firestore()
        const data = await db.collection('Tareas').get()
        // console.log(data.docs);

        // creando un array para obtener la data de firebase
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        //console.log(arrayData);
        setTarea(arrayData)               
      } catch (error) {
        console.log(error);
      }
    }

    ObtenerDatos()
  }, [])


  return (
    <div className="container">
      <h1>Consumiendo data de Firestore, desde Firebase</h1>
        <ul>

        {
        tarea.map( (item) => (
          <li key={item.id}>{ item.nombre} </li>
        ))
      }
        </ul>
    </div>
  );
}

export default App;
