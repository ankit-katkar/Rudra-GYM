import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Products } from '../dataType';

@Component({
  selector: 'app-admin-update-product',
  standalone: true,
  imports: [
    AdminHeaderComponent,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './admin-update-product.component.html',
  styleUrl: './admin-update-product.component.scss'
})
export class AdminUpdateProductComponent {
  getProduct: FormGroup | any;
  submitted: any;
  productId: any;
  updateProductMessage: String | undefined;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private Route: Router,
    private route: ActivatedRoute
  ) {
    this.getProduct = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('_id');
    this.productId &&
      this.http.get(`http://localhost:5000/get-product/${this.productId}`).subscribe((data) => {
          this.getProduct.patchValue(data);

          // console.warn(this.Product);
        });
  }

  get f() {
    return this.getProduct.controls;
  }

  update(data: Products) {
    this.submitted = true;
    if (this.getProduct.valid) {
      this.http.put(`http://localhost:5000/update-product/${this.productId}`, data).subscribe((result) => {
          if (result) {
            this.updateProductMessage = 'Product is updated successfully';
          }
          setTimeout(() => {
            this.updateProductMessage = undefined;
            this.Route.navigate(['/admin-dashboard']);
          }, 3000);
        });
    }
  }
}
