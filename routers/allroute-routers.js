//importar express
const express=require("express");
//guardo la clase router del objeto express en variable router
const router=express.Router();
const{check}=require('express-validator')
const {validateInputs} = require('../middleware/validate.js')


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
} = require ("../controllers/front-controllers.js");


router.get("/", getIndice)



//CRUD productos (create, retrieve, update, delete)


//GET method: leer datos / status 200
router.get("/productos", getProductos)
//GET method by ID
router.get("/productos/:id", getProductosByID)
//POST method: crear datos / status 201
router.post("/productos", [
    check( 'producto', 'El servicio es obligatorio').not().isEmpty(),
    check( 'descripcion', 'La descripcion es obligatoria') .not().isEmpty(),
    validateInputs],createProductos)
//PUT method by ID: uddate datos / status 200
router.put("/productos/:id", [
    check( 'producto', 'El servicio es obligatorio').not().isEmpty(),
    check( 'descripcion', 'La descripcion es obligatoria') .not().isEmpty(),
    validateInputs],updateProductos)
//DELETE method by ID: delete datos / status 200
router.delete("/productos/:id", deleteProductos)



//CRUD servicios (create, retrieve, update, delete)


//GET method: leer datos / status 200
router.get("/servicios", getServicios)
//GET method by ID
router.get("/servicios/:id", getServiciosByID)
//POST method: crear datos / status 201
router.post("/servicios",[
check( 'servicio', 'El servicio es obligatorio').not().isEmpty(),
check( 'descripcion', 'La descripcion es obligatoria') .not().isEmpty(),
validateInputs], createServicios)
//PUT method by ID: uddate datos / status 200
router.put("/servicios/:id", [
    check( 'servicio', 'El servicio es obligatorio').not().isEmpty(),
    check( 'descripcion', 'La descripcion es obligatoria') .not().isEmpty(),
    validateInputs],updateServicios)
//DELETE method by ID: delete datos / status 200
router.delete("/servicios/id:", deleteServicios)




  


module.exports=router;