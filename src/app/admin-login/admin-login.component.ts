import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { login } from '../dataType';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, HttpClientModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  userInput:FormGroup | any;
  submitted: any;
   constructor(private formBuilder:FormBuilder, private router:Router, private http:HttpClient){
      this.userInput = this.formBuilder.group({
         userName:['', Validators.required],
          password:['', Validators.required],
      })
   }
  
   get f(){
      return this.userInput.controls;
   }
  
   onSubmit(loginData:login){
   this.submitted = true;   
   this.http.post('http://localhost:5000/login', loginData).subscribe((result:any)=>{
      if(result){         
         localStorage.setItem("admin", JSON.stringify(result))
         this.router.navigate(['/admin-dashboard'])
      }
   })
}
}
