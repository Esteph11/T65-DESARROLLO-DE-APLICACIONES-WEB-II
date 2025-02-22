const express= require('express')
const Eventos= require('./Models/Eventos')
const cors= require('cors')

const app =express()

app.use(express.json())

app.use(cors())


app.get('/eventos',async(req,res)=>{

    try {
        const eventos = await Eventos.findAll();

        if(eventos.length==0){
            res.status(400).json({'mensaje':'Sin registros'})
        }
        else{
            res.status(200).json(eventos)
        }

        
    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error'})
    }
});


app.post('/eventos', async(req,res)=>{

    try {
        const eventos =await Eventos.create(req.body);

        res.status(200).json(eventos)

    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error'})
    }
})

app.put('/eventos/:id', async(req,res)=>{

    try {
        
        const [updated]= await Eventos.update(req.body,{
            where: {id: req.params.id}
        })

        if(updated){
            res.status(200).json({'mensaje':'Actualizado correctamente'})
        }
        else{
            res.status(400).json({'mensaje':'No se encontro registro para actualizar'})
        }

    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error'})
    }
})


app.delete('/eventos/:id', async(req,res)=>{

    try {
        
        const deleted= await Eventos.destroy({
            where: {id: req.params.id}
        })

        res.status(200).json({'mensaje':'elimando correctamente'})
        
       

    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error' + error})
    }
})

app.listen(5000, ()=>{
    console.log('Aplicación ejecutando en puerto 5000')
})