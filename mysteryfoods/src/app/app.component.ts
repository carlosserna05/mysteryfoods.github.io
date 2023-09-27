import { Component } from '@angular/core';
import { Box } from './modelo/box';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'supermercado', 'precio', 'stock', 'fecha', 'estrellas'];
  // clickedRows = new Set<Box>();
  // boxArreglo: Box[]=[
  //   {id: 1,  nombre: "Mystery box de Embutidos",  descripcion: "3 productos de embutidos", supermercado: "Plaza Vea", precio: 15.20, stock: 5, fecha: "30/05/23",  estrellas: 4.3},
  //   {id: 2,  nombre: "Mystery box de Lácteos",  descripcion: "5 productos de lacteos", supermercado: "Wong", precio: 12.50, stock: 2, fecha: "01/06/23",  estrellas: 3.7},
  //   {id: 3,  nombre: "Mystery box de Postres",  descripcion: "2 productos de postres", supermercado: "Tottus", precio: 10.00, stock: 1, fecha: "07/06/23",  estrellas: 5.0},
  //   {id: 4,  nombre: "Mystery box de Frutas",  descripcion: "4 frutas", supermercado: "Wong", precio: 17.50, stock: 3, fecha: "22/05/23", estrellas: 4.5},
  //   {id: 5,  nombre: "Mystery box de Legumbres",  descripcion: "7 productos de legumbres", supermercado: "Vivanda", precio: 15.50, stock: 4, fecha: "15/05/23",  estrellas: 4.6},
  //   {id: 6,  nombre: "Mystery box de Verduras",  descripcion: "5 verduras", supermercado: "Metro", precio: 18.00, stock: 2, fecha: "09/05/23",  estrellas: 3.8}
  // ];

  // dataSource = new MatTableDataSource(this.boxArreglo);
  // boxSeleccionado: Box = new Box();

  //   grabarBox(){
  //     if(this.boxSeleccionado.id==0){
  //       this.boxSeleccionado.id= this.boxArreglo.length+1;
  //     this.boxArreglo.push(this.boxSeleccionado);
  //     }
  //     this.boxSeleccionado= new Box();
  //   }
  //   cancelarBox(){
  //     this.boxSeleccionado= new Box();
  //   }
  //   editarAlAbrir(mBox: Box){
  //     this.boxSeleccionado= mBox;
  //   }
  //   limpiarBox(){
  //     if(confirm("Eliminar Mystery Box?")){
  //       this.boxArreglo = this.boxArreglo.filter(id => id !== this.boxSeleccionado );
  //       this.boxSeleccionado= new Box();
  //     }
  //   }

}
