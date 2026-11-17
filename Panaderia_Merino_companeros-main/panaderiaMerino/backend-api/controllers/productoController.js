const Producto = require('../models/Producto');
const Categoria = require('../models/Categoria');

// LISTAR PRODUCTOS
exports.listar = async (req, res) => {

    try {

        const productos = await Producto.findAll({

            where: {
                estado: true
            },

            include: [
                {
                    model: Categoria,
                    as: 'categoria'
                }
            ]

        });

        res.json({

            success: true,
            message: "Productos obtenidos correctamente",
            data: productos

        });

    } catch (error) {

        console.error("ERROR LISTAR PRODUCTOS:", error);

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


// OBTENER PRODUCTO POR ID
exports.obtener = async (req, res) => {

    try {

        const producto = await Producto.findByPk(
            req.params.id,
            {
                include: [
                    {
                        model: Categoria,
                        as: 'categoria'
                    }
                ]
            }
        );

        if (!producto) {

            return res.status(404).json({

                success: false,
                message: "Producto no encontrado"

            });

        }

        res.json({

            success: true,
            data: producto

        });

    } catch (error) {

        console.error("ERROR OBTENER PRODUCTO:", error);

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};


// CREAR PRODUCTO
exports.crear = async (req, res) => {

    try {

        console.log("DATOS RECIBIDOS CREAR PRODUCTO:", req.body);

        const producto = await Producto.create({

            id_categoria: req.body.id_categoria,

            nombre: req.body.nombre,

            descripcion: req.body.descripcion || null,

            precio: req.body.precio,

            stock: req.body.stock || 0,

            imagen_url: req.body.imagen_url || null,

            estado: true

        });

        res.status(201).json({

            success: true,

            message: "Producto creado correctamente",

            data: producto

        });

    } catch (error) {

        console.error("ERROR CREAR PRODUCTO:", error);

        console.error(
            "DETALLE POSTGRES:",
            error.parent?.detail
        );

        res.status(500).json({

            success: false,

            message: error.message,

            detalle: error.parent?.detail || null

        });

    }

};


// ACTUALIZAR PRODUCTO
exports.actualizar = async (req, res) => {

try {

    const producto = await Producto.findByPk(
        req.params.id
    );


    if (!producto) {

        return res.status(404).json({

            success:false,
            message:"Producto no encontrado"

        });

    }


    console.log("UPDATE RECIBIDO:", req.body);


    console.log(
        "ANTES:",
        producto.toJSON()
    );


    await producto.update({

        id_categoria: req.body.id_categoria,

        nombre: req.body.nombre,

        descripcion: req.body.descripcion,

        precio: req.body.precio,

        stock: req.body.stock,

        imagen_url: req.body.imagen_url

    });


    console.log(
        "DESPUES:",
        producto.toJSON()
    );


    res.json({

        success:true,

        message:"Producto actualizado correctamente",

        data:producto

    });


} catch(error){


    console.error(
        "ERROR ACTUALIZAR PRODUCTO:",
        error
    );


    res.status(500).json({

        success:false,

        message:error.message

    });


}

};


// DESACTIVAR PRODUCTO
exports.eliminar = async (req, res) => {

    try {

        const producto = await Producto.findByPk(
            req.params.id
        );

        if (!producto) {

            return res.status(404).json({

                success: false,

                message: "Producto no encontrado"

            });

        }

        await producto.update({

            estado: false

        });

        res.json({

            success: true,

            message: "Producto desactivado correctamente"

        });

    } catch (error) {

        console.error(
            "ERROR DESACTIVAR PRODUCTO:",
            error
        );

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};