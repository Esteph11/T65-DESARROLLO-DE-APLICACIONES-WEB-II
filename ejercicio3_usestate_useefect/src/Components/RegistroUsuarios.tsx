import React, { useState } from 'react';
import ListaUsuarios from './ListaUsuarios';
import { Usuario } from '../Models/Usuario';

export default function RegistroUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const calcularEdad = (fecha: string) => {
        const nacimiento = new Date(fecha);
        const edadActual = new Date();
        let edad = edadActual.getFullYear() - nacimiento.getFullYear();
        const mesDiff = edadActual.getMonth() - nacimiento.getMonth();
        if (mesDiff < 0 || (mesDiff === 0 && edadActual.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad;
    };

    const agregarUsuario = () => {
        const nuevoUsuario: Usuario = {
            nombre,
            apellido,
            telefono,
            correo,
            fechaNacimiento,
            edad: calcularEdad(fechaNacimiento),
        };

        setUsuarios([...usuarios, nuevoUsuario]);
        resetFormulario();
    };

    const resetFormulario = () => {
        setNombre('');
        setApellido('');
        setTelefono('');
        setCorreo('');
        setFechaNacimiento('');
    };

    const eliminarUsuario = (index: number) => {
        setUsuarios(usuarios.filter((_, i) => i !== index));
    };

    return (
        <div>
        <h2>Registro de Usuarios</h2>
        <div className="card">
            <form onSubmit={(e) => { e.preventDefault(); agregarUsuario(); }}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" placeholder="Escribir su Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" placeholder="Escribir su Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="Escribir su Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" placeholder="Ejemplo@email.com" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                </div>
                <button type="submit">Registrar Usuario</button>
            </form>
        </div>
        <ListaUsuarios usuarios={usuarios} onDeleteUser={eliminarUsuario} />
    </div>
    );
}
