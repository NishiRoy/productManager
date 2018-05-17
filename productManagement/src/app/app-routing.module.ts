import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsService } from './products.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes=[
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'productcreate',component:ProductCreateComponent},
  {path:'productlist',component:ProductListComponent,children:[
    {path:'edit/:id',component:ProductEditComponent},
  ]},
  {path:'**',component:PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[  ProductListComponent,ProductEditComponent, ProductCreateComponent,PageNotFoundComponent, HomeComponent]
