import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Necesito si la cantidad de letras ingesadas es menor que 10, el texto se va mostrar en color amarill0
// es mayor que 10 y menor que 50 el texto se va mostrar en color verde
// mayor que 50 el texto se va mostrar en color rojo

//Un contador de letras

export default function FormularioContador() {  
  const [texto, setTexto] = useState("");  
  const [contadorLetras, setContadorLetras] = useState(0);  

  useEffect(() => {  
    const contarLetras = texto.length;  
    setContadorLetras(contarLetras);  
  }, [texto]);  

  const manejarTexto = (e:any) => {  
    setTexto(e.target.value);  
  };  

  const obtenerColorTexto = () => {  
    const cantidadPalabras = texto.length;  
    if (cantidadPalabras < 10) return 'yellow';  
    if (cantidadPalabras >= 10 && cantidadPalabras < 50) return 'green';  
    return 'red';  
  };  

  return (  
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
        <h1 className="text-center">Contador de Letras</h1>
        <textarea  
          className="form-control my-3"  
          rows={5}  
          placeholder="Ingresar una palabra"  
          value={texto}  
          onChange={manejarTexto}  
        />  
        <h2 className="text-center" style={{ color: obtenerColorTexto() }}>
          Cantidad de letras: {contadorLetras}
        </h2>  
        <p className="text-center" style={{ color: obtenerColorTexto() }}>{texto}</p>  
      </div>
    </div>  
  );  
}
