import { Component, ViewChildren, QueryList } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Box } from '../modelo/box';
import { MysteryService } from '../services/mystery.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../modelo/customer';
import { CustomerService } from '../services/customer.service';
import { Order } from '../modelo/order';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fecha', 'estrellas', 'supermercado', 'stock', 'precio'];
  dataSource = new MatTableDataSource<Box>();
  myForm!: FormGroup;
  customer!: Customer;
  mysteryBox?:Box;
  idCustomer: any;
  mysteryBoxId:any;
  constructor(private mysteryService:MysteryService,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private orderService:OrderService){}
  ngOnInit(): void {
    this.getMysteryBoxes();
    this.idCustomer=this.route.snapshot.paramMap.get('id');
  }
  getMysteryBoxes(){
    console.log('a');
    this.mysteryService.getMysteryBoxes().subscribe((data) => {
      console.log('respuesta de mystery boxes: ', data);
      this.dataSource=new MatTableDataSource<Box>(data);
    });
  }
  getCheckBox(mysteryBoxId:number){
    this.mysteryBoxId=mysteryBoxId;
  }
  addOrder(){
    if(this.mysteryBoxId!=null){
    this.mysteryService.getMysteryBoxId(this.mysteryBoxId).subscribe((data) => {
      console.log('respuesta de mystery boxes: ', data);
      this.mysteryBox=data;
    });
    console.log(this.mysteryBox);
    const order: Order = {
      id: 0,
      mysteryBoxId: this.mysteryBoxId,
      customerId:this.idCustomer
    };
    console.log("va a agregar una orden", order);
    this.orderService.addOrders(order).subscribe({
      next: (data)=> {
        this.snackBar.open('La orden fue registrada con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['/customer/'+this.idCustomer]);
      },
      error: (err) => {
        console.log(err);
        this.snackBar.open('Hubo un error, la orden no pudo ser registrada', '', {
          duration: 3000,
        });
      },
    });
    }
    else{
      this.snackBar.open('Seleccione una mystery box', '', {
        duration: 3000,
      });
    }

  }

}
