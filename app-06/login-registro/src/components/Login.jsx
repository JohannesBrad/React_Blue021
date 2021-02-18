import React from 'react'
import { auth, db } from '../firebase'
// import { auth,db } from '../firebase'
// se exporta el db para relacionarlo con el firestore

// cuando el usuario haga un login tenemos que empujarlo a pagina Admin, para ello se usa withRouter
import { withRouter } from 'react-router-dom'

const Login = (props) => {

    const [mail, setMail] = React.useState('')
    const [password, setPassword] = React.useState('')
    // pintar los errores
    const [error, setError] = React.useState(null)
    // cambiar tipo de registro al formulario
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = (e) => {
        e.preventDefault()

        if(!mail.trim()){
            //console.log('Ingrese su correo');
            setError('Ingrese su correo')
            return
        }
        if(!password.trim()){
            //console.log('Ingrese su password');
            setError('Ingrese su password');
            return
        }
        if(password.length < 6){
            //console.log('Password debe ser mayor 6');
            setError('Password debe ser mayor 6');
            return
        }
        //console.log('Validaciones superadas!');
        setError(null)
        console.log('Validaciones superadas!');

        if(esRegistro){
            registrar()
        }else{
            login()
        }

    }

    // login firebase
    const login = React.useCallback( async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(mail, password)
            console.log(res.user);

            setMail('')
            setPassword('')
            setError(null)
            props.history.push('/admin')
            // 
        } catch (error) {
            if(error.code === 'auth/user-not-found'){
                setError('Dirección de correo electrónico no encontrado. Por favor Registrece si es nuevo usuario.');
            }
            if(error.code === 'auth/email-already-in-use'){
                setError('Esta direccion de correo ya existe');
            }
            if(error.code === 'auth/wrong-password'){
                setError('Error de password');
            }
            //auth/wrong-password
            console.log(error);
        }
    },[mail,password, props.history])

    // creando la funcion  de registrar
    // hacmos uso de un nuevo hooks useCallback

    const registrar = React.useCallback( async () => {

        try {
            // firebase.auth().createUserWithEmailAndPassword(email, password)
            const res = await auth.createUserWithEmailAndPassword(mail, password)
            // console.log(res.user);

            await db.collection('usuarios').doc(res.user.email).set({
                mail: res.user.email,
                uid: res.user.uid
             })

            setMail('')
            setPassword('')
            setError(null)
            
            props.history.push('/admin')
        } catch (error) {

            if(error.code === 'auth/invalid-email'){
                setError('La dirección de correo electrónico está mal formateada.');
            }
            if(error.code === 'auth/email-already-in-use'){
                setError('Esta direccion de correo ya existe');
            }
            //console.log(error);
        }
    },[mail, password,props.history ])

    return (
        <div>
        <div>
            <div className="mt-5">
                <h3 className="text-center">
                    {
                        esRegistro ? 'Registro de usuario' : 'Login de acceso'
                    }
                      
                </h3>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 my-3">

                        <form onSubmit={ procesarDatos } >
                            {/* usamos este operador solo cuando tenemos una condicion */}
                            {
                                error && (  <div className="alert alert-danger" role="alert">{error}</div>)
                            }
                          
                            <input 
                                type="email" 
                                className="form-control mb-2"
                                placeholder="Ingrese Email"
                                onChange={ (e) => setMail(e.target.value)}
                                value={mail}
                    
                            />
                            <input 
                                type="password" 
                                className="form-control mb-2"
                                placeholder="Ingrese Contraseña"
                                onChange={ (e) => setPassword(e.target.value)}
                                value={password}
                           
                            />
                           
                            <div className="row my-2 ">
                                <button 
                                    className="btn btn-primary m-1"
                                    type="submit"
                                >{
                                    esRegistro ? 'Registrarse' : 'Acceder'
                                }
                                </button>                        
                                <button 
                                    className="btn btn-dark m-1"
                                    type="button"
                                    onClick={ () => setEsRegistro(!esRegistro)}
                                    
                                >{
                                    esRegistro ? 'Si ya tienes cuenta, da click aquí' : '¿No estas registrado? '
                                }
                                </button>
                              
 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    )
}

// al usar withRouter, tenemos que envolver el login
// export default Login
export default withRouter(Login)
  