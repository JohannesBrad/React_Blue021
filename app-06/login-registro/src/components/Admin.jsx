import React from 'react'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'



const Admin = (props) => {

    const [user, setUser] = React.useState(null)

    React.useEffect( () => {

        if(auth.currentUser){
            console.log('si existe el usuario');
            setUser(auth.currentUser)
        }else{
            console.log('NO existe el usuario');
            props.history.push('/login')
        }
        
    },[props.history])

    return (
        <div>
             <div className="container-fluid hero bg-light pt-2">
                 <div className="container py-5">
                     <span className="text-secondary">* Esta es una ruta protegida</span>
                     <h1 className="pt-5">Welcome to Admin</h1>
                     <p>Este es tu panel de Administracion</p>
                     {
                         user && (
                             <span>{user.email}</span>
                         )
                     }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Admin)
