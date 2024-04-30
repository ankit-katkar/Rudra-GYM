import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, RouterLink, CurrencyPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  productQuantity:number = 1
  cartItems:any;

  priceSummary:any={
    price:0,
    tax:0,
    discount:0,
    deliveryCharges:0,
    total:0
  }

  constructor(){}

  ngOnInit(): void {
    this.getProduct();
  };
  
  Quantity(val:string){
      if(this.productQuantity<5 && val==='max'){
        this.productQuantity+=1
      }else if(this.productQuantity>1 && val==='min'){
        this.productQuantity-=1
      }
    };

    getProduct(){
      let cardStore:any = localStorage.getItem("productCart");
      let data = cardStore && JSON.parse(cardStore)
      this.cartItems = data;

      let price=0;
      data.forEach((item:any)=>{
        if(item.productQuantity){
          price = price+(+item.price* + item.productQuantity);
        }      
      });
      this.priceSummary.price=price;  
      this.priceSummary.tax=price/10;
      this.priceSummary.discount=price/10;
      this.priceSummary.deliveryCharges=40;
      this.priceSummary.total=price+(price/10)+40-(price/10);
    }
}
