import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Products } from '../dataType';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CurrencyPipe, HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  viewProduct: Products | any;
  productQuantity:number = 1
  removeCart = false;    

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient,){}

  ngOnInit(): void {
    let viewProductID: any = this.activatedRoute.snapshot.paramMap.get('_id');
    viewProductID && this.http.get(`http://localhost:5000/product-detail/${viewProductID}`)
        .pipe(toArray()).subscribe((result) => {
          console.warn(result);
          this.viewProduct = result;
        });          
  };  

  
  Quantity(val:string){
    if(this.productQuantity<5 && val==='max'){
      this.productQuantity+=1
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1
    }
  }

  addToCart(){
    if(this.viewProduct){
      let cartData:any = [];
      let localCart:any = localStorage.getItem('productCart');
      if(!localCart){
        localStorage.setItem('productCart', JSON.stringify(this.viewProduct));
      }else{
        cartData = JSON.parse(localCart);
        cartData.push(this.viewProduct);
        localStorage.setItem('productCart', JSON.stringify(cartData));
      }
    }
  }
}
