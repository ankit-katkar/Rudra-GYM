import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  userInput:FormGroup | any;
  submitted: any;
  
   constructor(private formBuilder:FormBuilder,){
      this.userInput = this.formBuilder.group({
          name:['', Validators.required],
          email:['', Validators.required],
          comment:['', Validators.required]
      })
   }
  
   get f(){
      return this.userInput.controls;
   }
  
   onSubmit(){
   this.submitted = true;
   }
}
