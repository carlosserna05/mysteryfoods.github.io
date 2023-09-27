import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../modelo/customer';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  customer!:Customer;
  myForm!:FormGroup;
  idCustomer:any;

  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar,private customerService: CustomerService,private router:Router
    ,private route:ActivatedRoute){
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void{

  }

  ingresarLogin() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    this.customerService.getCustomerByName(usuario).subscribe({
      next:(data)=>{
      this.customer=data;
      if(this.customer.password==password){
        this.fakeLoading();
        this.router.navigate(['/customer/'+this.customer.id]);
      }
      else
      {
        this._snackbar.open('No ha ingresado la contraseña correctamente', '', {
          duration: 3000,
        });
        throw this.error;
      }
      },
      error: (err)=>{
        console.log(err);
        this._snackbar.open('No ha ingresado un nombre de usuario válido', '', {
          duration: 3000,
        });
      }

    });


  }

  error(){
    this._snackbar.open('Usuario o contraseña inválidos', '', {duration: 5000, horizontalPosition: 'center', verticalPosition: 'bottom'})
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() =>{
        this.loading = false;
    }, 1500);
  }

}
