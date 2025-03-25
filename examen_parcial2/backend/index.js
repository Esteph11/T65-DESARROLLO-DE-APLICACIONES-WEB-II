const express = require('express');  
const sequelize = require('./Conexion/Conexion');  
const Producto = require('./Modelos/Producto');  

const app = express();  

app.use(express.json());  

// Total de valor por tipo de producto (asumiendo que deseas sumar el valor de productos por tipo)  
app.get('/sum-producto-tipo', async (req, resp) => {  
    try {  
        const result = await Producto.findAll({  
            attributes: [  
                'productType',  
                [sequelize.fn('SUM', sequelize.col('value')), 'total_value']  
            ],  
            group: ['productType']  
        });  

        resp.json(result);  
    } catch (error) {  
        resp.status(500).send({'Mensaje': 'Ocurrio un error'});  
    }  
});  

// Cantidad de productos por categoría  
app.get('/count-productos-categoria', async (req, resp) => {  
    try {  
        const result = await Producto.findAll({  
            attributes: [  
                'categoryCode',  
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_count']  
            ],  
            group: ['categoryCode']  
        });  

        resp.json(result);  
    } catch (error) {  
        resp.status(500).send({'Mensaje': 'Ocurrio un error'});  
    }  
}); 

// Consultar el promedio por segmento
app.get('/promedio-producto-segmento', async (req, resp) => {  
    try {  
        const result = await Producto.findAll({  
            attributes: [  
                'productSegmentCode',  
                [sequelize.fn('AVG', sequelize.col('value')), 'promedio']  
            ],  
            group: ['productSegmentCode']  
        });  

        resp.json(result);  
    } catch (error) {  
        resp.status(500).send({ 'Mensaje': 'Ocurrio un error' });  
    }  
}); 

// Valor máximo por tipo de producto  
app.get('/max-valor-producto-tipo/:idtipo', async (req, resp) => {  
    const { idtipo } = req.params;  

    try {  
        const result = await Producto.findAll({  
            attributes: [  
                'productType',  
                [sequelize.fn('MAX', sequelize.col('value')), 'max_value']  
            ],  
            where: { productType: idtipo },  
            group: ['productType']  
        });  

        resp.json(result);  
    } catch (error) {  
        resp.status(500).send({'Mensaje': 'Ocurrio un error'});  
    }  
});  

// Valor máximo por cada tipo de producto  
app.get('/max-valor-producto', async (req, resp) => {  
    try {  
        const result = await Producto.findAll({  
            attributes: [  
                'productType',  
                [sequelize.fn('MAX', sequelize.col('value')), 'max_value']  
            ],  
            group: ['productType']  
        });  

        resp.json(result);  
    } catch (error) {  
        resp.status(500).send({'Mensaje': 'Ocurrio un error'});  
    }  
});  

// Consultar la cantidad por marca
app.get('/count-productos-marca', async (req, resp) => {  
    try {  
        const result = await Producto.findAll({  
            attributes: [  
                'brandCode',  
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_count']  
            ],  
            group: ['brandCode']  
        });  

        resp.json(result);  
    } catch (error) {  
        resp.status(500).send({ 'Mensaje': 'Ocurrio un error' });  
    }  
});  

app.listen(5000, () => {  
    console.log('Aplicación ejecutando en puerto 5000');  
});  

