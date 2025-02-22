import ListaEventosComponent from '@/app/Components/ListaEventosComponent'
import { useUsuaarioContext } from '@/app/Provider/ProviderUsuario'
import Link from 'next/link'
import React from 'react'

export default function pagelistadeEventos() {

  const { accion } = useEventosContext()

  return (
    <>
      <ListaEventosComponent eventos={accion}></ListaEventosComponent>
    </>
  )
}
