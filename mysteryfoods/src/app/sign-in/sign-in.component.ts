import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../modelo/customer';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  customer2!:Customer;
  idCustomer:any;
  form!: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar,private customerService: CustomerService,private router:Router
    ,private route:ActivatedRoute){
    this.form = this.fb.group({
      name: ['',],
      password: ['',Validators.required],
      email: ['',Validators.required],
      phonenumber: ['',Validators.required]
    })
  }

  ngOnInit(): void{

  }
  ingresarLogin() {
    const usuario = this.form.value.name;
    const customer: Customer = {
      id: 0,
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      phonenumber: this.form.value.phonenumber,
    };
    var se_repite:boolean=false;
    console.log(usuario);
    this.customerService.getCustomerByName(usuario).subscribe({
      next:(data)=>{
        this.fakeLoading();
        console.log('el usuario se repite');
        se_repite=true;
      },
      error: (err)=>{
        console.log(err);
        this._snackbar.open('No ha ingresado un nombre de usuario válido', '', {
          duration: 3000,
        });
      }
  });
    console.log(this.customer2);
    if(this.customer2!=null){
      this._snackbar.open('Ya existe una cuenta con este nombre', '', {
        duration: 3000,
      });
    }
    else if(customer.password!=null&&customer.email!=null&&customer.name!=null
      &&customer.phonenumber!=null&&this.customer2==null&&se_repite==false){
        this.customerService.addCustomer(customer).subscribe(
          (data)=>{
            this.fakeLoading();
            this._snackbar.open('El registro ha sido exitoso!', '', {
              duration: 3000,
            });
            this.router.navigate(['/home']);
        });

      }
      else if(customer.password==null)
      {
        this._snackbar.open('No ha ingresado una contraseña', '', {
          duration: 3000,
        });
      }
      else if(customer.email==null)
      {
        this._snackbar.open('No ha ingresado su email', '', {
          duration: 3000,
        });
      }
      else if(customer.phonenumber==null)
      {
        this._snackbar.open('No ha ingresado un numero de celular', '', {
          duration: 3000,
        });
      }
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() =>{
        this.loading = false;
    }, 1500);
  }

}
