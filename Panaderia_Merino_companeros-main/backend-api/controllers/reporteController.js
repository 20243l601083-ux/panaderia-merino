const sequelize = require('../config/database');

// Reporte 1: Gastos operativos desde la vista vw_reporte_gastos
const obtenerReporteGastos = async (req, res) => {
  try {
    const [resultados] = await sequelize.query('SELECT * FROM vw_reporte_gastos');
    res.status(200).json(resultados);
  } catch (error) {
    console.error('Error al obtener reporte de gastos:', error);
    res.status(500).json({ error: 'Error al generar el reporte de gastos' });
  }
};

// Reporte 2: Inventario de productos desde la vista vw_reporte_productos
const obtenerReporteProductos = async (req, res) => {
  try {
    const [resultados] = await sequelize.query('SELECT * FROM vw_reporte_productos');
    res.status(200).json(resultados);
  } catch (error) {
    console.error('Error al obtener reporte de productos:', error);
    res.status(500).json({ error: 'Error al generar el reporte de productos' });
  }
};

// Reporte 3: Pedidos desde la vista vw_reporte_pedidos
const obtenerReportePedidos = async (req, res) => {
  try {
    const [resultados] = await sequelize.query('SELECT * FROM vw_reporte_pedidos');
    res.status(200).json(resultados);
  } catch (error) {
    console.error('Error al obtener reporte de pedidos:', error);
    res.status(500).json({ error: 'Error al generar el reporte de pedidos' });
  }
};

// Reporte 4: Clientes desde la vista vw_reporte_clientes
const obtenerReporteClientes = async (req, res) => {
  try {
    const [resultados] = await sequelize.query('SELECT * FROM vw_reporte_clientes');
    res.status(200).json(resultados);
  } catch (error) {
    console.error('Error al obtener reporte de clientes:', error);
    res.status(500).json({ error: 'Error al generar el reporte de clientes' });
  }
};

// Reporte 5: Empleados desde la vista vw_reporte_empleados
const obtenerReporteEmpleados = async (req, res) => {
  try {
    const [resultados] = await sequelize.query('SELECT * FROM vw_reporte_empleados');
    res.status(200).json(resultados);
  } catch (error) {
    console.error('Error al obtener reporte de empleados:', error);
    res.status(500).json({ error: 'Error al generar el reporte de empleados' });
  }
};

module.exports = {
  obtenerReporteGastos,
  obtenerReporteProductos,
  obtenerReportePedidos,
  obtenerReporteClientes,
  obtenerReporteEmpleados
};