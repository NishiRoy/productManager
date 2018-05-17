import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import {Router } from '@angular/router';
import { ActivatedRoute }from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private _productservice:ProductsService) { }

  errors:any;
  errorsVal:Boolean;
  products:any;

  ngOnInit() {

    this.onload();

  }

  onloadAgain(){
    console.log("I was invoked");
  }

  onload(){

    let result=this._productservice.getAllProducts();

    result.subscribe(data=>{
      console.log('got all products',data);
      if(data['message']=='error'){
        this.errorsVal=true;
        this.errors=data['data'];
        
      }
      else{
        this.errorsVal=false;
        this.products=data['data'];
      }
    })
  }


  delete(productId){
    console.log('product deleted',productId);

    let tempValue=this._productservice.deleteAProduct(productId);

    tempValue.subscribe(data=>console.log(data));

    this.onload();

  }
 


}
