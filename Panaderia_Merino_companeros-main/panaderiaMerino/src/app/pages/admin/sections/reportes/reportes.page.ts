import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReporteService } from 'src/app/services/reportes.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class ReportesPage implements OnInit {
  tipoReporte: 'gastos' | 'productos' | 'pedidos' | 'clientes' | 'empleados' = 'gastos';
  datos: any[] = [];
  columnas: string[] = [];
  cargando = false;
  error = '';

  opciones = [
    { id: 'gastos', titulo: 'Reporte de Gastos' },
    { id: 'productos', titulo: 'Reporte de Productos' },
    { id: 'pedidos', titulo: 'Reporte de Pedidos' },
    { id: 'clientes', titulo: 'Reporte de Clientes' },
    { id: 'empleados', titulo: 'Reporte de Empleados' }
  ] as const;

  constructor(private reporteService: ReporteService) {}

  ngOnInit() {
    this.seleccionarReporte('gastos');
  }

  // Se ejecuta automáticamente cada vez que navegas a la vista de Reportes
  ionViewWillEnter() {
    this.seleccionarReporte(this.tipoReporte);
  }

  seleccionarReporte(tipo: 'gastos' | 'productos' | 'pedidos' | 'clientes' | 'empleados') {
    this.tipoReporte = tipo;
    this.cargando = true;
    this.error = '';
    this.datos = [];
    this.columnas = [];

    const peticiones = {
      gastos: this.reporteService.getReporteGastos(),
      productos: this.reporteService.getReporteProductos(),
      pedidos: this.reporteService.getReportePedidos(),
      clientes: this.reporteService.getReporteClientes(),
      empleados: this.reporteService.getReporteEmpleados()
    };

    peticiones[tipo].subscribe({
      next: (res: any) => {
        const lista = Array.isArray(res) ? res : (res.data || res.reporte || []);
        this.datos = lista;
        if (lista.length > 0) {
          this.columnas = Object.keys(lista[0]);
        }
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar reporte:', err);
        this.error = 'No se pudo cargar el reporte. Verifica tu sesión de administrador o que el backend esté activo.';
        this.cargando = false;
      }
    });
  }

  exportarExcel() {
    if (!this.datos || this.datos.length === 0) return;

    const hoja: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.datos);
    const libro: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, `Reporte_${this.tipoReporte}`);

    const fecha = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(libro, `Reporte_${this.tipoReporte}_PanaderiaMerino_${fecha}.xlsx`);
  }
}