const express = require('express')
const Producto = require('./Models/Producto')


const app = express()

app.use(express.json())


app.get('/producto',async (req, res) =>{

    try {
        //SELECT *FROM PRODUCTO
        const producto = await Producto.findAll();

        res.status(200).json(producto)
        
    } catch (error) {
        console.error("Error en la consulta:", error);
        res.status(500).json({ 'Error': 'Ocurrió un error en la petición', 'Detalles': error.message });
    }
})

app.post('/producto', async (req,res)=>{
    try {

        const { nombre, precioProducto, Isv, img } = req.body;

        if (!nombre || !precioProducto || !Isv || !img) {
            return res.status(400).json({ 'Error': 'Todos los campos son requeridos' });
        }

        const producto = await Producto.create({ nombre, precioProducto, Isv, img });

        res.status(201).json(producto);
    } catch (error) {
        console.error("Error en la inserción:", error);
        res.status(500).json({ 'Error': 'Ocurrió un error en la petición', 'Detalles': error.message });
    }
});

app.put('/producto/:IdProducto', async (req,res)=>{

       
    try {

        const [updated]= await Producto.update(req.body,{
            where: {IdProducto: req.params.IdProducto}
        })

        if(updated){
            res.status(200).json({'mensjae':'Registro actualizado'})
        }
        else{
            res.status(500).json({'mensjae':'Registro no encontrado'})
        }
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})



app.listen(5000,()=>{
    console.log('ejecutando en puerto 5000')
})
