import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./sections/dashboard/dashboard.page').then(m => m.DashboardPage)
      },
      {
        path: 'clientes',
        loadComponent: () => import('./sections/clientes/clientes.page').then(m => m.ClientesPage)
      },
      {
        path: 'pedidos',
        loadComponent: () => import('./sections/pedidos-cliente/pedidos-cliente.page').then(m => m.PedidosClientePage)
      },
      {
        path: 'inventario',
        loadComponent: () => import('./sections/inventario/inventario.page').then(m => m.InventarioPage)
      },
      {
        path: 'empleados',
        loadComponent: () => import('./sections/empleados/empleados.page').then(m => m.EmpleadosPage)
      },
      {
        path: 'balance',
        loadComponent: () => import('./sections/balance/balance.page').then(m => m.BalancePage)
      },
      {
        path: 'repartidores',
        loadComponent: () => import('./sections/repartidores/repartidores.page').then(m => m.RepartidoresPage)
      },
      {
        path: 'gastos',
        loadComponent: () => import('./sections/gastos/gastos.page').then(m => m.GastosPage)
      },
      {
        path: 'reportes',
        loadComponent: () => import('./sections/reportes/reportes.page').then(m => m.ReportesPage)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
