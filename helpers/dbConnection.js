const mongoose = require("mongoose");

const connection=async()=>{
  try{
      const connect= await mongoose.connect(process.env.URI_CONNECT)
      console.log("conectado a mongo")
      return connect
    }
    catch (error){
          console.log(error)
          return {
              ok:false,
              mensaje: "error en la conexión"


          }

    } 
}
module.exports = {connection}