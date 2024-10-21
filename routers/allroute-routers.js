//importar express
const express=require("express");
//guardo la clase router del objeto express en variable router
const router=express.Router();

//importo el objeto desestructurado de funciones de controladores
const {getIndice,
    getProductos,
    getProductosByID,
    createProductos,
    updateProductos,
    deleteProductos,
    getServicios,
    getServiciosByID,
    createServicios,    
    updateServicios,
    deleteServicios
} = require ("../controllers/front-controllers.js")

router.get("/", getIndice)



//CRUD productos (create, retrieve, update, delete)


//GET method: leer datos / status 200
router.get("/productos", getProductos)
//GET method by ID
router.get("/productos/:id", getProductosByID)
//POST method: crear datos / status 201
router.post("/productos", createProductos)
//PUT method by ID: uddate datos / status 200
router.put("/productos/:id", updateProductos)
//DELETE method by ID: delete datos / status 200
router.delete("/productos/:id", deleteProductos)



//CRUD servicios (create, retrieve, update, delete)


//GET method: leer datos / status 200
router.get("/servicios", getServicios)
//GET method by ID
router.get("/servicios/:id", getServiciosByID)
//POST method: crear datos / status 201
router.post("/servicios", createServicios)
//PUT method by ID: uddate datos / status 200
router.put("/servicios/:id", updateServicios)
//DELETE method by ID: delete datos / status 200
router.delete("/servicios/id:", deleteServicios)




  


module.exports=router;