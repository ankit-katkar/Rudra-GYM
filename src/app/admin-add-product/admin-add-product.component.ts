import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Products } from '../dataType';

@Component({
  selector: 'app-admin-add-product',
  standalone: true,
  imports: [AdminHeaderComponent, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.scss'
})
export class AdminAddProductComponent {
  addProduct:FormGroup | any;
  submitted:any;
  selectImage:File | any;
  formData:any = new FormData();
  addProductMessage: String | undefined;

  constructor(private fb:FormBuilder, private http:HttpClient, private route:Router){
      this.addProduct = this.fb.group({
          name:['', Validators.required],
          price:['', Validators.required],
          category:['', Validators.required],
          quantity:['', Validators.required],
          description:['', Validators.required],
          image:['', Validators.required],
      }) 
  }
  
  get f(){
      return this.addProduct.controls;
   }

   uploadImage(event:any) {
    this.selectImage = event.target.files[0];
  }
 
  ngOnInit(): void {
    
  }

  Add(data:Products){
    this.submitted = true;
    if(this.addProduct.valid){
      this.http.post("http://localhost:5000/add-product", data).subscribe((result)=>{
        if(result){
          this.addProductMessage='Product is successfully added'
        }setTimeout(()  => {
          this.addProductMessage=undefined    
          this.route.navigate(['/admin-dashboard'])
        }, 3000);
      })
    }
  }
}
