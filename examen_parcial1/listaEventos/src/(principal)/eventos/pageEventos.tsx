import { useEventosContext } from '@/app/Provider/ProviderEventos'
import { useParams } from 'next/navigation'
import React from 'react'

export default function pageEventos() {

  const {id} = useParams()
  const {accion}= useEventosContext()

  const eventosDetalle= accion.find((action)=> action.id==Number(id))

  return (
    <div>
        <h4>Eventos Agregados</h4>
        <p>Id: {eventosDetalle?.id}</p>
        <p>Nombre: {eventosDetalle?.nombre}</p>
        <p>Dirección: {eventosDetalle?.direccion}</p>
        <p>Fecha Inicio: {eventosDetalle?.fechaIncio}</p>
        <p>Fecha Final: {eventosDetalle?.fechaFinal}</p>
    </div>
  )
}