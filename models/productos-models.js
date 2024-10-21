//requerimos mongoose
const {Schema, model} = require ("mongoose");

//definimos estructura modelo productos


const productosSchema= new Schema ({
    producto:{
        type:String,
        require:true
    },
    descripcion:{
        type:String
    },
    disponible:{
        type:Boolean
    },
    fecha:{
        type: Date
    }
})

module.exports=model ("producto", productosSchema)