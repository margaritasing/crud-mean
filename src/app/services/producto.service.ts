import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/productos/';

  constructor(private http:HttpClient) { }


  getProductos(): Observable<any> {
    return this.http.get(this.url)
  }

  eliminarProducto(_id: string): Observable<any>{
    return this.http.delete(this.url + _id)
  }

  guardarProducto( producto :Producto): Observable<any>{
    return this.http.post(this.url , producto);
  }

  obtenerProducto(_id:string): Observable<any>{
    return this.http.get(this.url + _id)
  }

  editarProducto(_id: string, producto: Producto): Observable<any>{
    return this.http.put(this.url + _id, producto)
  }

}
