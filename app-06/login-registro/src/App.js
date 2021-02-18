import './App.css';
import React, { useEffect } from 'react'
// rutas
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// Componentes
import Navbar from './components/Navbar';
import Login from './components/Login'
import Admin from './components/Admin';

import { auth } from './firebase'



function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

    React.useEffect(() => {
      auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
          setFirebaseUser(user)
        }else{
          setFirebaseUser(null)
        }
      })
    }, [])

  return firebaseUser !== false ? (
    <div>

      <Router>
          <Navbar firebaseUser={firebaseUser}/>   

        <Switch>
          <Route path='/login'>
          <Login/>
          </Route>
          <Route path='/admin'>
              <Admin/>
          </Route>
          <Route path="/" exact>
              Home ...
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
      <p>Cargando ...</p>
  )
}

export default App;
