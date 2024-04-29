import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from "../header/header.component";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Products } from '../dataType';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FontAwesomeModule, CurrencyPipe, HttpClientModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  productList:Products | any; 
  btnChange = false;
  cartItems=0;

  constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    this.List();

    let cartData = localStorage.getItem('productCart')
    if(cartData){
      this.cartItems = JSON.parse(cartData).length;
    }
  }

  List(){
    this.http.get<Products>("http://localhost:5000/product-list").subscribe((result)=>{
      this.productList = result;
      })
  }
}
