const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'gestionproductos',
    'root',
    'Puchito201524',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
    .then(()=> console.log('Se conecto exitosamente'))
    .catch(()=> console.log('Ocurrion un error'))

module.exports=sequelize;

