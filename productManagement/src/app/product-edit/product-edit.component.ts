import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import {Router } from '@angular/router';
import { ActivatedRoute }from '@angular/router'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Output() myEvent = new EventEmitter();
  prodId:any;
  product:any;
  errors:any;
  errorsVal:boolean;

  constructor(private route:ActivatedRoute,private router:Router,private _productservice:ProductsService) { }

  ngOnInit() {

    this.prodId=this.route.snapshot.paramMap.get('id');
    this.product={title:'',price:0,image:'',id:this.prodId};
    

    this.edit();
  }

  
  edit(){

    console.log("Editing this product");

    let tempValue=this._productservice.getAProduct(this.prodId);

    tempValue.subscribe(data=>{

      console.log(data);

      this.product.title=data['data'][0].title;
      this.product.price=data['data'][0].price;
      this.product.image=data['data'][0].image;
      
    })
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
            let temp=this._productservice.editAProduct(this.product);

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
    this.myEvent.emit();
    this.router.navigate(['/productlist']);

  }


}
