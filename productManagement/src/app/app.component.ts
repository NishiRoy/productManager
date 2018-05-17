import { Component,OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Management';
  color:any;

  constructor(private _productservice: ProductsService){}

  ngOnInit(){

  }

  trythis(){
    this.color='green';
  }
}
