//importar express y lo utilizamos
const express= require('express')
const app=express()
//variable de entorno
require('dotenv').config()
//variable cors
const cors=require('cors')
//importo connection a mongoAtlas
const {connection}=require("./helpers/dbConnection.js")
//invocacion a connection / conexión base de datos
connection()


//puertos
const port = process.env.PORT; 

//middleware
//establecenis el template engine y definimos la carpeta de vistas
app.set('view engine', 'ejs')
app.set(express.static(__dirname + '/public'))



// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())


app.use(cors())



//rutas
app.use("/v1",require("./routers/allroute-routers.js"));



app.use((req,res,next)=>{
    res.status(404).render("404",{
              titulo:'error 404'
          }) 
  });


app.listen(port,()=>{
    console.log(`Servidor a la escucha desde ${port}`)
})