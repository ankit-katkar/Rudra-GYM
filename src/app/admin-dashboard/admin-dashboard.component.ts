import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Products } from '../dataType';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../Pipe/filter.pipe';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HttpClientModule,
    FontAwesomeModule,
    RouterLink,
    NgxPaginationModule,
    FormsModule,
    FilterPipe,
    AdminHeaderComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  ProductsList: Products | any;
  deleteProductMessage:String | undefined;
  totalItems:any;
  faEdit = faEdit;
  faTrash = faTrash;
  totalLength: any;
  page:number = 1;
  searchText:string = '';
  

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.productList();
    console.warn(this.searchText);
    
  }

  productList() {
    this.http.get('http://localhost:5000/product-list').subscribe((result) => {
        if (result) {
          this.ProductsList = result;
        }  
      });
  };
  
  deleteProduct(_id:Number){
    console.warn(_id);
    this.http.delete(`http://localhost:5000/delete-product/${_id}`).subscribe((result)=>{
      if(result){
        this.deleteProductMessage = "Product is deleted successfully"
        this.productList();
      }setTimeout(() => {
        this.deleteProductMessage = undefined;
      }, 3000);
      
    })
    
  }
}
