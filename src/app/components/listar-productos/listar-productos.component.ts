import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos : Producto[] = [];

  constructor(private productoService: ProductoService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos(){
    this.productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listProductos = data;
    }, error =>{
      console.log(error)
    })
  }

  eliminarProducto(_id: any){
    this.productoService.eliminarProducto(_id).subscribe(data => {
      this.toastr.error('con éxito', 'El Producto Fue eliminado')
      this.obtenerProductos();
    }, error =>{
      console.log(error)
    }
    )

  }

}
