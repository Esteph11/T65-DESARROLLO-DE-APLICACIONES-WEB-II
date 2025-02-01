import React, { useEffect } from 'react';
import { Usuario } from '../Models/Usuario';

export default function ListaUsuarios({ usuarios, onDeleteUser }: { usuarios: Usuario[], onDeleteUser: (index: number) => void }) {
    useEffect(() => {
        console.log("Lista de usuarios actualizada:", usuarios);
    }, [usuarios]);

    return (
        <div>
            {usuarios.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.fechaNacimiento}</td>
                                <td>{usuario.edad}</td>
                                <td>
                                    <button onClick={() => onDeleteUser(index)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No se han registrados usuarios.</p>
            )}
        </div>
    );
}
