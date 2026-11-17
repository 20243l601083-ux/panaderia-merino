import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  // Si en tus otros servicios usas una URL directa como 'http://localhost:3000/api', puedes ponerla aquí si environment.apiUrl no existe
  private api = `${(environment as any).apiUrl || 'http://localhost:3000/api'}/reportes`;

  constructor(private http: HttpClient) {}

  private headers() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
  }

  getReporteGastos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/gastos`, this.headers());
  }

  getReporteProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/productos`, this.headers());
  }

  getReportePedidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/pedidos`, this.headers());
  }

  getReporteClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/clientes`, this.headers());
  }

  getReporteEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/empleados`, this.headers());
  }
}