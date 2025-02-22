import { createContext } from "react";
import { Eventos } from "../Models/Eventos";

export const usuarioContext= createContext({
    eventos: [] as Eventos[],
    setEventos: (eventos:Eventos[]) =>{},
    agregarEventos: (eventos : Eventos ) =>{},
    actualizarEventos: (id:number,nombre:string, direccion:string, fechaInicial:Date, fechaFinal:Date) =>{},
    eliminarEventos:(id:number)=>{},

    id:0,
    setId:(id:number)=>{},
    nombre:'',
    setNombre:(nombre:string)=>{},
    direccion:'',
    setDireccion:(direccion:string)=>{},
    fechaInicio:'',
    setfechaInicio:(fechaInicio:Date)=>{},
    fechaFinal:'',
    setfechaFinal:(fechaFinal:Date)=>{},

})