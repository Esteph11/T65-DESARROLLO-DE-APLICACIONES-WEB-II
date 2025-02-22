'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Eventos } from '../Models/Eventos'
import { EventosContext } from '../Context/EventosContext'


interface VistaReact {
    children: ReactNode
}
export default function ProviderEventos({ children }: VistaReact) {

    const [eventos, setEventos] = useState<Eventos[]>([]);

    const [id, setId] = useState(0)
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [fechaInicio, setfechaInicio] = useState('')
    const [fechaFinal, setfechaFinal] = useState('')

    useEffect(() => {

        cargarEvento()

    }, [])


    async function cargarEvento() {
        try {

            const res = await fetch('http://localhost:5000/eventos')
            const data = await res.json()

            setEventos(data)

        } catch (error) {
            alert('Ocurrio un error en la peticion' + error)
        }
    }

    async function agregarEventos(eventos: Eventos) {

        try {



            let res;
            if (id == 0) {
                res = await fetch('http://localhost:5000/eventos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: eventos.id,
                        nombre: eventos.nombre,
                        direccion: eventos.direccion,
                        fechaInicial: eventos.fechaInicial,
                        fechaFinal: eventos.fechaFinal,
                        estado: eventos.estado,
                        comentario: eventos.comentario
                    })
                })
            }
            else {

                res = await fetch('http://localhost:5000/eventos/' + id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: eventos.id,
                        nombre: eventos.nombre,
                        direccion: eventos.direccion,
                        fechaInicial: eventos.fechaInicial,
                        fechaFinal: eventos.fechaFinal,
                        estado: eventos.estado,
                        comentario: eventos.comentario
                    })
                })
            }


            if (!res) {
                alert('Ocurrio un error')
                return
            }

            alert('Agregado exitosamente')


        } catch (error) {
            alert('Ocurrio un error en la peticion' + error)
        }

    }




    function actualizarEvento(id:number, nombre:string, direccion:string, fechaInicio:Date, fechaFinal:Date, estado:string, comentario:string) {
        setId(id)
        setNombre(nombre)
        setDireccion(direccion)
        setfechaInicio(fechaInicio)
        setfechaFinal(fechaFinal)
    }

    async function eliminarEvento(id: number) {

        try {

            const res = await fetch('http://localhost:5000/eventos/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!res) {
                alert('Ocurrio un error')
                return
            }

            cargarEvento()
            alert('Evento Eliminado exitosamente')

        } catch (error) {
            alert('Ocurrio un error en la peticion' + error)
        }
    }


    return (
        <EventosContext.Provider value={{
            eventos,
            setEventos, agregarEventos,
            actualizarEvento,
            eliminarEvento,
            id, setId,
            nombre, setNombre,
            direccion, setDireccion,
            fechaInicio, setfechaInicio,
            fechaFinal, setfechaFinal,

        }}>
            {children}
        </EventosContext.Provider>
    )
}

export function useEventosContext() {
    return useContext(EventosContext)
}
