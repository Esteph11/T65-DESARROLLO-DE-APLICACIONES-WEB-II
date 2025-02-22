import ListaUsuarioComponent from '@/app/Components/ListaEventosComponent'
import { Eventos } from '@/app/Models/Eventos'
import { useUsuaarioContext } from '@/app/Provider/ProviderEventos'
import React from 'react'

export default function pageAgregarEventos() {

  const {id,setId,nombre,setNombre,direccion,setDireccion,fechaInicio,setFechaInicio,fechaFinal,setFechaFinal,agregarEventos, }= useEventosContext()

  function crearEventos(){

    let accion: Eventos={
      id:id,
      nombre:nombre,
      direccion:direccion,
      fechaInicio:fechaInicio,
      fechaFinal:fechaFinal,
    }

    agregarEventos(accion)
  }

  return (
    <div className='container'>

        <h2>Creación de Eventos</h2>

        <form className='form'>

          <div className='row'>

            <div className='col-md-6'>
            <input type="text" 
              className='form-control'
              name='nombre'
               id='nombre' 
               value={nombre}
               onChange={(event) => setNombre(event.target.value)}
               placeholder='Nombre Evento'
               />
            </div>

            <div className='col-md-6'>
            <input type="direccion" 
             className='form-control'
               name='direccion'
               id='direccion' 
               value={direccion}
               onChange={(event) => setDireccion(event.target.value)}
               placeholder='Dirección'
               />
              </div>

              <div className='col-md-6'>
            <input type="fechaInicio" 
             className='form-control'
               name='fechaInicio'
               id='fechaInicio' 
               value={fechaInicio}
               onChange={(event) => setFechaInicio(event.target.value)}
               placeholder='Fecha de Incio'
               />
              </div>

              <div className='col-md-6'>
            <input type="fechaFinal" 
             className='form-control'
               name='fechaFinal'
               id='fechaFinal' 
               value={fechaFinal}
               onChange={(event) => setFechaFinal(event.target.value)}
               placeholder='Fecha de Final'
               />
              </div>
          </div> <br />

       

        

          <button className='btn btn-success' onClick={crearEventos}>Agregar /Actualizar Eventos</button>

          <ListaEventosComponent eventos={accion}></ListaEventosComponent>
        </form>

    </div>
  )
}
