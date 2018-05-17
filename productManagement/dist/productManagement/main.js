(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingcomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingcomponent", function() { return routingcomponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/product-create/product-create.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'productcreate', component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_4__["ProductCreateComponent"] },
    { path: 'productlist', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"], children: [
            { path: 'edit/:id', component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_3__["ProductEditComponent"] },
        ] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingcomponent = [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"], _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_3__["ProductEditComponent"], _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_4__["ProductCreateComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:50px;\r\n    width:150px;\r\n}\r\nh1{\r\n    color:#3b5998;\r\n    \r\n}\r\n.wrapper{\r\n    text-align:center;\r\n    border:5px solid #3b5998;\r\n    background-color: #e6f2ff;\r\n    width:700px;\r\n    height:100%;\r\n    margin:0 auto;\r\n    border-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n  <h1>\n   {{ title }}\n  </h1>\n  <button class='nav' [routerLink]=\"['home']\">Home</button>\n  <button class='nav' [routerLink]=\"['productlist']\">Product-List</button>\n  <button class='nav' [routerLink]=\"['productcreate']\">Product-Create</button>\n\n  <button class='nav' (click)=\"trythis()\" [ngStyle]=\"{'background-color': color}\">Click Me</button>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_productservice) {
        this._productservice = _productservice;
        this.title = 'Product Management';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.trythis = function () {
        this.color = 'green';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingcomponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\ncolor:#3b5998;\r\nfont-size: 16px;\r\nfont-weight:400;\r\n}\r\n\r\n.text{\r\n\r\n    border:2 px solid #e9ebee;\r\n    border-radius:5px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">\n<p>\n  Welcome to Project Product Management! <br/>\n  Here we can manage a set of products. <br/>\n  You are able to create products,<br/> remove old products, and edit products. \n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,h2{\r\n    color:gray;\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  The page that you are looking for was not found. \n\n</h1>\n\n<h2>\n  Please check the url and try again...\n</h2>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product-create/product-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-create/product-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:50px;\r\n    width:150px;\r\n}\r\nh1,h2{\r\n    color:#3b5998;\r\n    \r\n}\r\n.container{\r\n    text-align:center;\r\n    border:5px solid #3b5998;\r\n    background-color: #e6f2ff;\r\n    width:700px;\r\n    height:100%;\r\n    margin:0 auto;\r\n    border-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/product-create/product-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-create/product-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <h2>Create a New Product</h2>\n    <form #loginForm=\"ngForm\" (submit)='onSubmit($event)'>\n        Title : <input type=\"text\" name=\"product.title\"[(ngModel)]=\"product.title\" required/>*<br/><br/>\n        Price : <input type=\"text\" name=\"product.price\"[(ngModel)]=\"product.price\"/>*<br/><br/>\n        Image : <input type=\"text\" name=\"product.image\"[(ngModel)]=\"product.image\"/><br/><br/>\n        <div *ngIf='errorsVal'>\n            <p *ngFor='let err of errors'> {{err.message}}</p>\n                   \n            </div>\n        <button type=\"submit\" [disabled]=\"loginForm.form.invalid\" class=\"btn\">Create</button> &nbsp; &nbsp;\n        <button class='btn' (click)='cancelCreate()'>Cancel</button><br/><br/>\n    </form>\n    \n"

/***/ }),

/***/ "./src/app/product-create/product-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-create/product-create.component.ts ***!
  \************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(route, router, _productservice) {
        this.route = route;
        this.router = router;
        this._productservice = _productservice;
        this.errors = [];
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.product = { title: '', price: 0, image: '' };
    };
    ProductCreateComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.errors = [];
        if (this.product.title == '') {
            this.errorsVal = true;
            this.errors.push({ 'message': 'Your product should have a name Yo!' });
        }
        else if (this.product.title.length < 4) {
            this.errorsVal = true;
            this.errors.push({ 'message': 'longer name needed !' });
        }
        else if (this.product.price == 0 || this.product.price == null) {
            this.errorsVal = true;
            this.errors.push({ 'message': "Price is mandatory" });
        }
        else {
            this.errorsVal = false;
            this.errors = [];
            console.log("I was here", this.product);
            var temp = this._productservice.createProduct(this.product);
            temp.subscribe(function (data) {
                if (data['message'] == 'error') {
                    _this.errorsVal = true;
                    for (var key in data['data'].errors) {
                        _this.errors.push(data['data'].errors[key]);
                        console.log("console errors", data['data'].errors[key]);
                    }
                }
                else {
                    _this.errorsVal = false;
                    _this.router.navigate(['/productlist']);
                }
            });
        }
    };
    ProductCreateComponent.prototype.cancelCreate = function () {
        this.product = { title: '', price: 0, image: '' };
        this.router.navigate(['/productlist']);
    };
    ProductCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.css */ "./src/app/product-create/product-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n    <form (submit)='onSubmit($event)'>\n        Title : <input type=\"text\" name=\"product.title\"[(ngModel)]=\"product.title\"/>*<br/><br/>\n        Price : <input type=\"text\" name=\"product.price\"[(ngModel)]=\"product.price\"/>*<br/><br/>\n        Image : <input type=\"text\" name=\"product.image\"[(ngModel)]=\"product.image\"/><br/><br/>\n        <div *ngIf='errorsVal'>\n            <p *ngFor='let err of errors'> {{err.message}}</p>\n                   \n            </div>\n        <button type=\"submit\" class=\"btn\">Edit</button> &nbsp; &nbsp;\n        <button class='btn' (click)='cancelCreate()'>Cancel</button><br/><br/>\n        </form>\n</div>\n"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(route, router, _productservice) {
        this.route = route;
        this.router = router;
        this._productservice = _productservice;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.prodId = this.route.snapshot.paramMap.get('id');
        this.product = { title: '', price: 0, image: '', id: this.prodId };
        this.edit();
    };
    ProductEditComponent.prototype.edit = function () {
        var _this = this;
        console.log("Editing this product");
        var tempValue = this._productservice.getAProduct(this.prodId);
        tempValue.subscribe(function (data) {
            console.log(data);
            _this.product.title = data['data'][0].title;
            _this.product.price = data['data'][0].price;
            _this.product.image = data['data'][0].image;
        });
    };
    ProductEditComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.errors = [];
        if (this.product.title == '') {
            this.errorsVal = true;
            this.errors.push({ 'message': 'Your product should have a name Yo!' });
        }
        else if (this.product.title.length < 4) {
            this.errorsVal = true;
            this.errors.push({ 'message': 'longer name needed !' });
        }
        else if (this.product.price == 0 || this.product.price == null) {
            this.errorsVal = true;
            this.errors.push({ 'message': "Price is mandatory" });
        }
        else {
            this.errorsVal = false;
            this.errors = [];
            console.log("I was here", this.product);
            var temp = this._productservice.editAProduct(this.product);
            temp.subscribe(function (data) {
                if (data['message'] == 'error') {
                    _this.errorsVal = true;
                    for (var key in data['data'].errors) {
                        _this.errors.push(data['data'].errors[key]);
                        console.log("console errors", data['data'].errors[key]);
                    }
                }
                else {
                    _this.errorsVal = false;
                    _this.router.navigate(['/productlist']);
                }
            });
        }
    };
    ProductEditComponent.prototype.cancelCreate = function () {
        this.product = { title: '', price: 0, image: '' };
        this.myEvent.emit();
        this.router.navigate(['/productlist']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductEditComponent.prototype, "myEvent", void 0);
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height:50%;\r\n    width:50%;\r\n}\r\n.results{\r\n    border:2px solid #3b5998;\r\n    color:#3b5998;\r\n}\r\n.btn{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:50px;\r\n    width:150px;\r\n}\r\n.items{\r\n    font-size: 20px;\r\n    font-weight:600;\r\n}"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results\" (myEvent)='onloadAgain()'>\n  <h2>Products List</h2>\n \n    <table *ngFor=\"let product of products\">\n        <tr>\n         \n            <td *ngIf=\"product.image\">\n                <img src='{{product.image}}'>\n            </td> \n            <td>\n\n            </td>           \n        </tr>\n        <tr>\n            <td>\n               <span class=\"items\"> {{product.title}}\n            \n            &nbsp; &nbsp; &nbsp; \n                $ {{product.price}}.00</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <button class='btn' [routerLink]=\"['edit',product._id]\">Edit</button>\n            \n                <button class='btn'(click)='delete(product._id)'>Delete</button>\n            </td>\n        </tr>\n    </table>\n  \n<router-outlet ></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(route, router, _productservice) {
        this.route = route;
        this.router = router;
        this._productservice = _productservice;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.onload();
    };
    ProductListComponent.prototype.onloadAgain = function () {
        console.log("I was invoked");
    };
    ProductListComponent.prototype.onload = function () {
        var _this = this;
        var result = this._productservice.getAllProducts();
        result.subscribe(function (data) {
            console.log('got all products', data);
            if (data['message'] == 'error') {
                _this.errorsVal = true;
                _this.errors = data['data'];
            }
            else {
                _this.errorsVal = false;
                _this.products = data['data'];
            }
        });
    };
    ProductListComponent.prototype.delete = function (productId) {
        console.log('product deleted', productId);
        var tempValue = this._productservice.deleteAProduct(productId);
        tempValue.subscribe(function (data) { return console.log(data); });
        this.onload();
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = /** @class */ (function () {
    function ProductsService(_http) {
        this._http = _http;
    }
    ProductsService.prototype.createProduct = function (values) {
        console.log('create service', values);
        return this._http.post('/create', values);
    };
    ProductsService.prototype.getAllProducts = function () {
        console.log('Get all Service');
        return this._http.get('/products');
    };
    ProductsService.prototype.getAProduct = function (id) {
        console.log('get a product Service');
        return this._http.get('/product/' + id);
    };
    ProductsService.prototype.editAProduct = function (values) {
        console.log('Edit a product Service');
        return this._http.post('/edit', values);
    };
    ProductsService.prototype.deleteAProduct = function (id) {
        console.log('Delete a product Service');
        return this._http.get('/destroy/' + id);
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rohit\Desktop\coding_dojo_mean\Angular\ProductManagement\productManagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map