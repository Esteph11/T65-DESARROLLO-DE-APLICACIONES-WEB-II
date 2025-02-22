const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'gestioneventos',
    'root',
    'Puchito201524',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }

)

sequelize.authenticate()
    .then(()=> console.log('Conexion exitosa'))
    .catch(err=> console.log('Ocurrio un error'))
    
module.exports= sequelize