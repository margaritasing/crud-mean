import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;

//inyectando el formulario reactivo
  constructor(private fb: FormBuilder, private router:Router) { 
    this.productoForm = this.fb.group({
      producto:['', Validators.required],
      categoria:['', Validators.required],
      ubicacion:['', Validators.required],
      precio:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarProductos(){   
    const PRODUCTO: Producto = {
      nombre:this.productoForm.get('producto')?.value,
      categoria:this.productoForm.get('categoria')?.value,
      ubicacion:this.productoForm.get('ubicacion')?.value,
      precio:this.productoForm.get('precio')?.value,
    }
    this.router.navigate(['/'])    
  }

}
