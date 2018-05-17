import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import {Router } from '@angular/router';
import { ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product:any;
  errors=[];
  errorsVal:Boolean;

  constructor(private route:ActivatedRoute,private router:Router,private _productservice:ProductsService) { }

  ngOnInit() {

    this.product={title:'',price:0,image:''};

  }

  onSubmit(event){

    event.preventDefault();
    this.errors=[];

    if(this.product.title=='')
    {
      this.errorsVal=true;
      this.errors.push({'message':'Your product should have a name Yo!'});
    }
    else if(this.product.title.length<4)
    {
      this.errorsVal=true;
      this.errors.push({'message':'longer name needed !'});
    }
    else if(this.product.price==0 || this.product.price==null)
    {
      this.errorsVal=true;
      this.errors.push({'message':"Price is mandatory"});
    }
    else
    {
          this.errorsVal=false;
          this.errors=[];
            console.log("I was here",this.product);
            let temp=this._productservice.createProduct(this.product);

        temp.subscribe(data=>{

              if(data['message']=='error'){
                this.errorsVal=true;

                for(let key in data['data'].errors){
                  this.errors.push(data['data'].errors[key]);
                console.log("console errors",data['data'].errors[key]);
                }
              }
              else
              {
                this.errorsVal=false;
                this.router.navigate(['/productlist']);
              }

    });
  }
  }

  cancelCreate(){

    this.product={title:'',price:0,image:''};
    this.router.navigate(['/productlist']);

  }

}
