const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

// Middlewares de seguridad
const verifyToken = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/checkRole');

/**
 * @swagger
 * tags:
 *   name: Reportes
 *   description: Generación de reportes desde vistas SQL de la base de datos
 */

/**
 * @swagger
 * /reportes/gastos:
 *   get:
 *     summary: Obtener reporte de gastos operativos
 *     description: Extrae la información estructurada desde la vista vw_reporte_gastos.
 *     tags:
 *       - Reportes
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Reporte de gastos obtenido correctamente
 *       401:
 *         description: Token no proporcionado o inválido
 *       403:
 *         description: Usuario sin permisos de administrador
 */
router.get('/gastos', verifyToken, checkRole('admin'), reporteController.obtenerReporteGastos);

/**
 * @swagger
 * /reportes/productos:
 *   get:
 *     summary: Obtener reporte de productos e inventario
 *     description: Extrae la información estructurada desde la vista vw_reporte_productos.
 *     tags:
 *       - Reportes
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Reporte de productos obtenido correctamente
 *       401:
 *         description: Token no proporcionado o inválido
 *       403:
 *         description: Usuario sin permisos de administrador
 */
router.get('/productos', verifyToken, checkRole('admin'), reporteController.obtenerReporteProductos);

/**
 * @swagger
 * /reportes/pedidos:
 *   get:
 *     summary: Obtener reporte general de pedidos
 *     description: Extrae la información estructurada desde la vista vw_reporte_pedidos.
 *     tags:
 *       - Reportes
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Reporte de pedidos obtenido correctamente
 *       401:
 *         description: Token no proporcionado o inválido
 *       403:
 *         description: Usuario sin permisos de administrador
 */
router.get('/pedidos', verifyToken, checkRole('admin'), reporteController.obtenerReportePedidos);

/**
 * @swagger
 * /reportes/clientes:
 *   get:
 *     summary: Obtener reporte de clientes registrados
 *     description: Extrae la información estructurada desde la vista vw_reporte_clientes.
 *     tags:
 *       - Reportes
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Reporte de clientes obtenido correctamente
 *       401:
 *         description: Token no proporcionado o inválido
 *       403:
 *         description: Usuario sin permisos de administrador
 */
router.get('/clientes', verifyToken, checkRole('admin'), reporteController.obtenerReporteClientes);

/**
 * @swagger
 * /reportes/empleados:
 *   get:
 *     summary: Obtener reporte de empleados y nómina
 *     description: Extrae la información estructurada desde la vista vw_reporte_empleados.
 *     tags:
 *       - Reportes
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Reporte de empleados obtenido correctamente
 *       401:
 *         description: Token no proporcionado o inválido
 *       403:
 *         description: Usuario sin permisos de administrador
 */
router.get('/empleados', verifyToken, checkRole('admin'), reporteController.obtenerReporteEmpleados);

module.exports = router;