const { DataTypes } = require('sequelize');  
const sequelize = require('../Conexion/Conexion');  

const Producto = sequelize.define('producto', {  
    partNumber: {  
        type: DataTypes.STRING,  
        primaryKey: true,  
        allowNull: false  
    },  
    productType: {  
        type: DataTypes.STRING  
    },  
    categoryCode: {  
        type: DataTypes.STRING  
    },  
    brandCode: {  
        type: DataTypes.STRING  
    },  
    familyCode: {  
        type: DataTypes.STRING  
    },  
    lineCode: {  
        type: DataTypes.STRING  
    },  
    productSegmentCode: {  
        type: DataTypes.STRING  
    },  
    status: {  
        type: DataTypes.STRING  
    },  
    value: {  
        type: DataTypes.DECIMAL  
    },  
    valueCurrency: {  
        type: DataTypes.STRING  
    },  
    defaultQuantityUnits: {  
        type: DataTypes.STRING  
    },  
    name: {  
        type: DataTypes.STRING  
    },  
    description: {  
        type: DataTypes.TEXT  
    },  
    plannerCode: {  
        type: DataTypes.STRING  
    },  
    sourceLink: {  
        type: DataTypes.STRING  
    }  
}, {  
    tableName: 'productos',  
    timestamps: false  
});  

module.exports = Producto;  