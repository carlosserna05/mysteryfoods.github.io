import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Box } from '../modelo/box';
import { MysteryService } from '../services/mystery.service';
@Component({
  selector: 'app-list-mystery',
  templateUrl: './list-mystery.component.html',
  styleUrls: ['./list-mystery.component.scss']
})
export class ListMysteryComponent {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fecha', 'estrellas', 'supermercado', 'stock', 'precio'];
  dataSource = new MatTableDataSource<Box>();
  constructor(private mysteryService:MysteryService){}
  ngOnInit(): void {
    this.getMysteryBoxes();
  }
  getMysteryBoxes(){
    console.log('a');
    this.mysteryService.getMysteryBoxes().subscribe((data) => {
      console.log('respuesta de mystery boxes: ', data);
      this.dataSource=new MatTableDataSource<Box>(data);
    });

  }

}
