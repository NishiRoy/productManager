import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  createProduct(values){
    console.log('create service',values);
    return this._http.post('/create',values);
    }

  getAllProducts(){
    console.log('Get all Service');
    return this._http.get('/products');
  }

  getAProduct(id){
    console.log('get a product Service');
    return this._http.get('/product/'+id);
  }

  editAProduct(values){
    console.log('Edit a product Service');
    return this._http.post('/edit',values);
  }

  deleteAProduct(id){
    console.log('Delete a product Service');
    return this._http.get('/destroy/'+id);
  }
}
