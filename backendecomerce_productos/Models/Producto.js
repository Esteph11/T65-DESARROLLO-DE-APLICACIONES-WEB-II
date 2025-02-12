const { DataTypes } = require('sequelize');
const sequelize = require('../db/Connection');

const Producto = sequelize.define('Producto', {
    IdProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    precioProducto: {
        type: DataTypes.DECIMAL(10,2)  // Corrige el tipo de dato
    },
    Isv: {
        type: DataTypes.FLOAT
    },
    img: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'Producto',
    timestamps: false
});

module.exports = Producto;
