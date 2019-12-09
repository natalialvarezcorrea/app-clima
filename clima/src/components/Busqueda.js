import React, { Fragment, useState } from 'react';
import './form.css'

function Busqueda(datosConsulta) {


    //estado del componente

    const [busqueda, guardarbusqueda] = useState({
        city: ''
    })



    const handleChange = e => {
        //cambiar estado
        guardarbusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })

    }

    const clima = e => {
        e.preventDefault();
        datosConsulta(busqueda);
    }


    return (
        <Fragment>
            <div className="bg-ligth cl-12 hi">

                <form onSubmit={clima} className="formulario">
                    <div className="centro" >
                        <input className="border border-info mt-2" type="text" name="city" id="city" placeholder="Ciudad:" onChange={handleChange} />
                        <button type='submit' value="clima" className="ml-2 btn-sm btn btn-secundario">buscar</button>
                    </div>
                </form>

            </div>

        </Fragment>
    )

}


export default Busqueda;