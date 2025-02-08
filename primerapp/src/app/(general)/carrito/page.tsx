'use client';  
import React, { useState } from 'react';  
import { useContextCarrito } from '@/app/Provider/Provider';  
import { Producto } from '@/app/Modelos/Producto';  

export default function CarritoPage () {  
    const { productoCarrito } = useContextCarrito();  
    

    const calcularISV = (precio: number, isv: number): number => {  
        return (precio * isv) / 100;  
    };  

    const calcularSubTotal = (precio: number, isv: number): number => {  
        return precio + calcularISV(precio, isv);  
    };  

    const calcularTotal = () => {  
        let total = 0;  
        productoCarrito.forEach(item => {  
            total += calcularSubTotal(item.precioProducto, item.isvProducto);  
        });  
        return total;  
    };  

    const totalAPagar = calcularTotal();  

  

    return (  
        <div className="container mt-4">  
            <h1>Carrito de Compras</h1>  
           
            
        </div>  
    ) 
}  

