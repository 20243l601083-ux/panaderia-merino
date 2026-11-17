const express = require('express');
const router = express.Router();

const pagoController = require('../controllers/pagoController');

/**
 * @swagger
 * /pagos/crear-preferencia:
 *   post:
 *     summary: Crear preferencia de pago en Mercado Pago
 *     description: Crea una preferencia de pago para un pedido y devuelve la información necesaria para iniciar el checkout de Mercado Pago.
 *     tags:
 *       - Pagos
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *             properties:
 *               title:
 *                 type: string
 *                 example: Pedido Panadería Merino
 *               description:
 *                 type: string
 *                 example: Pedido de prueba
 *               amount:
 *                 type: number
 *                 example: 100
 *               external_reference:
 *                 type: string
 *                 example: pedido-prueba-001
 *     responses:
 *       200:
 *         description: Preferencia de Mercado Pago creada correctamente
 *       400:
 *         description: El monto es obligatorio
 *       500:
 *         description: Error al crear la preferencia de Mercado Pago
 */

router.post('/crear-preferencia', pagoController.crearPreferencia);

module.exports = router;
