import React from 'react'
import { Eventos } from '../Models/Eventos'
import Link from 'next/link'
import { useEventosContext } from '../Provider/ProviderEventos'


interface EventosLista{
    eventos: Eventos[]
}

export default function ListaEventosComponent({eventos}:EventosLista) {

  const {actualizarEventos,eliminarEventos} =useUsuaarioContext();


  return (
    <div>
        <ul>
        {
          eventos.map((eventos:Eventos) => (
            <li key={eventos.id}>
              <Link href={`/detalle/${eventos.id}`}>
                {eventos.nombre} - {eventos.direccion} - {eventos.fechaInicial} - {eventos.fechaFinal}

              </Link>

              <button type='button' className='btn btn-info btn-sm' onClick={()=>actualizarEventos(eventos.id,eventos.nombre,eventos.direccion,eventos.fechaInicial,eventos.FechaFinal)}>Restablecer</button>
              <button type='button' className='btn btn-danger btn-sm' onClick={()=>eliminarEventos(eventos.id)}>Eliminar</button>
            </li>

          ))
        }
      </ul>
    </div>
  )
}