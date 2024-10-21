const {Schema, model} = require("mongoose");




const servicioSchema=new Schema({
    servicio:{
        type:String,
        require:true
    },
    descripcion:{
        type:String
    },
    disponible:{
        type:Boolean
    }
})

module.exports=model ("servicios", servicioSchema)


