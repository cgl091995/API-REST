//importamos modelos servicio y modelo
const Servicio= require('../models/servicios-models')
const Producto= require('../models/productos-models')

//funciones controladores que reciben requerimiento y respuesta para establecer ruta en la que se va a renderizar la página
const getIndice=(req, res) =>{
    res.render('indice',{
        descripcion:'esta es la descripción del indice'
    })
}

/*------------------------------------*/

/*const getProductos=async(req, res)=>{
    try{
        const productos= await producto.find()
        res.render('productos',{
        descripcion:'esta es la descripción del producto',
        productos
    })
    } catch(error){

    }
}
*/

const getProductos= async (req, res)=>{

    try{
        const products = await Producto.find()
        console.log(products)
    
        return res.status(200).json(
            {ok: true,
            msg: "leyendo productos",
            total_results: products.length,
            data: products
        })     
    }
    
    catch (error){
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg:"error al obtener productos"
        })
    }
}
    

const getProductosByID=async(req,res)=>{

    try {

        const id = req.param.id
        console.log(id)
        const products = await Producto.findById(id)
        console.log(products)
    
        return res.status(200).json(
            {ok: true,
            msg: "leyendo productos",
            
        })   
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg:"error al obtener productos"
        })
}
}

const createProductos=async(req,res)=>{

   try {

    const body = req.body
    const products= new Producto(body)
    const productSaved=await products.save()
    console.log(userSaved)
    
    res.status(201).json({
    ok: true,
    msg: "creando productos",
    productSaved
}) 
    
   } catch (error) {
    console.log(error)
        return res.status(500).json({
            ok: false,
            msg:"error al crear producto",
            

        })
   }

    
}

const updateProductos=async(req,res)=>{


    try {
        const body = update(req.body)
        const products
        res.status(200).json({"ok": true,
            "msg": "actualizando producto por su id"
        }) 
    } catch (error) {
        
    }
        
}

const deleteProductos=async(req,res)=>{
    res.status(200).json({"ok": true,
    "msg": "eliminando producto por su id"
})}


/*----------------------------------------*/


/*const getServicios=async(req, res)=>{
    try{
       const servicios= await servicio.find()
        res.render('servicios',{
            descripcion:'esta es la descripción de servicios',
            servicios
        })
    } catch(error){

    }    
}
*/
const getServicios=async(req, res)=>{
    try{
        const services = await Servicio.find()
        console.log(services)
    
        return res.status(200).json(
            {ok: true,
            msg: "leyendo servicios",
            total_results: services.length,
            data: services
        })     
    }
    
    catch (error){
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg:"error al leer servicios"
        })
    }
}

const getServiciosByID=async(req, res)=>{}

const createServicios=async(req, res)=>{
    try {

        const body = req.body
        const services= new Servicio(body)
        const serviceSaved=await services.save()
        console.log(serviceSaved)
        
        res.status(201).json({
        ok: true,
        msg: "creando servicio",
        serviceSaved
    }) 
        
       } catch (error) {
        console.log(error)
            return res.status(500).json({
                ok: false,
                msg:"error al crear servicio",
                
    
            })
       }
    
        
}

const updateServicios=async(req, res)=>{}

const deleteServicios=async(req, res)=>{}


module.exports= {
    getIndice,
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

}






