import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../modelo/customer';
import { CustomerService } from '../services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../modelo/order';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']
})
export class CustomerInformationComponent {
  displayedColumns: string[] = ['id', 'date', 'mysteryBoxName','mysteryBoxDescription', 'price'];
  dataSource = new MatTableDataSource<Order>();
  myForm!: FormGroup;
  customer!: Customer;
  idCustomer: any;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private orderService:OrderService
  ) {

  }

  ngOnInit(): void {
    this.idCustomer = this.route.snapshot.paramMap.get('id');

    this.orderService.getOrdersByCustomerId(this.idCustomer).subscribe((data) => {
      console.log('respuesta de mystery boxes: ', data);
      this.dataSource=new MatTableDataSource<Order>(data);
    });

    this.customerService.getCustomer(this.idCustomer).subscribe((data) => {
      this.customer = data;
      console.log(this.customer);
      this.myForm = this.fb.group({
        id: [this.idCustomer, [Validators.required]],
        name: [this.customer.name, [Validators.required]],
        email: [this.customer.email, [Validators.required]],
        password: [this.customer.password, [Validators.required]],
        phonenumber: [this.customer.phonenumber, [Validators.required]]
      });
    });
  }
  saveCustomer(): void{
    console.log("va a editar informacion");

    const customer: Customer = {
      id: this.idCustomer,
      name: this.myForm.get('name')!.value,
      phonenumber: this.myForm.get('phonenumber')!.value,
      email: this.myForm.get('email')!.value,
      password: this.myForm.get('password')!.value,

    };
    console.log(customer);
    this.customerService.editCustomer(this.idCustomer,customer).subscribe({
      next: (data) => {
        this.snackBar.open('Los datos fueron guardados exitosamente!', '', {
          duration: 3000,
        });
        this.router.navigate(['/customer/'+this.idCustomer]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  realizarOrden(): void{

    this.router.navigate(['/order/'+this.idCustomer]);
  }
}
