import React from 'react'
//import logo from '../logo.svg';
import todolist from '../assets/img/todolist.svg';

const SectionCards = () => {
    return (
        <>     
        <div className="container">
            <div className="row py-5">
                <h2 className="fs-2 text-center">Aqui puedes ver algunas aplicaciones hechas con React</h2>
            </div>
            <div class="row py-4" >
                <div class="col">
                    <div className="card card-with">
                        <img src={ todolist } className="card-img-top py-2" width="70" height="70" alt="imagen"/>
                        <div className="card-body">
                            <h5 className="card-title">Lista de tareas</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>    

                <div class="col">
                    <div className="card card-with">
                    <img src={ todolist } className="card-img-top py-2" width="70" height="70" alt="imagen"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>    

                <div class="col">
                    <div className="card card-with">
                    <img src={ todolist } className="card-img-top py-2" width="70" height="70" alt="imagen"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>     

             
            </div>
        </div>     

        </>
    )
}

export default SectionCards
