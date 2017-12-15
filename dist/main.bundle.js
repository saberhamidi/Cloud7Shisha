webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CollapseModule } from 'ngx-bootstrap';
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.template.html"),
        styles: [__webpack_require__("../../../../../src/app/app.template.css")]
    })
], AppComponent);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_order_component__ = __webpack_require__("../../../../../src/app/pages/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_address_service__ = __webpack_require__("../../../../../src/app/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile_component__ = __webpack_require__("../../../../../src/app/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guards__ = __webpack_require__("../../../../../src/app/guards/auth.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__partials_slider_slider_component__ = __webpack_require__("../../../../../src/app/partials/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_shisha_order_shisha_order_component__ = __webpack_require__("../../../../../src/app/pages/shisha-order/shisha-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_headpicker_directive__ = __webpack_require__("../../../../../src/app/directives/headpicker.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_flavour_picker_directive__ = __webpack_require__("../../../../../src/app/directives/flavour-picker.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_basket_basket_component__ = __webpack_require__("../../../../../src/app/pages/basket/basket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_tabs_tabs__ = __webpack_require__("../../../../../src/app/pages/tabs/tabs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tabs_tab__ = __webpack_require__("../../../../../src/app/pages/tabs/tab.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_order_history_order_history_component__ = __webpack_require__("../../../../../src/app/pages/order-history/order-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_order_receipt_order_receipt_component__ = __webpack_require__("../../../../../src/app/pages/order-receipt/order-receipt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_drinks_drinks_component__ = __webpack_require__("../../../../../src/app/pages/drinks/drinks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_desserts_desserts_component__ = __webpack_require__("../../../../../src/app/pages/desserts/desserts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_extras_extras_component__ = __webpack_require__("../../../../../src/app/pages/extras/extras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_address_book_address_book_component__ = __webpack_require__("../../../../../src/app/pages/address-book/address-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_extra_head_extra_head_component__ = __webpack_require__("../../../../../src/app/pages/extra-head/extra-head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_how_it_works_how_it_works_component__ = __webpack_require__("../../../../../src/app/pages/how-it-works/how-it-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_menu_menu_component__ = __webpack_require__("../../../../../src/app/pages/menu/menu.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_30_ngx_webstorage__["a" /* Ng2Webstorage */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'cloud7shisha',
                storageType: 'localStorage'
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_24__partials_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_shisha_order_shisha_order_component__["a" /* ShishaOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__directives_headpicker_directive__["a" /* HeadpickerDirective */],
            __WEBPACK_IMPORTED_MODULE_28__directives_flavour_picker_directive__["a" /* FlavourPickerDirective */],
            __WEBPACK_IMPORTED_MODULE_29__pages_basket_basket_component__["a" /* BasketComponent */],
            __WEBPACK_IMPORTED_MODULE_32__pages_checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_33__pages_tabs_tabs__["a" /* Tabs */],
            __WEBPACK_IMPORTED_MODULE_34__pages_tabs_tab__["a" /* Tab */],
            __WEBPACK_IMPORTED_MODULE_35__pages_order_history_order_history_component__["a" /* OrderHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_36__pages_order_receipt_order_receipt_component__["a" /* OrderReceiptComponent */],
            __WEBPACK_IMPORTED_MODULE_37__pages_drinks_drinks_component__["a" /* DrinksComponent */],
            __WEBPACK_IMPORTED_MODULE_38__pages_desserts_desserts_component__["a" /* DessertsComponent */],
            __WEBPACK_IMPORTED_MODULE_39__pages_extras_extras_component__["a" /* ExtrasComponent */],
            __WEBPACK_IMPORTED_MODULE_40__pages_address_book_address_book_component__["a" /* AddressBookComponent */],
            __WEBPACK_IMPORTED_MODULE_41__pages_extra_head_extra_head_component__["a" /* ExtraHeadComponent */],
            __WEBPACK_IMPORTED_MODULE_42__pages_how_it_works_how_it_works_component__["a" /* HowItWorksComponent */],
            __WEBPACK_IMPORTED_MODULE_43__pages_menu_menu_component__["a" /* MenuComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__guards_auth_guards__["a" /* AuthGuards */], __WEBPACK_IMPORTED_MODULE_18__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_19__services_address_service__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_20__services_pager_service__["a" /* PagerService */]],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_14__pages_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_13__pages_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_36__pages_order_receipt_order_receipt_component__["a" /* OrderReceiptComponent */]]
    })
], AppModule);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_order_order_component__ = __webpack_require__("../../../../../src/app/pages/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_how_it_works_how_it_works_component__ = __webpack_require__("../../../../../src/app/pages/how-it-works/how-it-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu_component__ = __webpack_require__("../../../../../src/app/pages/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__ = __webpack_require__("../../../../../src/app/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_address_book_address_book_component__ = __webpack_require__("../../../../../src/app/pages/address-book/address-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guards__ = __webpack_require__("../../../../../src/app/guards/auth.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shisha_order_shisha_order_component__ = __webpack_require__("../../../../../src/app/pages/shisha-order/shisha-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_basket_basket_component__ = __webpack_require__("../../../../../src/app/pages/basket/basket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_drinks_drinks_component__ = __webpack_require__("../../../../../src/app/pages/drinks/drinks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_desserts_desserts_component__ = __webpack_require__("../../../../../src/app/pages/desserts/desserts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_extras_extras_component__ = __webpack_require__("../../../../../src/app/pages/extras/extras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_extra_head_extra_head_component__ = __webpack_require__("../../../../../src/app/pages/extra-head/extra-head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_order_history_order_history_component__ = __webpack_require__("../../../../../src/app/pages/order-history/order-history.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_2__pages_order_order_component__["a" /* OrderComponent */] },
    { path: 'how-it-works', component: __WEBPACK_IMPORTED_MODULE_3__pages_how_it_works_how_it_works_component__["a" /* HowItWorksComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'shisha', component: __WEBPACK_IMPORTED_MODULE_10__pages_shisha_order_shisha_order_component__["a" /* ShishaOrderComponent */] },
    { path: 'drinks', component: __WEBPACK_IMPORTED_MODULE_13__pages_drinks_drinks_component__["a" /* DrinksComponent */] },
    { path: 'desserts', component: __WEBPACK_IMPORTED_MODULE_14__pages_desserts_desserts_component__["a" /* DessertsComponent */] },
    { path: 'extras', component: __WEBPACK_IMPORTED_MODULE_15__pages_extras_extras_component__["a" /* ExtrasComponent */] },
    { path: 'extra-head', component: __WEBPACK_IMPORTED_MODULE_16__pages_extra_head_extra_head_component__["a" /* ExtraHeadComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'basket', component: __WEBPACK_IMPORTED_MODULE_11__pages_basket_basket_component__["a" /* BasketComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guards__["a" /* AuthGuards */]] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_12__pages_checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guards__["a" /* AuthGuards */]] },
    { path: 'order-history', component: __WEBPACK_IMPORTED_MODULE_17__pages_order_history_order_history_component__["a" /* OrderHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guards__["a" /* AuthGuards */]] },
    { path: 'address-book', component: __WEBPACK_IMPORTED_MODULE_6__pages_address_book_address_book_component__["a" /* AddressBookComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guards__["a" /* AuthGuards */]] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__pages_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.template.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/directives/flavour-picker.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlavourPickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlavourPickerDirective = (function () {
    function FlavourPickerDirective() {
        this.limitReached = false;
    }
    FlavourPickerDirective.prototype.onchange = function () {
        this.disableflavours();
    };
    FlavourPickerDirective.prototype.disableflavours = function () {
        var flavours = document.querySelectorAll('.flavours');
        var numberOfPickedflavours = 0;
        for (var i = 0; i < flavours.length; i++) {
            if (flavours[i].firstElementChild['checked']) {
                numberOfPickedflavours++;
            }
        }
        if (numberOfPickedflavours >= 3) {
            this.limitReached = true;
        }
        else {
            this.limitReached = false;
        }
        for (var i = 0; i < flavours.length; i++) {
            if (flavours[i].firstElementChild['checked'] != true && this.limitReached) {
                flavours[i].firstElementChild['disabled'] = true;
            }
            else {
                flavours[i].firstElementChild['disabled'] = false;
            }
        }
    };
    return FlavourPickerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlavourPickerDirective.prototype, "onchange", null);
FlavourPickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flavourPicker]'
    }),
    __metadata("design:paramtypes", [])
], FlavourPickerDirective);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/flavour-picker.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/headpicker.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadpickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadpickerDirective = (function () {
    function HeadpickerDirective(element) {
        this.element = element;
    }
    HeadpickerDirective.prototype.onclick = function () {
        this.highlight();
    };
    HeadpickerDirective.prototype.highlight = function () {
        var headOptions = this.element.nativeElement.parentNode.parentNode.children;
        for (var _i = 0, headOptions_1 = headOptions; _i < headOptions_1.length; _i++) {
            var option = headOptions_1[_i];
            option.firstElementChild.style.borderColor = '';
        }
        this.element.nativeElement.style.borderColor = '#9b59b6';
    };
    return HeadpickerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeadpickerDirective.prototype, "onclick", null);
HeadpickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[headpicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HeadpickerDirective);

var _a;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/headpicker.directive.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuards; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuards = (function () {
    function AuthGuards(router, userService, flashMessage, dialog) {
        this.router = router;
        this.userService = userService;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
    }
    AuthGuards.prototype.canActivate = function () {
        if (this.userService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["home"]);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__["a" /* LoginComponent */]);
            return false;
        }
    };
    return AuthGuards;
}());
AuthGuards = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatDialog */]) === "function" && _d || Object])
], AuthGuards);

var _a, _b, _c, _d;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/auth.guards.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #ffe2b6;\n}\n.navbar .navbar-brand {\n  color: black;\n}\n.navbar .navbar-brand:hover,\n.navbar .navbar-brand:focus {\n  color: #ecdbff;\n}\n.navbar .navbar-text {\n  color: #ecf0f1;\n}\n.navbar .navbar-nav .nav-link {\n  color: black;\n  border-radius: .25rem;\n  margin: 0 0.25em;\n}\n.navbar .navbar-nav .nav-link:not(.disabled):hover,\n.navbar .navbar-nav .nav-link:not(.disabled):focus {\n  color: #fc004c;\n}\n.navbar .navbar-nav .nav-item.active .nav-link,\n.navbar .navbar-nav .nav-item.active .nav-link:hover,\n.navbar .navbar-nav .nav-item.active .nav-link:focus,\n.navbar .navbar-nav .nav-item.show .nav-link,\n.navbar .navbar-nav .nav-item.show .nav-link:hover,\n.navbar .navbar-nav .nav-item.show .nav-link:focus {\n  color: white;\n  background-color: black;\n}\n.navbar .navbar-toggle {\n  border-color: #8e44ad;\n}\n.navbar .navbar-toggle:hover,\n.navbar .navbar-toggle:focus {\n  background-color: #8e44ad;\n}\n.navbar .navbar-toggle .navbar-toggler-icon {\n  color: #ecf0f1;\n}\n.navbar .navbar-collapse,\n.navbar .navbar-form {\n  border-color: #ecf0f1;\n}\n.navbar .navbar-link {\n  color: #ecf0f1;\n}\n.navbar .navbar-link:hover {\n  color: #fc004c;\n}\n\n@media (max-width: 767px) {\n  .navbar .navbar-nav .open .dropdown-menu .dropdown-item {\n    color: #ecf0f1;\n  }\n  .navbar .navbar-nav .open .dropdown-menu .dropdown-item:hover,\n  .navbar .navbar-nav .open .dropdown-menu .dropdown-item:focus {\n    color: #ecdbff;\n  }\n  .navbar .navbar-nav .open .dropdown-menu .dropdown-item.active {\n    color: #ecdbff;\n    background-color: #8e44ad;\n  }\n}\n\n.basket{\n  color: black;\n  margin-left: 40%;\n}\n.basket:link {\n    text-decoration: none;\n}\n.basket:hover {\n    text-decoration: none;\n    color: #fc004c;\n}\n\n.myaccountMenu{\n    position: absolute;\n    right: 1rem;\n}\n\n@media only screen and (max-width: 992px) {\n  .myaccountMenu{\n    position: relative;\n    right: 0;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .basket{\n    margin-left: 0;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <img class=\"navbar-brand\" src=\"../../assets/logo.png\" style=\"height:70px; width: 110px;\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" routerLinkActive = 'active' routerLinkActiveOptions = '{exact:true}' class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" routerLinkActive = 'active' routerLinkActiveOptions = '{exact:true}' class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/order\">Order</a>\n      </li>\n      <li data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" routerLinkActive = 'active' routerLinkActiveOptions = '{exact:true}' class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/how-it-works\">How it works</a>\n      </li>\n      <li data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" routerLinkActive = 'active' routerLinkActiveOptions = '{exact:true}' class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/menu\">Menu</a>\n      </li>\n    </ul>\n    <div data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <a class=\"basket\" routerLink=\"/basket\">\n        <i class=\"fa fa-shopping-basket fa-3x\" aria-hidden=\"true\"></i>\n        <span>{{basketTotal.numberOfItems}} Item(s)</span>\n        <span>Total: £{{basketTotal.totalCost.toFixed(2)}}</span>\n      </a>\n    </div>\n    <div *ngIf= \"userService.loggedIn(); then loggedIn; else loggedOut\"></div>\n    <ng-template #loggedIn>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item myaccountMenu\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"fa fa-user-circle fa-2x\" aria-hidden=\"true\"></i> {{userService.getCurrentUser().name}}</a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" routerLink = \"/profile\">Your Account</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" routerLink = \"/order-history\">Your Orders</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" routerLink = \"/address-book\">Your Address Book</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" (click) = \"signOut()\" href=\"javascript:void(0)\">Sign Out</a>\n          </div>\n        </li>\n      </ul>\n    </ng-template>\n    <ng-template #loggedOut>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item myaccountMenu\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"fa fa-user-circle fa-2x\" aria-hidden=\"true\"></i> Your Account</a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)= \"showLogin()\">Login</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click) = \"showRegister()\">Register</a>\n          </div>\n        </li>\n      </ul>\n    </ng-template>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = (function () {
    function NavbarComponent(userService, orderService, flashMessage, router, dialog) {
        this.userService = userService;
        this.orderService = orderService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.dialog = dialog;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basketTotal = this.orderService.basketTotal();
        this.orderService.basketSubject.subscribe(function (data) { return _this.basketTotal = data; });
        this.orderService.fetchBasket(this.orderService.loadBasketId()).subscribe(function (data) {
            if (data.success) {
                _this.orderService.basket = data.basket;
                _this.basketTotal = _this.orderService.basketTotal();
            }
        });
    };
    NavbarComponent.prototype.showLogin = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__["a" /* LoginComponent */]);
    };
    NavbarComponent.prototype.showRegister = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__pages_register_register_component__["a" /* RegisterComponent */]);
    };
    NavbarComponent.prototype.signOut = function () {
        this.userService.signOut();
        this.flashMessage.show("You are logged out!", { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/home']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatDialog */]) === "function" && _e || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/address-book/address-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label{\n\tmargin-bottom: 0px;\n\tmargin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/address-book/address-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12 lead\">Address book<hr></div>\n          </div>\n          <div class=\"row\" *ngIf=\"addresses.length >0\">\n            \t<div class=\"col-md-4\">\n                <i class=\"fa fa-home fa-5x\" aria-hidden=\"true\"></i>\n           \t  </div>\n         \t    <div class=\"col-md-4\">\n                <label style=\"display: block;\">Addresses</label>\n                <select [(ngModel)] = \"selectedAddressIndex\" class=\"form-control\">\n                  <option>Select an Address</option>\n                  <option *ngFor=\"let address of addresses; let i = index\" value=\"{{i}}\">{{address.streetNumber}} {{address.streetName}}</option>>\n        \t\t\t\t</select>\n                <hr>\n              </div>\n              <div class=\"col-md-4\" *ngIf=\"addresses[selectedAddressIndex]\">\n                <div>\n                  <span>{{addresses[selectedAddressIndex].streetNumber}} {{addresses[selectedAddressIndex].streetName}}</span><br>\n                  <span>{{addresses[selectedAddressIndex].city}}</span><br>\n                  <span>{{addresses[selectedAddressIndex].postcode}}</span><br>\n                </div>\n                <button (click)= \"deleteAddress()\" class=\"btn btn-danger\">Delete</button>\n              </div>\n          </div>\n          <div class=\"row\" *ngIf=\"addresses.length == 0\">\n              <div class=\"col-md-4\">\n                <i class=\"fa fa-home fa-5x\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"col-md-4\">\n                <label>Your address book is empty!</label>\n              </div>\n          </div>\n          <hr>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/address-book/address-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_address_service__ = __webpack_require__("../../../../../src/app/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressBookComponent = (function () {
    function AddressBookComponent(userService, addressService, flashMessage) {
        this.userService = userService;
        this.addressService = addressService;
        this.flashMessage = flashMessage;
        this.addresses = [];
        this.selectedAddressIndex = "Select an Address";
        this.noAddress = true;
    }
    AddressBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addressService.getAddresses(this.userService.getCurrentUser().id, this.userService.loadToken()).subscribe(function (data) {
            if (data.success) {
                _this.noAddress = false;
                _this.addresses = data.addresses;
            }
        });
    };
    AddressBookComponent.prototype.deleteAddress = function () {
        var _this = this;
        this.addressService.removeAddress(this.addresses[this.selectedAddressIndex]._id, this.userService.loadToken()).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Address deleted", { cssClass: 'alert-success', timeout: 3000 });
                _this.addresses.splice(_this.selectedAddressIndex, 1);
            }
            else {
                _this.flashMessage.show("Address failed to delete", { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return AddressBookComponent;
}());
AddressBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-address-book',
        template: __webpack_require__("../../../../../src/app/pages/address-book/address-book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/address-book/address-book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_address_service__["a" /* AddressService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], AddressBookComponent);

var _a, _b, _c;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/address-book.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/basket/basket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details{\n\tfont-style: italic;\n\tbackground-color: #F2E6FB;\n}\n\n.container{\n\tmargin-top: 2%;\n\tbackground-color: #f9f4f4;\n\tborder-radius: 7px;\n}\n\n.options{\n\tmargin-left: 10px;\n}\n\n.proceedBtn{\n\tbackground-color: #eddfdf;\n\tpadding: 5px;\n\tpadding-top: 10px;\n\tmargin-bottom: 1%;\n\tborder-radius: 7px;\n}\n\n.fa{\n\tcolor: #b30000;\n}\n\n.remove{\n\tcursor: pointer;\n}\n\n.table > tbody > tr > td {\n     vertical-align: middle;\n}\n\n@media only screen and (min-width: 768px) {\n\t.checkout{\n\t\tfloat: right;\n\t}\n\n}\n\n@media only screen and (max-width: 768px){\n\t.align-btn{\n\t\ttext-align: center;\n\t\tmargin-bottom: 5px;\n\t}\n\t.mobile-friendly{\n\t\tmargin-top: 6px;\n\t\tmargin-bottom: -1px;\n\t}\n}\n\n.item-block{\n\tborder-bottom: 1px solid;\n\tmargin-bottom: 5px;\n\tborder-color: #E1E0E3;\n}\n\n.form-control{\n\tpadding: 0;\n\ttext-align: center;\n}\n\n.mauto{margin: 0 auto;}\n.px2 { padding-right: 2rem; padding-left: 2rem; }\n.mt1 {margin-top: 1rem;}\n.mb1 {margin-bottom: 1rem;}\n.clearfix {\n\tborder-radius: 10px;\n\tbackground-color: #fff2f0;\n  &:before, &:after { content: \" \"; display: table; }\n  &:after { clear: both; }\n}\n\n.relative{position: relative;}\n.absolute{position: absolute;}\n.t1{top:2px;}\n.r0{right:0;}\n\n.bg-white{background-color: #fff2f0;}\n.bottom-dotted{border-bottom-style: dotted;}\n.border-color-light-gray{ border-color: #ccc; }\n\np, .p{\n  font-size: 1.125rem;\n  line-height: 1.7rem;\n  letter-spacing: 1.5px;\n  padding-bottom: 1rem;\n  margin:0;\n}\n\n.emptyBasket{\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\ttext-align: center;\n}\n\nlabel{\n\tmargin:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/basket/basket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div *ngIf= \"basket.items.length>=1; then fullBasket; else emptyBasket\"></div>\n\t<ng-template #fullBasket>\n\t\t<!-- Items display block -->\n\t\t<div class=\"row item-block\" style=\"padding-top: 10px;\" *ngFor=\"let item of basket.items; let i = index \" [attr.data-index]=\"i\">\n\t\t  <div class=\"col-md-3\"><h5 [ngClass] =\"{'hidden-md-up': i>0}\" class =\"mobile-friendly\">Product</h5>\n\t  \t\t<div *ngIf= \"item.category == 'shisha'; then shisha; else others\"></div>\n\t  \t\t<ng-template #shisha>\n\t\t  \t\t<div>\n\t\t      \t\t<h6>{{item.name}} <i (click) =\"removeItem(item,i)\" class=\"fa fa-window-close remove\" aria-hidden=\"true\"></i></h6>\n\t\t      \t\t<label class=\"options\">Head: <span class=\"details\">{{item.head}}</span></label ><br>\n\t\t      \t\t<label class=\"options\">Hose: <span class=\"details\">{{item.hose}}</span></label><br>\n\t\t      \t\t<label class=\"options\">Base: <span class=\"details\">{{item.base}}</span></label><br>\n\t\t      \t\t<label class=\"options\">Flavours: <span class=\"details\" *ngFor=\"let flavour of item.flavours\">{{flavour}}, </span></label>\n\t\t      \t</div>\n\t      \t</ng-template>\n\t      \t<ng-template #others>\n\t      \t\t<h6>{{item.name}} <i (click) =\"removeItem(item,i)\" class=\"fa fa-window-close remove\" aria-hidden=\"true\"></i></h6>\n\t      \t\t<div *ngIf=\"item.category =='extra-head'\">\n\t      \t\t\t<label class=\"options\">Head: <span class=\"details\">{{item.head}}</span></label><br>\n\t\t      \t\t<label class=\"options\">Flavours: <span class=\"details\" *ngFor=\"let flavour of item.flavours\">{{flavour}}, </span></label>\n\t      \t\t</div>\n\t      \t</ng-template>\n\t\t  </div>\n\t\t  <div class=\"col-md-2\"><h5 [ngClass] =\"{'hidden-md-up': i>0}\" class =\"mobile-friendly\">Unit Price</h5><span>£{{(item.costs/item.quantity).toFixed(2)}}</span></div>\n\t\t  <div class=\"col-md-2\">\n\t\t  \t<h5 [ngClass] =\"{'hidden-md-up': i>0}\" class =\"mobile-friendly\">Quantity</h5>\n\t\t    <div class=\"row\" style=\"margin-bottom: 5px;\">\n\t\t\t\t<button style=\"position: relative; width: 25px; margin-left: 10px;\" (click) =\"adjustCost(i, -1)\" type=\"button\" class=\"btn btn-sm btn-danger minus-button\" >-</button>\n\t\t\t\t<div style=\"position: relative; width: 50px;\" class=\"form-control\">{{item.quantity}}</div>\n\t\t\t    <button style=\"position: relative; width: 25px;\" (click) =\"adjustCost(i, 1)\" type=\"button\" class=\"btn btn-sm btn-success plus-button\">+</button>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"col-md-2\"><h5 [ngClass] =\"{'hidden-md-up': i>0}\" class =\"mobile-friendly\">Total price</h5><span>£{{item.costs.toFixed(2)}}</span></div>\n\t\t</div>\n\n\t\t<!-- Bill Summary block -->\n\t\t<div class=\"clearfix full-width mb1\">\n\t\t\t<div class=\"left quarter-width px2\">\n\t\t\t\t<p class=\"small bottom-dotted border-color-light-gray relative mb1\">\n\t    \t\t\t<span class=\"bg-white absolute t1\">Subtotal</span> <span class=\"bg-white absolute t1 r0\"> &nbsp; £{{basket.subtotal.toFixed(2)}}</span>\n\t    \t\t</p>\n\t    \t\t<p class=\"small bottom-dotted border-color-light-gray relative mb1\" *ngIf=\"basket.discount <0\">\n\t    \t\t\t<span class=\"bg-white absolute t1\">Discount (20%)</span> <span class=\"bg-white absolute t1 r0\"> &nbsp; -£{{(basket.discount*-1).toFixed(2)}}</span>\n\t    \t\t</p>\n\t\t\t</div>\t\n\t\t\t<div class=\"col-sm-4\" style=\"font-weight: bold; float: right;\">\n\t          \t<hr>\n\t          \t<p style=\"float: right;\">Total Cost: £{{(basket.subtotal+basket.discount).toFixed(2)}}</p>\n\t        </div>\n\t\t</div>\n\t\t<div style=\"padding-left: 10px; padding-bottom: 10px; text-align: center;\">\n\t\t\t<small [hidden]=\"!promotion.error\" style=\"color: red; display: block;\">{{promotion.errMsg}}</small>\n\t\t\t<input style=\"border-radius: 3px; padding: 2px\" type=\"number\" placeholder=\"Promotion code\" name=\"promotion\" [(ngModel)] = \"promotion.promotionInput\">\n\t\t\t<button class=\"btn btn-info\" (click) = \"applyPromotion()\" >Apply</button>\n\t\t</div>\n\t<!-- checkout and shopping buttons block -->\n\t\t<div class=\"row proceedBtn\">\n\t\t\t<div class=\"col-md-6 align-btn\">\n\t\t\t\t<button class=\"btn btn-success\" routerLink=\"/order\">Continue Shopping</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 align-btn\">\n\t\t\t\t<button [disabled] =\"(basket.subtotal+basket.discount)<7.49\" class=\"btn btn-info checkout\" routerLink=\"/checkout\">Checkout</button><br>\n\t\t\t\t<small [hidden]=\"(basket.subtotal+basket.discount)>=7.49\" style=\"color: red; position: relative;\">Minimum spend is £7.49</small>\n\t\t\t</div>\n\t\t</div>\n\t</ng-template>\n\t<ng-template #emptyBasket>\n\t\t<div class=\"emptyBasket\">\n\t\t\t<h6>Your basket is empty</h6>\n\t\t\t<button class=\"btn btn-success\" routerLink=\"/order\">Continue Shopping</button>\n\t\t</div>\n\t</ng-template>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/basket/basket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasketComponent = (function () {
    function BasketComponent(orderService, flashMessage) {
        this.orderService = orderService;
        this.flashMessage = flashMessage;
        this.basket = {
            items: [],
            subtotal: 0,
            discount: 0,
        };
        this.promotion = {
            promotionInput: undefined,
            promotionCode: 54821,
            error: false,
            errMsg: ""
        };
    }
    BasketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.fetchBasket(this.orderService.loadBasketId()).subscribe(function (data) {
            if (data.success) {
                _this.basket = data.basket;
            }
        });
    };
    BasketComponent.prototype.removeItem = function (thisItem, index) {
        this.basket["items"].splice(index, 1);
        this.updateTotal(-thisItem.costs);
        this.orderService.updateBasket(this.basket);
    };
    BasketComponent.prototype.updateTotal = function (updateFigure) {
        this.basket["subtotal"] = this.basket["subtotal"] + updateFigure;
    };
    BasketComponent.prototype.adjustCost = function (itemIndex, q) {
        var quantity = this.basket["items"][itemIndex].quantity;
        var cost = this.basket["items"][itemIndex].costs;
        if ((quantity < 20 || q === -1) && (quantity > 1 || q === 1)) {
            this.basket["items"][itemIndex].costs = cost + ((cost / quantity) * q);
            this.basket["items"][itemIndex].quantity = quantity + q;
            this.updateTotal((cost / quantity) * q);
            this.orderService.updateBasket(this.basket);
        }
    };
    BasketComponent.prototype.applyPromotion = function () {
        var _this = this;
        if (this.promotion.promotionInput == this.promotion.promotionCode) {
            if (this.basket["discounted"]) {
                this.promotion.error = true;
                this.promotion.errMsg = "Discount already applied";
            }
            else {
                this.promotion.error = false;
                this.basket["discounted"] = true;
                this.basket["discount"] = this.basket["subtotal"] * -0.2;
                this.orderService.applyDiscount(this.basket).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show("Discount applied!", { cssClass: 'alert-success', timeout: 3000 });
                        _this.orderService.fetchBasket(_this.basket["_id"]).subscribe(function (result) {
                            _this.basket = result.basket;
                        });
                    }
                });
            }
        }
        else {
            this.promotion.errMsg = "Invlaid promotion code";
            this.promotion.error = true;
        }
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basket',
        template: __webpack_require__("../../../../../src/app/pages/basket/basket.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/basket/basket.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], BasketComponent);

var _a, _b;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/basket.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".confirmation{\n    background-color: #D9FAD8;\n    text-align: center;\n}\n\n.terms{\n    height: 200px;\n    overflow: scroll;\n    margin-bottom: 10px;\n}\n\nli{\n    list-style-type : none;\n}\n\n.indent{\n\ttext-indent: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<!-- Nav tabs -->\n    <tabs *ngIf=\"!ordered\">\n      <tab [tabTitle]=\"'Contact details'\">\n  \t\t<div class=\"card card-outline-secondary\">\n\t\t    <div class=\"card-header\">\n\t\t        <h3 class=\"mb-0\">Contact Details</h3>\n\t\t    </div>\n\t\t    <div class=\"card-block\" *ngIf=\"user\">\n\t\t        <form [formGroup] = \"form\" (ngSubmit) = \"next(form.value, 1)\" class=\"form\" role=\"form\" autocomplete=\"off\">\n\t\t            <div class=\"form-group\">\n\t\t                <label for=\"inputName\">Name</label>\n\t\t                <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Full name\" formControlName = \"name\" value={{user.name}}>\n\t\t\t\t      \t<div *ngIf=\"form.controls.name.errors\">\n\t\t\t\t\t\t    <small [hidden]=\"!form.controls.name.errors.required || !submitted\" style=\"color: red\">Name is required</small>\n\t\t\t\t\t\t    <small [hidden]=\"!form.controls.name.errors.pattern\" style=\"color: red\">Invalid Name (Letters Only)</small>\n\t\t\t\t\t\t    <small [hidden]=\"!form.controls.name.errors.maxlength\" style=\"color: red\">Name must be less than 25 characters </small>\n\t\t\t\t    \t</div>\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n\t\t                <label for=\"inputMomileNumber\">Mobile</label>\n\t\t                <input type=\"tel\" class=\"form-control\" id=\"inputMobileNumber\" placeholder=\"Mobile number\" required=\"\" formControlName = \"mobile\" value={{user.mobile}}>\n\t\t                <div *ngIf=\"form.controls.mobile.errors\">\n\t\t\t\t\t\t    <small [hidden]=\"!form.controls.mobile.errors.required || !submitted\" style=\"color: red\">Mobile number required</small>\n\t\t\t\t\t\t    <small [hidden]=\"!submitted || !form.controls.mobile.errors.minlength || form.controls.mobile.errors.required\" style=\"color: red\">Invalid phone (Min Length 11 digits)</small>\n\t\t\t\t\t\t    <small [hidden]=\"!form.controls.mobile.errors.pattern\" style=\"color: red\">Invalid input (numbers only)</small>\n    \t\t\t\t\t    <small [hidden]=\"!form.controls.mobile.errors.maxlength\" style=\"color: red\">Mobile number must not exceed 16 digits</small>\n\t\t\t\t    \t</div>\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n            \t\t\t<button type=\"submit\" class=\"btn btn-success float-right\">Next</button>\n        \t\t\t</div>\n\t\t        </form>\n\t\t    </div>\n\t\t</div>\n      </tab>\n      <tab [tabTitle]=\"'Delivery details'\">\n      \t<div class=\"card card-outline-secondary\">\n    \t\t\t<div class=\"card-header\">\n        \t\t\t<h3 class=\"mb-0\">Delivery Details</h3>\n\t\t    \t</div>\n\t\t    <div class=\"card-block\">\n\t\t    \t<div *ngIf= \"newAddress; then addAddress; else chooseAddress\"></div>\n\t\t    \t<ng-template #addAddress>\n\t\t\t        <form [formGroup] = \"form\" class=\"form\" role=\"form\" autocomplete=\"off\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<h6 for=\"streetNumber\">Delivery Address <label *ngIf =\"addresses.length>0\">| <a style=\"cursor: pointer;\" href=\"javascript:void(0)\" (click)=\"addressToggle()\">Choose from the address book</a></label></h6>\n\t\t\t\t\t\t\t<input type=\"text\" class = \"form-control\" id=\"streetNumber\" placeholder=\"Street No / House name\" required=\"\" value=\"\" formControlName = \"streetNumber\">\n\t\t\t\t\t\t\t<div *ngIf=\"form.controls.streetNumber.errors\">\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.streetNumber.errors.required || !submitted\" style=\"color: red\">Street number or house name is required</small>\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.streetNumber.errors.pattern\" style=\"color: red\">Invalid input (Letters & numbers Only)\n\t\t\t\t\t\t\t    </small>\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.streetNumber.errors.maxlength\" style=\"color: red\"> Street number must be less than 50 characters)\n\t\t\t\t\t\t\t    </small>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class = \"form-control\" id=\"streetName\" placeholder=\"Street name\" required=\"\" value=\"\" formControlName = \"streetName\">\n\t\t\t\t\t\t\t<div *ngIf=\"form.controls.streetName.errors\">\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.streetName.errors.required || !submitted\" style=\"color: red\">Street name required</small>\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.streetName.errors.pattern\" style=\"color: red\">Invalid input (Letters & numbers Only)</small>\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.streetName.errors.maxlength\" style=\"color: red\">Street name must be less than 50 characters</small>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City/Town\" required=\"\" value=\"\" formControlName = \"city\">\n\t\t\t\t\t\t\t<div *ngIf=\"form.controls.city.errors\">\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.city.errors.required || !submitted\" style=\"color: red\">City name required</small>\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.city.errors.pattern\" style=\"color: red\">Invalid input (Letters Only)</small>\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.city.errors.maxlength\" style=\"color: red\">city name must be less than 50characters</small>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id =\"postdode\" placeholder=\"Postcode\" required=\"\" value=\"\" formControlName = \"postcode\">\n\t\t\t\t\t\t\t<div *ngIf=\"form.controls.postcode.errors\">\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.postcode.errors.required || !submitted\" style=\"color: red\">Postcode required</small>\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.postcode.errors.pattern\" style=\"color: red\">Invalid input (Letters & numbers Only)</small>\n\t\t\t\t\t\t\t    <small [hidden]=\"!form.controls.postcode.errors.maxlength\" style=\"color: red\">Postcode must be less than 10 characters</small>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t        </form>\n\t\t        </ng-template>\n\t\t        <ng-template #chooseAddress>\n\t\t        \t<h6>Delivery address</h6>\n\t\t        \t<select #address (change) = \"selectAddress(address.value)\">\n\t\t\t\t\t  <option *ngFor = \"let address of addresses; let i = index\" value={{i}}>{{address.streetName}}</option>\n\t\t\t\t\t</select><br><br>\n\t\t\t\t\t<div *ngIf = \"chosenAddress\" style=\"border-width: 1px; padding: 5px; border-style: dotted;\" class=\"col-md-3\">\n\t\t\t\t\t\t<span>{{chosenAddress.streetNumber}}</span><br>\n\t\t\t\t\t\t<span>{{chosenAddress.streetName}}</span><br>\n\t\t\t\t\t\t<span>{{chosenAddress.city}}</span><br>\n\t\t\t\t\t\t<span>{{chosenAddress.postcode}}</span><br>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a style=\"cursor: pointer;\" href=\"javascript:void(0)\" (click)=\"addressToggle()\">Add a new address</a>\n\t\t        </ng-template>\n\t\t        <hr>\n\t\t\t    <form *ngIf=\"user\" [formGroup] = \"form\" (ngSubmit) = \"proceedToPayment(form.value, 2)\" class=\"form\" role=\"form\" autocomplete=\"off\">\n\t\t        \t<div>\n\t\t\t\t\t\t<h6>Delivery time</h6>\n\t\t\t\t\t\t<select required name = \"deliveryTime\" formControlName = \"deliveryTime\" required>\n\t\t            \t  <option *ngFor=\"let time of deliveryTime\" value=\"{{time}}\">{{time}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t        <div>\n\t\t\t        \t<h6>Your comment for us:</h6>\n\t\t\t        \t<textarea style=\"max-width: 100%; border-radius: 5px;\" rows=\"4\" cols=\"50\" placeholder=\"e.g. the gate pincode is 123\" formControlName = \"comment\"></textarea>\n\t\t\t        \t<div *ngIf=\"form.controls.comment.errors\">\n\t\t\t\t\t\t\t<small [hidden]=\"!form.controls.comment.errors.maxlength\" style=\"color: red\">Your comment must be less than 250 characters</small>\n\t\t\t\t    \t</div>\n\t\t\t        </div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t            <button (click) = \"tabTogle(0)\" type=\"button\" class=\"btn btn-info float-left\">Back</button>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"form-group\">\n\t\t\t\t            <button type=\"submit\" class=\"btn btn-success float-right\">Proceed to payment</button>\n\t\t\t\t        </div>\n\t\t\t        </div>\n\t\t\t    </form>\n\t\t    </div>\n\t\t</div>\n      </tab>\n      <tab [tabTitle]=\"'Payment'\">\n        <div class=\"card card-outline-secondary\">\n    \t\t\t<div class=\"card-header\">\n        \t\t\t<h3 class=\"mb-0\">Payment</h3>\n\t\t    \t</div>\n\t\t    <div class=\"card-block\">\n\t\t        <form (ngSubmit)=\"proceedToConfirm(3)\" class=\"form\" role=\"form\" autocomplete=\"off\">\n\t\t        \t<h6>Payment Type</h6>\n\t\t        \t<div class=\"form-group\" class=\"row\">\n\t\t        \t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<label for=\"payment\">Cash</label>\n\t\t\t\t\t\t\t<input type=\"radio\" name = \"paymentType\" required=\"\" checked=\"checked\" value=\"cash\" [(ngModel)] = \"paymentType\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<label for=\"payment\">Card</label>\n\t\t\t\t\t\t\t<input type=\"radio\" [(ngModel)] = \"paymentType\" name = \"paymentType\" required=\"\" value=\"card\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t-->\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t                <button (click) = \"tabTogle(1)\" type=\"button\" class=\"btn btn-info float-left\">Back</button>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <button type=\"submit\" class=\"btn btn-success float-right\">Confirmation</button>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t        </form>\n\t\t    </div>\n\t\t</div>\n      </tab>\n      <tab [tabTitle]=\"'Confirmation'\">\n      \t<div class=\"card card-outline-secondary\">\n\t\t    <div class=\"card-header\">\n\t\t\t\t<h3 class=\"mb-0\">Confirmation</h3>\n\t    \t</div>\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<h6>Terms and conditions:</h6>\n\t\t\t\t<div class=\"form-control terms\">\n\t\t\t\t\t<p> \n\t\t\t\t\t\tThese are our terms and conditions. They apply each time you use our services and we will assume that you’ve read them beforehand. They do change from time to time so please re-read them each time you order.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<strong>AGREEMENT</strong><br>\n\t\t\t\t\t\tThese Terms and Conditions comprise the following sections:<br>\n\t\t\t\t\t\t\t•\tOrders<br>\n\t\t\t\t\t\t\t•\tGeneral Terms<br>\n\t\t\t\t\t\t\t•\tCancellation Policy<br>\n\t\t\t\t\t\tWhich together form the basis of the relationship between us and both you and we agree to be bound by what each section says.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<strong>ORDERS</strong><br>\n\t\t\t\t\t\t•\tAVAILABILITY<br>\n\t\t\t\t\t\tAcknowledgement of your order does not mean that we have accepted it. We will confirm to you when we have accepted your order and that is when a binding obligation will exist between us.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf we do not accept your order or if we have a problem relating to it, we will tell you as soon as we can and (if appropriate) refund the payment you have made to us.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAn order can be placed at the times advertised. Any orders placed outside those times will be processed in the next opening period.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tPAYMENT<br>\n\t\t\t\t\t\tWe accept payment by Cash or bank transfer ONLY.\n\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tDELIVERY & COLLECTION<br>\n\t\t\t\t\t\tOur aim is to deliver your Shisha within 45 minutes of processing your order but this is a target time which may be affected by circumstances which we are unable to control and so we do not guarantee that any time we quote will be met unless you tell us in advance and we agree when we accept your order that time with you.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tOn delivery, we may ask for proof of your age and, if you are unable to supply this when requested, we may cancel your order without having the obligation to refund to you any part of the money you have paid to us.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Shisha must be available for collection by us<br>\n\t\t\t\t\t\t•\tat the same address to which it was delivered;<br>\n\t\t\t\t\t\t•\tin the same condition (except for consumables) in which it was delivered to you; and<br>\n\t\t\t\t\t\t•\tat the time we specify on or before we deliver.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWe may charge you reasonable additional sums if:<br>\n\t\t\t\t\t\t•\twe are unable to collect the Shisha at the place and time we have specified; or<br>\n\t\t\t\t\t\t•\tthe equipment we supply to you has been misused damaged is dirty or is not complete.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tSUBSTITUTE PRODUCTS<br>\n\t\t\t\t\t\tWhilst we will always try to meet the exact specification you request for your order, you understand that it may not be possible to follow each recipe exactly.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tYou understand and agree that we may substitute all and any ingredients used in the Shisha for others which, in our opinion are as close as possible to the specified ingredient and that such substitution will not give rise to any claim under the agreement between us.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tHEALTH AND SAFETY<br>\n\t\t\t\t\t\tYou agree to read and follow all the instructions we supply with the Shisha and any other products we supply. If you do not understand any of our instructions, you agree not to use the Shisha until you have contacted us for an explanation.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tUsing a Shisha can cause dizziness or drowsiness. You agree to make sure that all the people who use it are aware that driving or operating machinery after using the Shisha could be dangerous.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tLONG TERM USE OF SHISHA MAY CAUSE HEALTH PROBLEMS AND MAY BE ADDICTIVE.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tYou must not use any products with the Shisha which we have not supplied.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tYou accept that using a Shisha can be dangerous and that fire and fire damage can result in misuse. Sparks can fly from it and you must ensure that the Shisha is placed on a stable base and in a position which will prevent damage being caused.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf we have not lit the Shisha for you, then it should be lit in an environment which cannot be affected by smoke.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tYou warrant that all users of the Shisha are over the age of 18 years at the time they use the Shisha.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tYou understand, and will advise all users of the Shisha before they use it, that the use of A Shisha may cause harm to health and may harm the health of others who are in the vicinity of the Shisha.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<strong>IF YOU FAIL TO FOLLOW THESE CONDITIONS AND THE ADVICE AND INSTRUCTIONS WE GIVE YOU WHEN DELIVERING THE SHISHA WE WILL NOT BE RESPONSIBLE FOR ANY DAMAGE TO PROPERTY AND GOODS WHICH MAY OCCUR.</strong>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tCANCELLATION/RETURNS<br>\n\t\t\t\t\t\tYou understand and agree that most of the products we supply are supplied for immediate use and have been prepared to your specifications and that, as a result, your right to cancel the agreement between us is limited.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf you are buying the Shisha and the services we supply as a consumer, our Cancellation Policy applies.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tyou may only return Goods if they:<br>\n\t\t\t\t\t\t•\tare of unsatisfactory quality; or<br>\n\t\t\t\t\t\t•\tare not fit for their purpose; or<br>\n\t\t\t\t\t\t•\tdo not match the description of the Goods that you ordered from us; or<br>\n\t\t\t\t\t\t•\thave faults when they are delivered to you; or<br>\n\t\t\t\t\t\t•\thave been damaged in transit.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tYou must contact us immediately to arrange for their return. We do not make refunds for any products which have been used unless they are faulty.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<strong>GENERAL TERMS</strong>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tDEFINITIONS\n\t\t\t\t\t\tThe following words have the following meanings in these Terms and Conditions:\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tWe are Cloud 7 Shisha of 179a Shirley Road Southampton SO153FG\n\t\t\t\t\t\t•\tYou are a visitor to the Site.\n\t\t\t\t\t\t•\tUser means any person, firm or company using this service for any purpose.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tYOUR PROMISES TO US<br>\n\t\t\t\t\t\tYou agree that:<br>\n\t\t\t\t\t\t•\tYou have the right to make this Agreement with us and that you are over the age of 18 years.<br>\n\t\t\t\t\t\t•\tYou will read the terms and conditions<br>\n\t\t\t\t\t\t•\tYou won’t copy, imitate or use the trademarks and/or designs and/or layout or anything else which would usually amount to intellectual property and which we own.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tLIMITATION OF LIABILITY<br>\n\t\t\t\t\t\tAs far as we are allowed by law we deny liability for any losses of all kind which you incur from using our service. You use the service at your own risk.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tHowever, nothing in these Terms and Conditions excludes or restricts our liability for death or personal injury resulting from any negligence or fraud on our part.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tMODIFICATIONS TO THESE TERMS AND CONDITIONS & THE SITE<br>\n                        You agree to re-read these Terms and Conditions each time you use the service so as to understand any changes we’ve made to them.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf we change our service these Terms and Conditions will apply to any changes we make.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tGENERAL MATTERS<br>\n\t\t\t\t\t\tThese Terms and Conditions are made under the laws of England and Wales and that is the only jurisdiction which can govern them.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWe and you agree that these Terms and Conditions do not form the basis of any partnership or co-venture.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThese Terms and Conditions supersede any previous terms and conditions we have published and represent the entire understanding between you and us.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tTime will not be of the essence in any part of any agreement between you and us.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAll parties acknowledge and agree that they have not entered into any agreement between them in reliance on anything said or promised by the other which is not in these Terms and Conditions.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf a Court or other body says that any part of these Terms and Conditions is unenforceable, the rest of them will stand.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf either you or we need to give formal notice to the other, it must be done by email to the address each of us gives to the other from time to time.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThese Terms and Conditions contain the entire understanding between you and us.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<strong>Data Collected</strong><br>\n\t\t\t\t\t\tWithout limitation, all or any of the following Data may be collected by the Site from time to time:<br>\n\t\t\t\t\t\t•\tname;<br>\n\t\t\t\t\t\t•\tdate of birth;<br>\n\t\t\t\t\t\t•\tgender;<br>\n\t\t\t\t\t\t•\tcontact information such as email addresses and telephone numbers;<br>\n\t\t\t\t\t\t•\toperating system (automatically collected); and\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<strong>Our Use of Data</strong><br>\n\t\t\t\t\t\tWe will keep any personal Data you submit for 6 months.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tUnless we are obliged or allowed by law, and subject to “Third Party Sites and Services” below, we will not disclose your Data to third parties. This does not include the companies which form part of our group.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAll personal Data is stored securely in accordance with the principles of the Data Protection Act 1998.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWe use your Data so as to give you the best possible service and experience when using the service\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tSpecifically, Data may be used by us for the following reasons:<br>\n\t\t\t\t\t\t•\tinternal record keeping;\n\t\t\t\t\t\t•\timprovement of our products/services;\n\t\t\t\t\t\t•\ttransmission by email of promotional materials that may be of interest to you;\n\t\t\t\t\t\t•\tcontact for market research purposes which may be done using email, telephone, fax or mail; or\n\t\t\t\t\t\t•\tto customise or update the Site.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<strong>INFORMATION ABOUT THE EXERCISE OF THE RIGHT TO CANCEL THIS CONTRACT</strong>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIMPORTANT NOTE – these cancellation provisions do not apply to foodstuffs and beverages nor to circumstances where you are not buying as a consumer.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIF YOU WISH TO CANCEL AN ORDER YOU SHOULD NOTIFY US AS SOON AS YOU CAN\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tCancellation less than 24 hours from order – or custom made products\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tNO RIGHT TO CANCEL\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf you order a product where:<br>\n\t\t\t\t\t\tyou have asked us to deliver to you less than 14 days after the date of your order; and/or we are preparing a Shisha or other product to your specifications\n\t\t\t\t\t\tthe following rights apply if you wish to cancel your order:\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t•\tIf you cancel before we start processing your order, we will charge and administration fee of 25% of the value of your order and refund the balance to you.<br>\n\t\t\t\t\t\t•\tIf you cancel after we have started processing your order but before it is ready to be delivered to you, we will make a charge of 50% of the value of the order to cover administration costs and preparation costs.<br>\n\t\t\t\t\t\t•\tIf you cancel after the order is ready for delivery to you, we will charge the full cost of all items.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tCharges that may occur if our items hired by you are damaged or lost\n\t\t\t\t\t</p>\n\t\t\t\t\t<table>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <th>Item</th>\n\t\t\t\t\t    <th>Charge</th>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td>Head</td>\n\t\t\t\t\t    <td>£5</td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td>Stem</td>\n\t\t\t\t\t    <td>£10</td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td>Vase</td>\n\t\t\t\t\t    <td>£10</td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td>Hose</td>\n\t\t\t\t\t    <td>£8</td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td>Tongs</td>\n\t\t\t\t\t    <td>£2</td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td>Ice-Pipe</td>\n\t\t\t\t\t    <td>£10</td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tYou agree and understand that at all times it’s your responsibility to look after the hired equipment and how they are used in the case of any hard done. \n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<ul>\n\t\t\t\t\t<small [hidden]=\"terms.termsAgree || !submitted\" style=\"color: red\">You must agree to the terms and conditions</small>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"terms\" [(ngModel)] = \"terms.termsAgree\">\n\t\t\t\t\t\tI have read and agree to the terms and conditions above\n\t\t\t\t\t</li>\n\t\t\t\t\t<small [hidden]=\"terms.ageAgree || !submitted\" style=\"color: red\">You must be 18 or over to place an order</small>\t\t\t\t\t\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"age\" [(ngModel)] = \"terms.ageAgree\">\n\t\t\t\t\t\tI am over 18\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"form-group\">\n\t                <button (click) = \"tabTogle(2)\" type=\"button\" class=\"btn btn-info float-left\">Back</button>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <button type=\"button\" class=\"btn btn-success float-right\" (click)=\"placeOrder(3)\">Place order</button>\n\t            </div>\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n      </tab>\n    </tabs>\n  \t<div class=\"card card-outline-secondary\" *ngIf=\"ordered\">\n\t\t<div class=\"card-block confirmation\">\n\t\t\t<h3>Order number: {{orderNumber}}</h3>  \n\t\t\t<h4>Thank you for your order</h4>\n\t\t\t<h5>Yes. We heard you loud and clear!<br> We will deliver everthing to you within the next 45 minutes</h5><br>\n\t\t\t<div class=\"form-group\">\n            <a routerLink=\"/home\"><button type=\"button\" class=\"btn btn-success\">Back to Homepage</button></a>\n        </div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tab__ = __webpack_require__("../../../../../src/app/pages/tabs/tab.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_address_service__ = __webpack_require__("../../../../../src/app/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









__WEBPACK_IMPORTED_MODULE_8_moment__["locale"]("en-gb");
var CheckoutComponent = (function () {
    function CheckoutComponent(orderService, userService, addressService, router, flashMessage) {
        this.orderService = orderService;
        this.userService = userService;
        this.addressService = addressService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.basket = {
            items: [],
            subtotal: 0,
            discount: 0
        };
        this.addresses = [];
        this.chosenAddress = null;
        this.paymentType = "cash";
        this.deliveryTime = ["As soon as possible"];
        this.ordered = false;
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.orderNumber = this.letters[this.getId(0, 25)] + this.letters[this.getId(0, 25)] + this.getId(1, 10000000);
        this.terms = {
            termsAgree: false,
            ageAgree: false
        };
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generateTimeSlots();
        this.orderService.fetchBasket(this.orderService.loadBasketId()).subscribe(function (data) {
            if (data.success) {
                _this.basket = data.basket;
                if (_this.basket["items"].length == 0 || (_this.basket["subtotal"] + _this.basket["discount"]) < 7.49) {
                    _this.router.navigate(['basket']);
                }
            }
        });
        this.userService.fetchCurrentUser().subscribe(function (data) {
            if (data.success) {
                _this.user = data.user;
                _this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormGroup */]({
                    name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */](_this.user.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(25)])),
                    mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */](_this.user.mobile, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^[0-9+]*$"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(16)])),
                    streetNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^[a-zA-Z0-9 ]*$"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(50)])),
                    streetName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^[a-zA-Z0-9 ]*$"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(50)])),
                    city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(50)])),
                    postcode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("^[a-zA-Z0-9 ]*$"), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(10)])),
                    deliveryTime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]("As soon as possible", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
                    comment: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(250))
                });
            }
            else {
                _this.userService.signOut();
                _this.flashMessage.show("User authentication failed please login again", { cssClass: 'alert-danger', timeout: 3000 });
                _this.user = null;
                _this.router.navigate(["/"]);
            }
        });
        this.addressService.getAddresses(this.userService.getCurrentUser().id, this.userService.loadToken()).subscribe(function (data) {
            if (data.success) {
                _this.addresses = data.addresses;
                _this.chosenAddress = _this.addresses[0];
            }
            else {
                _this.newAddress = true;
            }
        });
    };
    CheckoutComponent.prototype.tabTogle = function (activeIndex) {
        this.tabs.toArray().forEach(function (tab, index) {
            tab.active = false;
            tab.done = index < activeIndex;
        });
        this.tabs.toArray()[activeIndex].active = true;
    };
    CheckoutComponent.prototype.next = function (formData, index) {
        this.submitted = true;
        if (this.form.controls.name.valid && this.form.controls.mobile.valid) {
            this.tabTogle(index);
            this.submitted = false;
        }
    };
    CheckoutComponent.prototype.proceedToPayment = function (formData, index) {
        if (this.chosenAddress == null) {
            this.submitted = true;
            if (this.form.valid) {
                this.tabTogle(index);
                this.submitted = false;
            }
        }
        else {
            this.submitted = true;
            if (this.form.controls.deliveryTime.valid && this.form.controls.comment.valid) {
                this.tabTogle(index);
                this.submitted = false;
            }
        }
    };
    CheckoutComponent.prototype.addressToggle = function () {
        if (this.chosenAddress !== null) {
            this.chosenAddress = null;
        }
        else {
            this.chosenAddress = this.addresses[0];
        }
        this.newAddress = !this.newAddress;
    };
    CheckoutComponent.prototype.selectAddress = function (index) {
        this.chosenAddress = this.addresses[index];
    };
    CheckoutComponent.prototype.placeOrder = function (index) {
        this.submitted = true;
        if (this.terms["termsAgree"] && this.terms["ageAgree"]) {
            var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var order = {
                "orderNumber": this.orderNumber,
                "date": __WEBPACK_IMPORTED_MODULE_8_moment__(),
                "deliveryTime": this.form.controls.deliveryTime.value,
                "customer": {
                    "name": this.form.controls.name.value,
                    "email": this.user.email,
                    "mobile": this.form.controls.mobile.value,
                    "id": this.user._id
                },
                "basket": this.basket["items"],
                "bill": {
                    "discount": this.basket["discount"],
                    "total": this.basket["subtotal"],
                    "paymentType": this.paymentType
                },
                "comment": this.form.controls.comment.value
            };
            if (this.chosenAddress !== null && (this.form.controls.name.valid && this.form.controls.mobile.valid)) {
                order["deliveryAddress"] = {
                    "streetNumber": this.chosenAddress.streetNumber,
                    "streetName": this.chosenAddress.streetName,
                    "city": this.chosenAddress.city,
                    "postcode": this.chosenAddress.postcode
                };
                this.tabTogle(index);
                //Submit order to the database
                this.submitOrder(order);
            }
            else if (this.form.valid) {
                order["deliveryAddress"] = {
                    "streetNumber": this.form.controls.streetNumber.value,
                    "streetName": this.form.controls.streetName.value,
                    "city": this.form.controls.city.value,
                    "postcode": this.form.controls.postcode.value
                };
                var newAddress = {
                    "userId": this.user._id,
                    "streetNumber": order["deliveryAddress"].streetNumber,
                    "streetName": order["deliveryAddress"].streetName,
                    "city": order["deliveryAddress"].city,
                    "postcode": order["deliveryAddress"].postcode
                };
                //save the new address to the database
                this.addressService.addAddress(newAddress, this.userService.loadToken()).subscribe(function (data) {
                    return data;
                });
                this.tabTogle(index);
                //Submit order to the database
                this.submitOrder(order);
            }
            else {
                this.flashMessage.show("Checkout failed (data entry invalid)", { cssClass: 'alert-danger', timeout: 4000 });
            }
        }
    };
    CheckoutComponent.prototype.getId = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    CheckoutComponent.prototype.submitOrder = function (order) {
        var _this = this;
        //update user mobile contact details
        if (!this.user.mobile || this.user.mobile !== this.form.controls.mobile.value) {
            var newData = { mobile: this.form.controls.mobile.value };
            this.userService.updateUserProfile(newData, this.user._id).subscribe(function (user) {
                console.log(user);
            });
        }
        if (this.user && this.basket["items"].length !== 0) {
            //save the order in the database and clear the basket
            this.orderService.saveOrder(order, this.userService.loadToken()).subscribe(function (data) {
                if (data.success) {
                    _this.basket = { items: [], subtotal: 0, discount: 0 };
                    _this.orderService.updateBasket(_this.basket);
                    //triger acknoledging the receipt of order
                    _this.ordered = true;
                    _this.userService.sendOrderConfirmationMail(order).subscribe(function (respond) { });
                }
            });
        }
        else {
            this.flashMessage.show("Basket error, please try loggining again", { cssClass: 'alert-danger', timeout: 4000 });
        }
    };
    CheckoutComponent.prototype.proceedToConfirm = function (index) {
        this.tabTogle(index);
    };
    CheckoutComponent.prototype.generateTimeSlots = function () {
        var adjustingFigures = [0, 10, 20, 30, 40, 50, 60];
        var currentTime = __WEBPACK_IMPORTED_MODULE_8_moment__();
        var minutes = currentTime.get("minute");
        for (var i = 0; i < adjustingFigures.length; i++) {
            if (minutes <= adjustingFigures[i]) {
                if (minutes === adjustingFigures[i]) {
                    currentTime.add(45, "m");
                    break;
                }
                else {
                    currentTime.add((adjustingFigures[i] - minutes) + 45, "m");
                    break;
                }
            }
        }
        for (var i = 0; i < 288; i++) {
            this.deliveryTime.push(currentTime.format('dddd') + " " + currentTime.format('LT'));
            currentTime.add(10, "m");
        }
    };
    return CheckoutComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_4__tabs_tab__["a" /* Tab */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], CheckoutComponent.prototype, "tabs", void 0);
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/pages/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_address_service__["a" /* AddressService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], CheckoutComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/desserts/desserts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control{\n\tpadding: 0;\n\tposition: relative; \n\twidth: 50px;\n}\n\n.qButton-one{\n\tposition: relative; width: 25px; margin-left: 30%;\n}\n\n.qButton-two{\n\tposition: relative; \n\twidth: 25px\n}\n.card-block{\n\t\tpadding: 5px;\n}\n\n.card{\n\tbackground-color: #fff9f0;\n}\n\n@media only screen and (max-width: 992px) {\n\t.qButton-one{\n\t\tposition: relative; width: 20px; margin-left: 20%;\n\t}\n\n\t.qButton-two{\n\t\tposition: relative; \n\t\twidth: 20px\n\t}\n\n\t.form-control{\n\t\tpadding: 0;\n\t\tposition: relative; \n\t\twidth: 40px;\n\t}\n\t.btn{\n\t\tpadding-right: 2px;\n\t\tpadding-left:  2px;\n\t}\n\t.card{\n\t\tmargin-right: -8px;\n\t\tmargin-left: -8px;\n\t}\n\n\t.card-block{\n\t\tpadding: 5px;\n\t}\n}\n\n@media only screen and (max-width: 576px){\n\t.qButton-one{\n\t\tposition: relative; width: 20px; margin-left: 35%;\n\t}\n\n\t.btn{\n\t    padding-top: 0.5rem;\n\t    padding-right: 1rem;\n\t    padding-bottom: 0.5rem;\n\t    padding-left: 1rem;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/desserts/desserts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 15px;\">\n\t<h3>Cakes £2.49</h3>\n\t<div class=\"row\">\n\t\t<div *ngFor=\"let cake of cakes; let i = index\" class=\"col-sm-3\">\n\t\t\t<div class=\"card\" style=\"text-align: center; margin-top: 10px;\">\n\t\t\t  <img style=\"max-height: 200px;\" class=\"card-img-top\" src=\"../../assets/products/{{cake.avatar}}.jpg\" alt=\"Card image cap\">\n\t\t\t  <div class=\"card-block\">\n\t\t\t  \t<hr>\n\t\t\t    <h6 class=\"card-title\">{{cake.name}}</h6>\n\n\t\t\t    <!-- Quantity controller -->\n\t\t\t    <div class=\"row\" style=\"margin-bottom: 5px;\">\n\t\t\t\t\t<button (click) =\"adjustQuantity(i, -1)\" type=\"button\" class=\"btn btn-sm btn-danger minus-button qButton-one\" >-</button>\n\t\t\t\t\t<div class=\"form-control\">{{cake.quantity}}</div>\n\t\t\t\t    <button (click) =\"adjustQuantity(i, 1)\" type=\"button\" class=\"btn btn-sm btn-success plus-button qButton-two\">+</button>\n\t\t\t\t</div>\n\t\t\t    <a href=\"javascript:void(0)\" (click) = \"addToBasket(cake)\" class=\"btn btn-primary\">Add to basket</a>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<h3>B&J Ice-Cream (100ml) £2.29</h3>\n\t<div class=\"row\">\n\t\t<div *ngFor=\"let iceCream of iceCreams; let i = index\" class=\"col-sm-3\">\n\t\t\t<div class=\"card\" style=\"text-align: center; margin-top: 10px;\">\n\t\t\t  <img style=\"max-height: 200px;\" class=\"card-img-top\" src=\"../../assets/products/{{iceCream.avatar}}.jpg\" alt=\"Card image cap\">\n\t\t\t  <div class=\"card-block\">\n\t\t\t  \t<hr>\n\t\t\t    <h6 class=\"card-title\">{{iceCream.name}}</h6>\n\n\t\t\t    <!-- Quantity controller -->\n\t\t\t    <div class=\"row\" style=\"margin-bottom: 5px;\">\n\t\t\t\t\t<button (click) =\"adjustIceQuantity(i, -1)\" type=\"button\" class=\"btn btn-sm btn-danger minus-button qButton-one\" >-</button>\n\t\t\t\t\t<div class=\"form-control\">{{iceCream.quantity}}</div>\n\t\t\t\t    <button (click) =\"adjustIceQuantity(i, 1)\" type=\"button\" class=\"btn btn-sm btn-success plus-button qButton-two\">+</button>\n\t\t\t\t</div>\n\t\t\t    <a href=\"javascript:void(0)\" (click) = \"addToBasket(iceCream)\" class=\"btn btn-primary\">Add to basket</a>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/desserts/desserts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DessertsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DessertsComponent = (function () {
    function DessertsComponent(flashMessage, orderService) {
        this.flashMessage = flashMessage;
        this.orderService = orderService;
        this.cakes = [
            {
                name: "Carrot Cake",
                category: "dessert",
                costs: 2.49,
                avatar: "carrotcake",
                quantity: 1
            },
            {
                name: "Strawberry Cheesecake",
                category: "dessert",
                costs: 2.49,
                avatar: "stcake",
                quantity: 1
            },
            {
                name: "Tennessee Toffee Pie",
                category: "dessert",
                costs: 2.49,
                avatar: "ttpie",
                quantity: 1
            },
            {
                name: "Chocolate Fudge Cake",
                category: "dessert",
                costs: 2.49,
                avatar: "chocake",
                quantity: 1
            }
        ];
        this.iceCreams = [
            {
                name: "Caramel Chew Chew",
                category: "dessert",
                costs: 2.29,
                avatar: "ccchew",
                quantity: 1
            },
            {
                name: "Chocolate Fudge Brownie",
                category: "dessert",
                costs: 2.29,
                avatar: "cfb",
                quantity: 1
            },
            {
                name: "Cookie Dough",
                category: "dessert",
                costs: 2.29,
                avatar: "ckidough",
                quantity: 1
            },
            {
                name: "Strawberry Cheesecake",
                category: "dessert",
                costs: 2.29,
                avatar: "icestcake",
                quantity: 1
            },
        ];
    }
    DessertsComponent.prototype.ngOnInit = function () {
    };
    DessertsComponent.prototype.adjustQuantity = function (index, q) {
        var quantity = this.cakes[index]["quantity"];
        if ((quantity < 20 || q === -1) && (quantity > 1 || q === 1)) {
            this.cakes[index]["quantity"] = quantity + q;
        }
    };
    DessertsComponent.prototype.addToBasket = function (dessert) {
        var item = Object.assign({}, dessert);
        item["costs"] = item["costs"] * item["quantity"];
        this.orderService.addToBasket(item);
        this.flashMessage.show("Item successfully added to basket!", { cssClass: 'alert-success', timeout: 3000 });
    };
    DessertsComponent.prototype.adjustIceQuantity = function (index, q) {
        var quantity = this.iceCreams[index]["quantity"];
        if ((quantity < 20 || q === -1) && (quantity > 1 || q === 1)) {
            this.iceCreams[index]["quantity"] = quantity + q;
        }
    };
    return DessertsComponent;
}());
DessertsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-desserts',
        template: __webpack_require__("../../../../../src/app/pages/desserts/desserts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/desserts/desserts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _b || Object])
], DessertsComponent);

var _a, _b;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/desserts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/drinks/drinks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control{\n\tpadding: 0;\n\tposition: relative; \n\twidth: 50px;\n}\n\n.qButton-one{\n\tposition: relative; width: 25px; margin-left: 30%;\n}\n\n.qButton-two{\n\tposition: relative; \n\twidth: 25px\n}\n.card-block{\n\t\tpadding: 5px;\n}\n\n.card{\n\tbackground-color: #fff9f0;\n}\n\n@media only screen and (max-width: 992px) {\n\t.qButton-one{\n\t\tposition: relative; width: 20px; margin-left: 20%;\n\t}\n\n\t.qButton-two{\n\t\tposition: relative; \n\t\twidth: 20px\n\t}\n\n\t.form-control{\n\t\tpadding: 0;\n\t\tposition: relative; \n\t\twidth: 40px;\n\t}\n\t.btn{\n\t\tpadding-right: 2px;\n\t\tpadding-left:  2px;\n\t}\n\t.card{\n\t\tmargin-right: -8px;\n\t\tmargin-left: -8px;\n\t}\n\n\t.card-block{\n\t\tpadding: 5px;\n\t}\n}\n\n@media only screen and (max-width: 576px){\n\t.qButton-one{\n\t\tposition: relative; width: 20px; margin-left: 35%;\n\t}\n\n\t.btn{\n\t    padding-top: 0.5rem;\n\t    padding-right: 1rem;\n\t    padding-bottom: 0.5rem;\n\t    padding-left: 1rem;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/drinks/drinks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div *ngFor=\"let drink of drinks; let i = index\" class=\"col-sm-3\">\n\t\t\t<div class=\"card\" style=\"text-align: center; margin-top: 10px;\">\n\t\t\t  <img style=\"max-height: 200px;\" class=\"card-img-top\" src=\"../../assets/products/{{drink.avatar}}.jpg\" alt=\"Card image cap\">\n\t\t\t  <div class=\"card-block\">\n\t\t\t  \t<hr>\n\t\t\t    <h6 class=\"card-title\">{{drink.name}} £{{drink.costs.toFixed(2)}}</h6>\n\n\t\t\t    <!-- Quantity controller -->\n\t\t\t    <div class=\"row\" style=\"margin-bottom: 5px;\">\n\t\t\t\t\t<button (click) =\"adjustQuantity(i, -1)\" type=\"button\" class=\"btn btn-sm btn-danger minus-button qButton-one\" >-</button>\n\t\t\t\t\t<div class=\"form-control\">{{drink.quantity}}</div>\n\t\t\t\t    <button (click) =\"adjustQuantity(i, 1)\" type=\"button\" class=\"btn btn-sm btn-success plus-button qButton-two\">+</button>\n\t\t\t\t</div>\n\t\t\t    <a href=\"javascript:void(0)\" (click) = \"addToBasket(drink)\" class=\"btn btn-primary\">Add to basket</a>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/drinks/drinks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinksComponent = (function () {
    function DrinksComponent(flashMessage, orderService) {
        this.flashMessage = flashMessage;
        this.orderService = orderService;
        this.drinks = [
            {
                name: "J2O Apple & Raspberry",
                category: "drink",
                costs: 1.49,
                avatar: "j2oap",
                quantity: 1
            },
            {
                name: "J2O Orange & Passion Fruit",
                category: "drink",
                costs: 1.49,
                avatar: "j2oop",
                quantity: 1
            },
            {
                name: "J2O Apple & Mango",
                category: "drink",
                costs: 1.49,
                avatar: "j2oam",
                quantity: 1
            },
            {
                name: "RedBull",
                category: "drink",
                costs: 1.49,
                avatar: "redbull",
                quantity: 1
            },
            {
                name: "Coke",
                category: "drink",
                costs: 0.79,
                avatar: "coke",
                quantity: 1
            },
            {
                name: "Diet Coke",
                category: "drink",
                costs: 0.79,
                avatar: "diet-coke",
                quantity: 1
            },
            {
                name: "Fanta",
                category: "drink",
                costs: 0.79,
                avatar: "fanta",
                quantity: 1
            },
            {
                name: "7UP",
                category: "drink",
                costs: 0.79,
                avatar: "7up",
                quantity: 1
            },
            {
                name: "Tropicana Orange Juice",
                category: "drink",
                costs: 1.29,
                avatar: "toj",
                quantity: 1
            },
            {
                name: "Water",
                category: "drink",
                costs: 0.79,
                avatar: "water",
                quantity: 1
            }
        ];
    }
    DrinksComponent.prototype.ngOnInit = function () {
    };
    DrinksComponent.prototype.adjustQuantity = function (index, q) {
        var quantity = this.drinks[index]["quantity"];
        if ((quantity < 20 || q === -1) && (quantity > 1 || q === 1)) {
            this.drinks[index]["quantity"] = quantity + q;
        }
    };
    DrinksComponent.prototype.addToBasket = function (drink) {
        var item = Object.assign({}, drink);
        item["costs"] = item["costs"] * item["quantity"];
        this.orderService.addToBasket(item);
        this.flashMessage.show("Item successfully added to basket!", { cssClass: 'alert-success', timeout: 3000 });
    };
    return DrinksComponent;
}());
DrinksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-drinks',
        template: __webpack_require__("../../../../../src/app/pages/drinks/drinks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/drinks/drinks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _b || Object])
], DrinksComponent);

var _a, _b;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/drinks.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-head/extra-head.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    padding-top: 5px;\n}\n.product-img img{\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.options{\n    cursor: pointer;\n    border: solid 2px;\n    border-color: #EFF5F3;\n    border-radius: 15px;\n}\n\n.options:hover{\n    border-color: #70D6B4;\n}\n\n.label{\n\tmargin-left: 10px;\n}\n\n.quantity{\n\twidth: 40px;\n}\n\nul{\n\tlist-style: none;\n}\n\n.form-control{\n  position: relative; \n  width: 50px;\n  text-align: center;\n}\n\n.qButton-one{\n  margin-left: 5px;\n  position: relative; width: 25px;\n}\n\n.qButton-two{\n  position: relative; \n  width: 25px\n}\n\n.qLabel{\n  position: relative; \n  font-weight: bold;\n  margin-left: 20%\n}\n\n@media only screen and (max-width: 576px){\n  .qLabel{\n      position: relative; \n      font-weight: bold; \n      margin-left: 8px;\n  }\n  .btn-info{\n    padding: 3px;\n  }\n}\n\n.mauto{margin: 0 auto;}\n.px2 { padding-right: 2rem; padding-left: 2rem; }\n.mt1 {margin-top: 1rem;}\n.mb1 {margin-bottom: 1rem;}\n.clearfix {\n\tborder-radius: 10px;\n\tbackground-color: #F2E6FB;\n  &:before, &:after { content: \" \"; display: table; }\n  &:after { clear: both; }\n}\n\n.relative{position: relative;}\n.absolute{position: absolute;}\n.t1{top:2px;}\n.r0{right:0;}\n\n.bg-white{background-color: #F2E6FB;}\n.bottom-dotted{border-bottom-style: dotted;}\n.border-color-light-gray{ border-color: #ccc; }\n\np, .p{\n  font-size: 1.125rem;\n  line-height: 1.7rem;\n  letter-spacing: 1.5px;\n  padding-bottom: 1rem;\n  margin:0;\n}\n\n.row{\n  margin-left: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-head/extra-head.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n       <div class=\"col-md-5 product-img\">\n            <img style = \"max-width: 100%\" class = \"img-responsive\" src=\"../../assets/products/extra_head.jpg\"/>\n        </div>\n        <div class=\"col-md-7\">\n            <!-- Datos del vendedor y titulo del producto -->\n            <h3>Extra Head</h3>\n            <hr>\n            <form [formGroup] = \"form\" (ngSubmit) = \"addToBasket(form.value)\">\n            \t<h5>1: Pick a head:</h5>\n            \t<select required name = \"head\" formControlName = \"head\" hidden>\n            \t  <option value=\"\">Select</option>\n\t\t\t\t  <option value=\"Egyption Clay\">Egyption Clay</option>\n\t\t\t\t  <option value=\"Apple\">Apple</option>\n\t\t\t\t  <option value=\"Pineapple\">Pineapple</option>\n\t\t\t\t  <option value=\"Orange\">Orange</option>\n\t\t\t\t</select>\n\t\t\t\t<small [hidden]=\"!submitted || form.controls.head.valid\" style=\"color: red\">No head chosen!</small>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHead('Egyption Clay', 0)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\"  src=\"../../assets/shisha parts/ehead.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"head\">Egyption Clay</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHead('Apple', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/applehead.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"head\">Apple* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHead('Pineapple', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/phead.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"head\">Pineapple* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHead('Orange', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/orangehead.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"head\">Orange* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<h5>4: Flavours:</h5>\n\t\t\t\t<h6>Alfakher</h6>\n\t\t\t\t<small [hidden]=\"!submitted || form.controls.flavours.valid\" style=\"color: red\">No flavours chosen!</small>\n\t\t\t\t<small [hidden]=\"pickedFlavours.length < 4\" style=\"color: red\">You are only allowed to choose up to three flavours!</small>\n\t\t\t\t<ul class=\"row\">\n\t\t\t\t\t<!-- Its the flavourPicker drictive requiroment that <li> tag should be the first child!-->\n\t\t\t\t\t<li *ngFor=\"let flavour of flavours\" class=\"col-sm-4 flavours\">\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"flavours\" (change) = \"pickFlavour(flavour, $event.target.checked)\" flavourPicker>\n\t\t\t\t\t\t<label>{{flavour}}</label>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<h6>Starbuzz* +£1.00</h6>\n\t\t\t\t<ul class=\"row\">\n\t\t\t\t\t<!-- Its the flavourPicker drictive requiroment that <li> tag should be the first child!-->\n\t\t\t\t\t<li *ngFor=\"let flavour of starbuzzFlavours\" class=\"col-sm-4 flavours\">\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"flavours\" (change) = \"pickFlavour(flavour, $event.target.checked, true)\" flavourPicker>\n\t\t\t\t\t\t<label>{{flavour}}</label>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<hr>\n\t\t\t\t<div class=\"clearfix full-width mb1\">\n\t\t    \t\t<div class=\"left quarter-width px2\">\n\t\t\t    \t\t<p class=\"small bottom-dotted border-color-light-gray relative mb1\">\n\t\t\t    \t\t\t<span class=\"bg-white absolute t1\">Base Price</span> <span class=\"bg-white absolute t1 r0\"> &nbsp; £{{costs.head.toFixed(2)}}</span>\n\t\t\t    \t\t</p>\n\t\t\t    \t\t<p class=\"small bottom-dotted border-color-light-gray relative mb1\">\n\t\t\t    \t\t\t<span class=\"bg-white absolute t1\">Flavours & Options</span> <span class=\"bg-white absolute t1 r0\"> &nbsp; £{{(costs.options+costs.flavours).toFixed(2)}}</span>\n\t\t\t    \t\t</p>\t\t\t    \t\t\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<div class=\"col-sm-4\" style=\"font-weight: bold; float: right;\">\n\t\t\t          \t<hr>\n\t\t\t          \t<p style=\"float: right;\">Total: £{{(costs.head+costs.options+costs.flavours).toFixed(2)}}</p>\n\t\t\t        </div>\n\t    \t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<div  class=\"row\" style=\"margin-bottom: 5px;\">\n\t\t\t\t\t<input type=\"submit\"  class=\"btn btn-info\" value=\"Add To Basket\">\n\t\t\t\t\t<label class=\"qLabel hidden-xs-down\">Quantity:</label>\n\t\t\t\t\t<label class=\"qLabel hidden-sm-up\">Qty:</label>\n\t\t\t\t\t<button (click) =\"adjustByQuantity(-1)\" type=\"button\" class=\"btn btn-sm btn-danger minus-button qButton-one\" >-</button>\n\t\t\t\t\t<div class=\"form-control\">{{quantity}} </div>\n\t\t\t\t    <button (click) =\"adjustByQuantity(1)\" type=\"button\" class=\"btn btn-sm btn-success plus-button qButton-two\">+</button>\n\t\t\t\t</div>\n            </form>\n        </div>                              \t\t\n    </div>\n</div> "

/***/ }),

/***/ "../../../../../src/app/pages/extra-head/extra-head.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraHeadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExtraHeadComponent = (function () {
    function ExtraHeadComponent(orderService, router, flashMessage) {
        this.orderService = orderService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.flavours = ['Grape', 'Lemon', 'Peach', 'Coconut', 'Pomegranate', 'Strawberry', 'Sweet Melon', 'Mint', 'Orange', 'Vanila', 'Fresh Mist', 'Watermelon', 'Double Apple', 'Blueberry'];
        this.starbuzzFlavours = ['Irn bru', 'Skittles', 'Frozen Apple', 'Frozen Blueberry', 'Pink lemonade'];
        this.pickedFlavours = [];
        this.numberOfPremiumFlavoursPicked = 0;
        this.quantity = 1;
        this.submitted = false;
        this.costs = { head: 5, options: 0, flavours: 0 };
        this.prices = { head: 5, options: 0, flavours: 0 };
    }
    ExtraHeadComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormGroup */]({
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('extra-head'),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('Clasic Khalil Mamoon'),
            costs: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */](this.costs),
            head: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            flavours: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            quantity: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */](1)
        });
    };
    ExtraHeadComponent.prototype.selectHead = function (head, price) {
        this.form.controls['head'].setValue(head);
        this.prices['options'] = price;
        this.costs['options'] = price * this.quantity;
    };
    ExtraHeadComponent.prototype.addToBasket = function (item) {
        var _this = this;
        this.submitted = true;
        if (item.flavours.length <= 3 && this.form.valid) {
            item['costs'] = Object.values(this.costs).reduce(function (sum, value) { return sum + value; });
            this.orderService.addToBasket(item);
            //reload the page
            this.router.navigateByUrl("safas", { skipLocationChange: true }).then(function () { _this.router.navigate(['extras']); });
            window.scrollTo(0, 0);
            this.flashMessage.show("Item successfully added to basket!", { cssClass: 'alert-success', timeout: 3000 });
        }
    };
    ExtraHeadComponent.prototype.pickFlavour = function (flavour, isChecked, premium) {
        if (premium === void 0) { premium = false; }
        if (isChecked) {
            this.pickedFlavours.push(flavour);
            if (premium) {
                this.numberOfPremiumFlavoursPicked++;
                this.prices['flavours'] = 1;
                this.costs['flavours'] = 1 * this.quantity;
            }
        }
        else {
            var index = this.pickedFlavours.indexOf(flavour);
            this.pickedFlavours.splice(index, 1);
            if (premium) {
                this.numberOfPremiumFlavoursPicked--;
                if (this.numberOfPremiumFlavoursPicked <= 0) {
                    this.prices['flavours'] = 0;
                    this.costs['flavours'] = 0;
                }
            }
        }
        this.form.controls['flavours'].setValue(this.pickedFlavours);
    };
    ExtraHeadComponent.prototype.adjustByQuantity = function (q) {
        if ((this.quantity < 20 || q === -1) && (this.quantity > 1 || q === 1)) {
            this.quantity = this.quantity + q;
            this.form.controls['quantity'].setValue(this.quantity);
            this.multiplyByQuantity(this.quantity);
        }
    };
    ExtraHeadComponent.prototype.multiplyByQuantity = function (q) {
        for (var cost in this.costs) {
            this.costs[cost] = this.prices[cost] * q;
        }
    };
    return ExtraHeadComponent;
}());
ExtraHeadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-extra-head',
        template: __webpack_require__("../../../../../src/app/pages/extra-head/extra-head.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/extra-head/extra-head.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ExtraHeadComponent);

var _a, _b, _c;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/extra-head.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extras/extras.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control{\n  padding: 0;\n  position: relative; \n  width: 50px;\n}\n\n.qButton-one{\n  position: relative; width: 25px; margin-left: 30%;\n}\n\n.qButton-two{\n  position: relative; \n  width: 25px\n}\n.card{\n  background-color: #fff9f0;\n}\n\n@media only screen and (max-width: 992px) {\n  .qButton-one{\n    position: relative; width: 20px; margin-left: 20%;\n  }\n\n  .qButton-two{\n    position: relative; \n    width: 20px\n  }\n\n  .form-control{\n    padding: 0;\n    position: relative; \n    width: 40px;\n  }\n  .btn{\n    padding-right: 2px;\n    padding-left:  2px;\n  }\n  .card{\n    margin-right: -8px;\n    margin-left: -8px;\n  }\n\n  .card-block{\n    padding: 5px;\n  }\n}\n\n@media only screen and (max-width: 576px){\n  .qButton-one{\n    position: relative; width: 20px; margin-left: 35%;\n  }\n\n  .btn{\n      padding-top: 0.5rem;\n      padding-right: 1rem;\n      padding-bottom: 0.5rem;\n      padding-left: 1rem;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extras/extras.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-3\" routerLink=\"/extra-head\">\n\t\t\t<div class=\"card\" style=\"text-align: center; margin-top: 10px;\">\n\t\t\t  <img style=\"max-height: 200px;\" class=\"card-img-top\" src=\"../../assets/products/extra-head.jpg\" alt=\"Card image cap\">\n\t\t\t  <div class=\"card-block\">\n\t\t\t  \t<hr>\n\t\t\t    <h5 class=\"card-title\">Extra Head</h5>\n\t\t\t    <a href=\"javascript:void(0)\"class=\"btn btn-primary\">Choose</a>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngFor=\"let extra of extras; let i = index\" class=\"col-sm-3\">\n\t\t\t<div class=\"card\" style=\"text-align: center; margin-top: 10px;\">\n\t\t\t  <img style=\"max-height: 200px;\" class=\"card-img-top\" src=\"../../assets/products/{{extra.avatar}}.jpg\" alt=\"Card image cap\">\n\t\t\t  <div class=\"card-block\">\n\t\t\t  \t<hr>\n\t\t\t    <h5 class=\"card-title\">{{extra.name}} £{{extra.costs.toFixed(2)}}</h5>\n\n\t\t\t    <!-- Quantity controller -->\n\t\t\t    <div class=\"row\" style=\"margin-bottom: 5px;\">\n\t\t\t\t\t<button (click) =\"adjustQuantity(i, -1)\" type=\"button\" class=\"btn btn-sm btn-danger minus-button qButton-one\" >-</button>\n\t\t\t\t\t<div class=\"form-control\">{{extra.quantity}}</div>\n\t\t\t\t    <button (click) =\"adjustQuantity(i, 1)\" type=\"button\" class=\"btn btn-sm btn-success plus-button qButton-two\">+</button>\n\t\t\t\t</div>\n\t\t\t    <a href=\"javascript:void(0)\" (click) = \"addToBasket(extra)\" class=\"btn btn-primary\">Add to basket</a>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/extras/extras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtrasComponent = (function () {
    function ExtrasComponent(flashMessage, orderService) {
        this.flashMessage = flashMessage;
        this.orderService = orderService;
        this.extras = [
            {
                name: "Self Burning Coals",
                category: "extras",
                costs: 1.99,
                avatar: "SBcoal",
                quantity: 1
            },
            {
                name: "Coconut Shell Coals",
                category: "extras",
                costs: 1.99,
                avatar: "CScoal",
                quantity: 1
            }
        ];
    }
    ExtrasComponent.prototype.ngOnInit = function () {
    };
    ExtrasComponent.prototype.adjustQuantity = function (index, q) {
        var quantity = this.extras[index]["quantity"];
        if ((quantity < 20 || q === -1) && (quantity > 1 || q === 1)) {
            this.extras[index]["quantity"] = quantity + q;
        }
    };
    ExtrasComponent.prototype.addToBasket = function (drink) {
        var item = Object.assign({}, drink);
        item["costs"] = item["costs"] * item["quantity"];
        this.orderService.addToBasket(item);
        this.flashMessage.show("Item successfully added to basket!", { cssClass: 'alert-success', timeout: 3000 });
    };
    return ExtrasComponent;
}());
ExtrasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-extras',
        template: __webpack_require__("../../../../../src/app/pages/extras/extras.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/extras/extras.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _b || Object])
], ExtrasComponent);

var _a, _b;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/extras.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/how-it-works/how-it-works.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".howitworks{\n\tmargin-top: 10px;\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/how-it-works/how-it-works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<img class=\"howitworks\" src=\"../../assets/howitworks.jpg\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/how-it-works/how-it-works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksComponent = (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    return HowItWorksComponent;
}());
HowItWorksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-how-it-works',
        template: __webpack_require__("../../../../../src/app/pages/how-it-works/how-it-works.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/how-it-works/how-it-works.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HowItWorksComponent);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/how-it-works.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-login {\n  background-color: #ffe2b6;\n  outline: none;\n  color: black;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n  color: black;\n  background-color: #ffedd3;\n  border-color: #53A3CD;\n}\n.forgot-password {\n  text-decoration: underline;\n  color: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n  text-decoration: underline;\n  color: #666;\n}\n\n.card-container{\n    width: 400px;\n    margin-top: -10px;\n    padding-top: 10px;\n}\n\n.mat-dialog-container{\n  background-color: #ffe2b6;\n}\n\n@media only screen and (max-width: 992px) {\n  .card-container{\n    width: 230px;\n    margin-top: -10px;\n    padding-top: 10px;\n  }\n}\n\n.fa{\n  color: #b30000;\n}\n\n.close{\n  float: right;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-window-close close\" aria-hidden=\"true\" (click) =\"closeLogin()\"></i>\n<h5 md-dialog-title>Login</h5>\n<div md-dialog-content class=\"card-container\">\n  <div style=\"color: red; text-align: center;\" *ngIf =\"errorMessage\">\n    <small>{{errorMessage}}</small>\n  </div>\n  <form [formGroup] = \"form\" id=\"login-form\" (ngSubmit) = \"doLogin(form.value)\">\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\" formControlName = \"email\" required>\n      <div *ngIf=\"form.controls.email.errors && submitted\">\n        <small [hidden]=\"!form.controls.email.errors.required\" style=\"color: red\">Email required</small>\n        <small [hidden]=\"!form.controls.email.errors.email\" style=\"color: red\">Invalid email</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\"  formControlName = \"password\" required>\n      <div *ngIf=\"form.controls.password.errors && submitted\">\n        <small [hidden]=\"!form.controls.password.errors.required\" style=\"color: red\">Password required</small>\n      </div>\n    </div>\n    <div class=\"form-group text-center\">\n      <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n      <label for=\"remember\"> Remember Me</label>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n    </div>\n    <div class=\"form-group\">\n      <a href=\"\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n      <div class=\"text-right\">\n        <a (click)= \"showRegister()\" href=\"javascript:void(0)\" tabindex=\"5\" class=\"forgot-password\">Create an account</a>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(dialogRef, dialog, userService, router) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    };
    LoginComponent.prototype.showRegister = function () {
        this.closeLogin();
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */]);
    };
    LoginComponent.prototype.closeLogin = function () {
        this.dialogRef.close();
    };
    LoginComponent.prototype.doLogin = function (formData) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var user = { "email": formData.email, "password": formData.password };
            this.userService.authenticate(user).subscribe(function (data) {
                if (data.success) {
                    _this.userService.storeAuthData(data.token, data.user);
                    _this.form.reset();
                    _this.ngOnInit();
                    _this.closeLogin();
                    return data;
                }
                else {
                    _this.errorMessage = data.msg;
                    return data;
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu{\n\tmargin-top: 10px;\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<img class=\"menu\" src=\"../../assets/menu.jpg\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/pages/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order-history/order-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ticket {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.stub {\n  cursor: pointer;\n  background: #FCE1B5;\n  padding: 10px;\n  position: relative;\n  width: 70%\n}\n.stub:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-top: 10px solid #fff;\n  border-left: 10px solid #FCE1B5;\n  width: 0;\n}\n.stub:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border-bottom: 10px solid #fff;\n  border-left: 10px solid #FCE1B5;\n  width: 0;\n}\n\n.check {\n  cursor: pointer;\n  background: #F8C471;\n  padding: 10px;\n  position: relative;\n  width: 30%;\n}\n\n.check:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-top: 10px solid #fff;\n  border-right: 10px solid #F8C471;\n  width: 0;\n}\n.check:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-bottom: 10px solid #fff;\n  border-right: 10px solid #F8C471;\n  width: 0;\n}\n\n.check:hover{\n  background-color: #F39C12;\n}\n\n.stub:hover{\n  background-color: #F8C471;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/order-history/order-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\" *ngIf=\"allOrders\">\n          <div class=\"row\">\n            <div class=\"col-md-12 lead\">Order history<hr></div>\n          </div>\n          <div class=\"row ticket\" *ngFor=\"let order of pagedOrders\">\n            <div class=\"col-md-12\">\n                <!-- items being paged -->\n                <div class=\"stub pull-left\" (click)=\"showReceipt(order)\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            <img  style=\"height: 50px; margin-left: 10px; margin-right: 10px;\" src= \"../../assets/purchase-order.jpg\">\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <h6 style=\"border-bottom: 0.5px solid;\">Ref: {{order.orderNumber}}</h6>\n                            <span style=\"font-size: 12px;\">{{order.date.format(\"L\")}}</span><span style=\"font-weight: bold; font-size: 14px; margin-left: 5px;\">£{{(order.bill.total+order.bill.discount).toFixed(2)}}</span>\n                        </div>\n                    </div>\n                </div>\n                <div (click)=\"orderAgain(order)\" style=\"text-align: center; height: 70px;\" class=\"check pull-right\">Order again</div>\n            </div>\n          </div>\n          <div style=\"text-align: center;\" *ngIf=\" pager.pages && currentPage < pager.pages.length\">\n            <a href=\"javascript:void(0)\" (click)=\"loadMore()\">Load more</a><br>\n            <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n          </div>\n          <hr>\n        </div>\n        <div class=\"panel-body\" *ngIf=\"!allOrders\">\n          <div class=\"row\">\n            <div class=\"col-md-12 lead\">Order history<hr></div>\n          </div>\n          <div class=\"row\">\n            <p>No orders to show</p>\n          </div>\n          <hr>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/order-history/order-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_receipt_order_receipt_component__ = __webpack_require__("../../../../../src/app/pages/order-receipt/order-receipt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









__WEBPACK_IMPORTED_MODULE_8_moment__["locale"]("en-gb");
var OrderHistoryComponent = (function () {
    function OrderHistoryComponent(http, pagerService, userService, orderService, dailog) {
        this.http = http;
        this.pagerService = pagerService;
        this.userService = userService;
        this.orderService = orderService;
        this.dailog = dailog;
        this.user = this.userService.getCurrentUser();
        this.token = this.userService.loadToken();
        this.currentPage = 1;
        this.pager = {};
        this.pagedOrders = [];
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch orders from database
        this.orderService.loadOrdersByUserId(this.user.id, this.token).subscribe(function (result) {
            if (result.success) {
                _this.allOrders = result.orders;
                for (var i = 0; i < _this.allOrders.length; i++) {
                    _this.allOrders[i].date = __WEBPACK_IMPORTED_MODULE_8_moment__(result.orders[i].date);
                }
                _this.setPage(_this.currentPage);
            }
        });
    };
    OrderHistoryComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allOrders.length, page);
        // get current page of items
        this.pagedOrders = this.pagedOrders.concat(this.allOrders.slice(this.pager.startIndex, this.pager.endIndex + 1));
    };
    OrderHistoryComponent.prototype.loadMore = function () {
        if (this.currentPage < this.pager.pages.length) {
            this.currentPage++;
            this.setPage(this.currentPage);
        }
    };
    OrderHistoryComponent.prototype.orderAgain = function (order) {
        this.orderService.orderAgain(order["basket"]);
    };
    OrderHistoryComponent.prototype.showReceipt = function (order) {
        var dailogRef = this.dailog.open(__WEBPACK_IMPORTED_MODULE_7__order_receipt_order_receipt_component__["a" /* OrderReceiptComponent */]);
        dailogRef.componentInstance.order = order;
    };
    return OrderHistoryComponent;
}());
OrderHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-history',
        template: __webpack_require__("../../../../../src/app/pages/order-history/order-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/order-history/order-history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_pager_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pager_service__["a" /* PagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatDialog */]) === "function" && _e || Object])
], OrderHistoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/order-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order-receipt/order-receipt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-wrap {\n  background-color: #f6f6f6;\n  width: 100%;\n}\n\n/* -------------------------------------\n    HEADER, FOOTER, MAIN\n------------------------------------- */\n.main {\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  border-radius: 3px;\n}\n\n.content-wrap {\n  padding: 20px;\n}\n\n.header {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.footer {\n  width: 100%;\n  clear: both;\n  color: #999;\n  padding: 20px;\n}\n.footer p, .footer a, .footer td {\n  color: #999;\n  font-size: 12px;\n}\n\n.btn-primary {\n  text-decoration: none;\n  color: #FFF;\n  background-color: #348eda;\n  border: solid #348eda;\n  border-width: 10px 20px;\n  line-height: 2em;\n  /* 2em * 14px = 28px, use px to get airier line-height also in Thunderbird, and Yahoo!, Outlook.com, AOL webmail clients */\n  /*line-height: 28px;*/\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n  display: inline-block;\n  border-radius: 5px;\n  text-transform: capitalize;\n}\n\n/* -------------------------------------\n    OTHER STYLES THAT MIGHT BE USEFUL\n------------------------------------- */\n.last {\n  margin-bottom: 0;\n}\n\n.first {\n  margin-top: 0;\n}\n\n.aligncenter {\n  text-align: center;\n}\n\n.alignright {\n  text-align: right;\n}\n\n.alignleft {\n  text-align: left;\n}\n\n.clear {\n  clear: both;\n}\n\nhr{\n  padding: 0;\n  margin: 0;\n}\n\n/* -------------------------------------\n    ALERTS\n    Change the class depending on warning email, good email or bad email\n------------------------------------- */\n.alert {\n  font-size: 16px;\n  color: #fff;\n  font-weight: 500;\n  padding: 20px;\n  text-align: center;\n  border-radius: 3px 3px 0 0;\n}\n.alert a {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 16px;\n}\n.alert.alert-warning {\n  background-color: #ffe2b6;\n}\n.alert.alert-bad {\n  background-color: #D0021B;\n}\n.alert.alert-good {\n  background-color: #68B90F;\n}\n\n/* -------------------------------------\n    INVOICE\n    Styles for the billing table\n------------------------------------- */\n.invoice {\n\ttext-align: left;\n\twidth: 90%;\n\tmargin-left: 20px;\n\tmargin-bottom: 10px;\n}\n.invoice td {\n  padding: 5px 0;\n}\n.invoice .invoice-items {\n  width: 100%;\n}\n.invoice .invoice-items td {\n  border-top: #eee 1px solid;\n}\n.invoice .invoice-items .total td {\n  border-top: 2px solid #333;\n  border-bottom: 2px solid #333;\n  font-weight: 700;\n}\n\n.itemsTable{\n    margin-left: 20px;\n    margin-top: 20px;\n}\n.firstColumn{\n\twidth: 40%;\n}\n.secondColumn{\n\ttext-align: center;\n}\n.thirdColumn{\n\ttext-align: center;\n}\n.options{\n\tfont-style: italic;\n\tbackground-color: #F2E6FB;\n}\n\n.bill{\n\ttext-align: center;\n\tborder: dotted 1px;\n\tpadding: 30px;\n\tmargin: 20px;\n\tborder-radius: 5px;\n\tbackground-color: #D9FAD8;\n}\n\n.mauto{margin: 0 auto;}\n.px2 { padding: 1rem; }\n.mt1 {margin-top: 1rem;}\n.mb1 {margin-bottom: 1rem;}\n.clearfix {\n\tmargin-right: 20px;\n\tmargin-left: 20px;\n\tborder-radius: 10px;\n\tbackground-color: #fbf2ea;\n  &:before, &:after { content: \" \"; display: table; }\n  &:after { clear: both; }\n}\n\n.relative{position: relative;}\n.absolute{position: absolute;}\n.r0{right:0;}\n\n.bg-white{background-color: #fbf2ea;}\n.bottom-dotted{border-bottom-style: dotted;}\n.border-color-light-gray{ border-color: #ccc; }\n\np, .p{\n  font-size: 1rem;\n  padding-bottom: 0.7rem;\n}\n\nth{\n\tfont-size: 14px;\n}\n\nlabel{\n  margin: 0;\n}\n\n.receipt{\n  overflow: scroll; \n  max-height: 400px;\n}\n\n@media only screen and (max-width: 992px){\n    .receipt{\n      overflow: scroll; \n      max-height: 300px;\n    }\n    .container{\n      padding: 0;\n    }\n}\n\n.fa{\n  color: #b30000;\n}\n\n.close{\n  float: right;\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/order-receipt/order-receipt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"max-width: 600px;\">\n\t<i (click)=\"close()\" class=\"fa fa-window-close close\" aria-hidden=\"true\"></i>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t<h5>Delivery Address</h5>\n\t\t\t<h6>{{order.customer.name}}</h6>\n\t\t\t<label>{{order.deliveryAddress.streetNumber}} {{order.deliveryAddress.streetName}}, {{order.deliveryAddress.city}}, {{order.deliveryAddress.postcode}}</label><hr>\n\t\t\t<label>Order received: {{order.date.format(\"L\")}} at {{order.date.format(\"LT\")}}</label>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<div class=\"row receipt\">\n\t\t<div class=\"col-md-12\">\n\t\t    <table class=\"itemsTable\">\n\t\t      <tr>\n\t\t        <th class=\"firstColumn\">Product</th>\n\t\t        <th class=\"secondColumn\">Unit Price</th>\n\t\t        <th class=\"thirdColumn\">Total Price</th>\n\t\t      </tr>\n\t\t      <tr *ngFor=\"let item of order.basket\">\n\t\t        <td>\n\t\t        \t<div *ngIf= \"item.category == 'shisha'; then shishaa; else others\"></div>\n\t\t        \t<!-- Shisha Items -->\n\t\t        \t<ng-template #shishaa>\n\t\t\t        \t<h6> {{item.quantity}}x {{item.name}}</h6>\n\t\t\t            <div style=\"margin-left: 20px;\">\n\t\t\t                <label>Head: <span class=\"options\">{{item.head}}</span></label><br>\n\t\t\t                <label>Hose: <span class=\"options\">{{item.hose}}</span></label><br>\n\t\t\t                <label>Base: <span class=\"options\">{{item.base}}</span></label><br>\n\t\t\t                <label>Flavours: <span *ngFor=\"let flavour of item.flavours\" class=\"options\">{{flavour}}, </span></label>\n\t\t\t             </div>\n\t\t         \t</ng-template>\n\n\t\t         \t<!-- Other Items -->\n\t\t         \t<ng-template #others>\n\t\t         \t\t<h6> {{item.quantity}}x {{item.name}}</h6>\n\t\t         \t\t<div *ngIf=\"item.category =='extra-head'\">\n\t      \t\t\t\t\t<label>Head: <span class=\"details\">{{item.head}}</span></label><br>\n\t\t      \t\t\t\t<label>Flavours: <span class=\"details\" *ngFor=\"let flavour of item.flavours\">{{flavour}}, </span></label>\n\t      \t\t\t\t</div>\n\t\t         \t</ng-template>\n\t\t        </td>\n\t\t        <td class=\"secondColumn\">£{{(item.costs/item.quantity).toFixed(2)}}</td>\n\t\t        <td class=\"thirdColumn\">£{{item.costs.toFixed(2)}}</td>\n\t\t      </tr>\n\t\t    </table>\n\t\t    \t\t<!-- Bill Summary block -->\n\t\t<div class=\"clearfix full-width mb1\">\n\t\t\t<div class=\"left quarter-width px2\">\n\t\t\t\t<p class=\"small bottom-dotted border-color-light-gray relative mb1\">\n\t    \t\t\t<span class=\"bg-white absolute t1\">Subtotal</span> <span class=\"bg-white absolute t1 r0\"> &nbsp; £{{order.bill.total.toFixed(2)}}</span>\n\t    \t\t</p>\n\t    \t\t<p class=\"small bottom-dotted border-color-light-gray relative mb1\" *ngIf=\"order.bill.discount<0\">\n\t    \t\t\t<span class=\"bg-white absolute t1\">Discount (20%)</span> <span class=\"bg-white absolute t1 r0\"> &nbsp; -£{{(order.bill.discount*-1).toFixed(2)}}</span>\n\t    \t\t</p>\n\t\t\t</div>\t\n\t\t\t<div class=\"col-md-6\" style=\"font-weight: bold; float: right;\">\n\t          \t<hr>\n\t          \t<p style=\"float: right;\">Total Cost: £{{(order.bill.total+order.bill.discount).toFixed(2)}}</p>\n\t        </div>\n\t\t</div>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<div style=\"text-align: center; padding-top: 10px;\">\n\t\t<button type=\"button\" class=\"btn btn-success\" (click) = \"orderAgain()\">Order again</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/order-receipt/order-receipt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderReceiptComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderReceiptComponent = (function () {
    function OrderReceiptComponent(orderService, dialogRef) {
        this.orderService = orderService;
        this.dialogRef = dialogRef;
    }
    OrderReceiptComponent.prototype.ngOnInit = function () {
    };
    OrderReceiptComponent.prototype.orderAgain = function () {
        this.dialogRef.close();
        this.orderService.orderAgain(this.order["basket"]);
    };
    OrderReceiptComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return OrderReceiptComponent;
}());
OrderReceiptComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-receipt',
        template: __webpack_require__("../../../../../src/app/pages/order-receipt/order-receipt.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/order-receipt/order-receipt.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogRef */]) === "function" && _b || Object])
], OrderReceiptComponent);

var _a, _b;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/order-receipt.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".productbox {\n    background-color:#ffffff;\n    padding:10px;\n\tmargin:5px 0;\n    border: 1px solid #cfcfcf;\n    -o-box-shadow: 2px 2px 4px 0px #cfcfcf;\n    box-shadow: 2px 2px 4px 0px #cfcfcf;\n    filter:progid:DXImageTransform.Microsoft.Shadow(color=#cfcfcf, Direction=134, Strength=4);\n}\n\n.productbox img{\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.producttitle {\n    font-weight:bold;\n    font-size:1.2em;\n\tpadding:5px 0 5px 0;\n}\n\n.producttext {\n    \n}\n\n.productprice {\n\tborder-top:1px solid #dadada;\n\tpadding-top:5px;\n}\n\n.pricetext {\n\tfont-weight:bold;\n\tfont-size:1.4em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t    <a class=\"col-md-3\" routerLink=\"/shisha\">\n          <div class=\"productbox\">\n            <img src=\"../../assets/orders/shisha.jpg\" class=\"img-responsive\">\n          </div>\n        </a>\n        <a class=\"col-md-3\" routerLink=\"/desserts\">\n          <div class=\"productbox\">\n            <img src=\"../../assets/orders/desserts.jpg\" class=\"img-responsive\">\n          </div>\n        </a>\n        <a class=\"col-md-3\" routerLink=\"/drinks\">\n          <div class=\"productbox\">\n            <img src=\"../../assets/orders/drinks.jpg\" class=\"img-responsive\">\n          </div>\n        </a>\n        <a class=\"col-md-3\" routerLink=\"/extras\">\n          <div class=\"productbox\">\n            <img src=\"../../assets/orders/extras.jpg\" class=\"img-responsive\">\n          </div>\n        </a>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order',
        template: __webpack_require__("../../../../../src/app/pages/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/order/order.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderComponent);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/order.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  The page you are looking for cannot be found!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    return PagenotfoundComponent;
}());
PagenotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagenotfound',
        template: __webpack_require__("../../../../../src/app/pages/pagenotfound/pagenotfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pagenotfound/pagenotfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PagenotfoundComponent);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<tabs [title] = false>\n  <tab>\n    <div class=\"container\" *ngIf=\"user\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 lead\">User profile<hr></div>\n              </div>\n              <div class=\"row\">\n                  <i class=\"fa fa-user fa-5x\" style=\"float: left; display:block; margin:auto;\" aria-hidden=\"true\"></i>\n                <div class=\"col-md-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h2 class=\"only-bottom-margin\">{{user.name}}</h2>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <span class=\"text-muted\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> Email:</span> {{user.email}}<br>\n                      <span class=\"text-muted\"><i class=\"fa fa-mobile fa-2x\" aria-hidden=\"true\"></i> Phone:</span> {{user.mobile}}<br>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <button (click)= \"tabTogle(1)\" class=\"btn btn-info pull-right\">Edit</button>\n                </div>\n              </div>\n              <hr>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </tab>\n  <tab>\n        <div class=\"container\" *ngIf=\"user\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n              <form class=\"form\" [formGroup] = \"form\" (ngSubmit) = \"save(form.value)\">\n                <div class=\"row\">\n                  <div class=\"col-md-12 lead\">User profile<hr></div>\n                </div>\n                <div class=\"row from-group\">\n                    <i class=\"fa fa-user fa-5x\" style=\"float: left; display:block; margin:auto;\" aria-hidden=\"true\"></i>\n                  <div class=\"col-md-8\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <span>Name </span><input type=\"text\" name=\"\" value={{user.name}} class=\"form-control\" formControlName = \"name\">\n                        <div *ngIf=\"form.controls.name.errors\">\n                          <small [hidden]=\"!form.controls.name.errors.required || !submitted\" style=\"color: red\">Name is required</small>\n                          <small [hidden]=\"!form.controls.name.errors.pattern\" style=\"color: red\">Invalid Name (Letters Only)</small>\n                          <small [hidden]=\"!form.controls.name.errors.maxlength\" style=\"color: red\">Name must be less than 25 characters </small>\n                      </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <span>Email </span><p class=\"form-control\">{{user.email}}</p>\n                        <span>Phone </span><input type=\"text\" name=\"\" value={{user.mobile}} class=\"form-control\" formControlName = \"mobile\">\n                        <div *ngIf=\"form.controls.mobile.errors\">\n                          <small [hidden]=\"!form.controls.mobile.errors.required || !submitted\" style=\"color: red\">Mobile number required</small>\n                          <small [hidden]=\"!submitted || !form.controls.mobile.errors.minlength || form.controls.mobile.errors.required\" style=\"color: red\">Invalid phone (Min Length 11 digits)</small>\n                          <small [hidden]=\"!form.controls.mobile.errors.pattern\" style=\"color: red\">Invalid input (numbers only)</small>\n                          <small [hidden]=\"!form.controls.mobile.errors.maxlength\" style=\"color: red\">Mobile number must not exceed 16 digits</small>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px;\">\n                  <div class=\"col-md-4\"></div>\n                  <div class=\"col-md-8\">\n                    <button type = \"button\" (click)= \"tabTogle(0)\" class=\"btn btn-danger pull-left\">Cancel</button>\n                    <button type = \"submit\" class=\"btn btn-success pull-right\">Save</button>             \n                  </div>\n                </div>\n                <hr>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </tab>\n</tabs>\n    <div class=\"container\" style=\"margin-top: 10px;\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 lead\">Security<hr></div>\n              </div>\n              <div class=\"row\" *ngIf = \"!changePassword\" (click) = \"toggleChangePassword()\">\n                <a class=\"col-md-12\" href=\"javascript:void(0)\">Change password</a>\n              </div>\n              <div class=\"row\" *ngIf = \"changePassword\">\n                <div class=\"col-md-12\">\n                  <div style=\"color: red; text-align: center;\" *ngIf =\"errorMessage\">\n                    <small>{{errorMessage}}</small>\n                  </div>\n                  <form [formGroup] = \"changePasswordForm\" (ngSubmit) = \"changePass(changePasswordForm.value)\">\n                    <input type=\"text\" name=\"currentPass\" class=\"form-control\" placeholder=\"Type your current password\" formControlName = \"oldPassword\">\n                    <div *ngIf=\"changePasswordForm.controls.oldPassword.errors\">\n                      <small [hidden]=\"!changePasswordForm.controls.oldPassword.errors.required || !submitted\" style=\"color: red\">Current password required</small>                \n                    </div>\n                    <br>\n                    <input type=\"text\" name=\"newpass\" class=\"form-control\" placeholder=\"New password\" formControlName = \"password\">\n                    <div *ngIf=\"changePasswordForm.controls.password.errors\">\n                      <small [hidden]=\"!changePasswordForm.controls.password.errors.required || !submitted\" style=\"color: red\">New password required</small>\n                      <small [hidden]=\"!changePasswordForm.controls.password.errors.minlength || !submitted\" style=\"color: red\">Password must be at least 6 characters long</small>\n                      <small [hidden]=\"!changePasswordForm.controls.password.errors.maxlength\" style=\"color: red\">Password too long</small>                  \n                    </div>\n                    <br>\n                    <input type=\"text\" name=\"confirmNewPass\" class=\"form-control\" placeholder=\"Confirm new password\" formControlName = \"confirm_password\">\n                    <div *ngIf=\"submitted\">\n                      <small [hidden]=\"changePasswordForm.controls.confirm_password.value.trim() !=='' \" style=\"color: red\">Password confirmation is required</small>\n                      <small [hidden]=\"!changePasswordForm.passwordMisMatch || changePasswordForm.controls.confirm_password.value.trim()==='' || changePasswordForm.controls.password.value.trim() ==='' \" style=\"color: red\">Password mismatch</small>\n                    </div>\n                    <br>\n                    <button type = \"button\" (click) = \"toggleChangePassword()\" class=\"btn btn-danger pull-left\">Cancel</button>\n                    <button type = \"submit\" class=\"btn btn-success pull-right\">Save</button>\n                  </form>  \n                </div>\n              </div>           \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tab__ = __webpack_require__("../../../../../src/app/pages/tabs/tab.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(userService, router, formBuilder, flashMessage) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.flashMessage = flashMessage;
        this.submitted = false;
        this.changePassword = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.fetchCurrentUser().subscribe(function (profile) {
            _this.user = profile.user;
            _this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormGroup */]({
                name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* FormControl */](_this.user["name"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(25)])),
                mobile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* FormControl */](_this.user["mobile"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern("^[0-9+]*$"), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(16)]))
            });
        }, function (err) {
            console.log(err);
            return false;
        });
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(20)])),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        }, { validator: this.MatchPassword });
    };
    ProfileComponent.prototype.tabTogle = function (activeIndex) {
        this.tabs.toArray().forEach(function (tab, index) {
            tab.active = false;
            tab.done = index < activeIndex;
        });
        this.tabs.toArray()[activeIndex].active = true;
    };
    ProfileComponent.prototype.save = function (formData) {
        this.submitted = true;
        if (this.form.valid) {
            for (var prop in formData) {
                if (this.user[prop] !== formData[prop]) {
                    var newData = {};
                    newData[prop] = formData[prop];
                    this.userService.updateUserProfile(newData, this.user["_id"]).subscribe();
                }
            }
            this.flashMessage.show("Profile updated", { cssClass: 'alert-success', timeout: 4000 });
            this.ngOnInit();
            this.tabTogle(0);
            this.submitted = false;
        }
    };
    ProfileComponent.prototype.toggleChangePassword = function () {
        this.changePassword = !this.changePassword;
    };
    ProfileComponent.prototype.changePass = function (formData) {
        var _this = this;
        this.submitted = true;
        if (this.changePasswordForm.valid) {
            this.userService.authenticate({ email: this.user["email"], password: formData.oldPassword }).subscribe(function (result) {
                if (result.success) {
                    _this.userService.updateUserProfile({ password: formData.password }, _this.user["_id"]).subscribe(function (respond) {
                        if (respond.success) {
                            _this.flashMessage.show("Password successfully changed", { cssClass: 'alert-success', timeout: 3000 });
                            _this.submitted = false;
                            _this.errorMessage = "";
                            _this.toggleChangePassword();
                            _this.ngOnInit();
                        }
                        else {
                            _this.flashMessage.show("Password change error", { cssClass: 'alert-danger', timeout: 3000 });
                        }
                    });
                }
                else {
                    _this.errorMessage = result.msg;
                }
            });
        }
    };
    ProfileComponent.prototype.MatchPassword = function (formData) {
        var password = formData.get('password').value; // to get value in input tag
        var confirm_password = formData.get('confirm_password').value; // to get value in input tag
        if (password != confirm_password) {
            //alert('Not matched');
            formData['passwordMisMatch'] = true;
            return { mismatch: true };
        }
        else {
            //alert('Matched');
            formData['passwordMisMatch'] = false;
            return null;
        }
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3__tabs_tab__["a" /* Tab */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], ProfileComponent.prototype, "tabs", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/pages/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-register {\n  background-color: #1CB94E;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  height: auto;\n  font-weight: normal;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border-color: #1CB94A;\n}\n.btn-register:hover,\n.btn-register:focus {\n  color: #fff;\n  background-color: #1CA347;\n  border-color: #1CA347;\n}\n\n.card-container{\n    width: 400px;\n    margin-top: -10px;\n    padding-top: 10px;\n}\n\n.mat-dialog-container{\n  background-color: #ffe2b6;\n}\n\n@media only screen and (max-width: 992px) {\n  .card-container{\n    width: 230px;\n    margin-top: -10px;\n    padding-top: 10px;\n  }\n}\n\n.fa{\n  color: #b30000;\n}\n\n.close{\n  float: right;\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Register Form popup -->\n<i class=\"fa fa-window-close close\" aria-hidden=\"true\" (click) =\"closeRegister()\"></i>\n<h5 md-dialog-title>Register</h5>\n<div md-dialog-content class=\"card-container\"> \n  <div style=\"color: red; text-align: center;\" *ngIf =\"errorMessage\">\n    <small>{{errorMessage}}</small>\n  </div>\n  <form [formGroup] = \"form\" (ngSubmit) = \"submitRegister(form.value)\" style=\"display: block;\">\n   <div class=\"form-group\">\n      \t<input type=\"text\" formControlName = \"name\" name=\"name\" id=\"name\" tabindex=\"1\" class=\"form-control\" placeholder=\"Full Name\" value=\"\" required>\n      \t<div *ngIf=\"form.controls.name.errors\">\n\t\t    <small [hidden]=\"!form.controls.name.errors.required || !submitted\" style=\"color: red\">Name is required</small>\n\t\t    <small [hidden]=\"!form.controls.name.errors.pattern\" style=\"color: red\">Invalid Name (Letters Only)</small>\n        <small [hidden]=\"!form.controls.name.errors.maxlength\" style=\"color: red\">Name exceeded characters limit</small>\n    \t</div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"email\" formControlName = \"email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\" required>\n      <div *ngIf=\"form.controls.email.errors\">\n\t\t\t  <small [hidden]=\"!form.controls.email.errors.required || !submitted\" style=\"color: red\">Email is required</small>\n\t\t    <small [hidden]=\"!form.controls.email.errors.email || form.controls.email.errors.required || !submitted\" style=\"color: red\">Invalid email</small>\n        <small [hidden]=\"!form.controls.email.errors.maxlength\" style=\"color: red\">Email too long</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" formControlName = \"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\" required>\n      <div *ngIf=\"form.controls.password.errors\">\n\t\t    <small [hidden]=\"!form.controls.password.errors.required || !submitted\" style=\"color: red\">Password is required</small>\n        <small [hidden]=\"!form.controls.password.errors.minlength || !submitted\" style=\"color: red\">Password must be at least 6 characters long</small>\n        <small [hidden]=\"!form.controls.password.errors.maxlength\" style=\"color: red\">Password too long</small>                  \n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" formControlName = \"confirm_password\" name=\"confirm_password\" id=\"confirm_password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\" required>\n      <div *ngIf=\"submitted\">\n\t\t\t<small [hidden]=\"form.controls.confirm_password.value.trim() !=='' \" style=\"color: red\">Password confirmation is required</small>\n\t\t    <small [hidden]=\"!form.passwordMisMatch || form.controls.confirm_password.value.trim()==='' || form.controls.password.value.trim() ==='' \" style=\"color: red\">Password mismatch</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n      <div class=\"text-right\">\n        <a (click)= \"showLogin()\" href=\"javascript:void(0)\" tabindex=\"5\" class=\"forgot-password\">Already Registered? Login</a>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(dialogRef, dialog, flashMessage, userService, fb) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.fb = fb;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(25)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(70)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(20)])],
            confirm_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        }, { validator: this.MatchPassword });
    };
    RegisterComponent.prototype.showLogin = function () {
        this.closeRegister();
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]);
    };
    RegisterComponent.prototype.closeRegister = function () {
        this.dialogRef.close();
    };
    RegisterComponent.prototype.submitRegister = function (formData) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var user_1 = {
                name: formData.name,
                email: formData.email,
                mobile: null,
                password: formData.password
            };
            this.userService.findUser(user_1.email).subscribe(function (res) {
                if (res.success) {
                    _this.userService.registerUser(user_1).subscribe(function (data) {
                        if (data.success) {
                            //acknowledge user registeration
                            _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 4000 });
                            _this.form.reset();
                            _this.submitted = false;
                            _this.closeRegister();
                            //loging the user
                            _this.userService.authenticate(user_1).subscribe(function (data) {
                                if (data.success) {
                                    _this.userService.storeAuthData(data.token, data.user);
                                    //send a welcome email
                                    _this.userService.sendWelcomeMail(data.user).subscribe(function (data) { return console.log(data); });
                                }
                            });
                            return data;
                        }
                        else {
                            _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 4000 });
                            return data;
                        }
                    });
                }
                else {
                    _this.errorMessage = res.msg;
                    return res;
                }
            });
        }
    };
    RegisterComponent.prototype.MatchPassword = function (formData) {
        var password = formData.get('password').value; // to get value in input tag
        var confirm_password = formData.get('confirm_password').value; // to get value in input tag
        if (password != confirm_password) {
            //alert('Not matched');
            formData['passwordMisMatch'] = true;
            return { mismatch: true };
        }
        else {
            //alert('Matched');
            formData['passwordMisMatch'] = false;
            return null;
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/pages/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* FormBuilder */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/shisha-order/shisha-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    padding-top: 5px;\n}\n.product-img img{\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.options{\n    cursor: pointer;\n    border: solid 2px;\n    border-color: #EFF5F3;\n    border-radius: 15px;\n}\n\n.options:hover{\n    border-color: #70D6B4;\n}\n\n.label{\n\tmargin-left: 10px;\n}\n\n.quantity{\n\twidth: 40px;\n}\n\nul{\n\tlist-style: none;\n}\n\n.form-control{\n  position: relative; \n  width: 50px;\n  text-align: center;\n}\n.qButton-one{\n  margin-left: 5px;\n  position: relative; width: 25px;\n}\n\n.qButton-two{\n  position: relative; \n  width: 25px\n}\n.qLabel{\n  position: relative; \n  font-weight: bold;\n  margin-left: 20%\n}\n\n\n@media only screen and (max-width: 576px){\n  .qLabel{\n      position: relative; \n      font-weight: bold; \n      margin-left: 8px;\n  }\n  .btn-info{\n    padding: 3px;\n  }\n}\n\n\n\n.mauto{margin: 0 auto;}\n.px2 { padding-right: 2rem; padding-left: 2rem; }\n.mt1 {margin-top: 1rem;}\n.mb1 {margin-bottom: 1rem;}\n.clearfix {\n\tborder-radius: 10px;\n\tbackground-color: #fff2f0;\n  &:before, &:after { content: \" \"; display: table; }\n  &:after { clear: both; }\n}\n\n.relative{position: relative;}\n.absolute{position: absolute;}\n.t1{top:2px;}\n.r0{right:0;}\n\n.bg-white{background-color: #fff2f0;}\n.bottom-dotted{border-bottom-style: dotted;}\n.border-color-light-gray{ border-color: #ccc; }\n\np, .p{\n  font-size: 1.125rem;\n  line-height: 1.7rem;\n  letter-spacing: 1.5px;\n  padding-bottom: 1rem;\n  margin:0;\n}\n\n.row{\n  margin-left: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/shisha-order/shisha-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n       <div class=\"col-md-5 product-img\">\n            <img style = \"max-width: 100%;\" class = \"img-responsive\" src=\"../../assets/shisha parts/shisha.jpg\"/>\n        </div>\n        <div class=\"col-md-7\">\n            <!-- Datos del vendedor y titulo del producto -->\n            <h3>Clasic Khalil Mamoon</h3>\n            <hr>\n            <form [formGroup] = \"form\" (ngSubmit) = \"addToBasket(form.value)\">\n            \t<h5>1: Pick a head:</h5>\n            \t<select required name = \"head\" formControlName = \"head\" hidden>\n            \t  <option value=\"\">Select</option>\n\t\t\t\t  <option value=\"Egyption Clay\">Egyption Clay</option>\n\t\t\t\t  <option value=\"Apple\">Apple</option>\n\t\t\t\t  <option value=\"Pineapple\">Pineapple</option>\n\t\t\t\t  <option value=\"Orange\">Orange</option>\n\t\t\t\t</select>\n\t\t\t\t<small [hidden]=\"!submitted || form.controls.head.valid\" style=\"color: red\">No head chosen!</small>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHead('Egyption Clay', 0)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\"  src=\"../../assets/shisha parts/ehead.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"head\">Egyption Clay</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHead('Apple', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/applehead.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"head\">Apple* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHead('Pineapple', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/phead.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"head\">Pineapple* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHead('Orange', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/orangehead.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"head\">Orange* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<h5>2: Pick a Hose:</h5>\n\t\t\t\t<select required name = \"hose\" formControlName = \"hose\" hidden>\n            \t  <option value=\"\">Select</option>\n\t\t\t\t  <option value=\"Khalil Mamoon\">Khalil Mamoon</option>\n\t\t\t\t  <option value=\"Ice Pipe\">Ice Pipe</option>\n\t\t\t\t</select>\n\t\t\t\t<small [hidden]=\"!submitted || form.controls.hose.valid\" style=\"color: red\">No hose chosen!</small>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHose('Khalil Mamoon', 0)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/kmpipe.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"hose\">Khalil Mamoon</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectHose('Ice Pipe', 2.5)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/icepipe.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"hose\">Ice Pipe* +£2.50</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<h5>3: Pick a Base:</h5>\n\t\t\t\t<select required name = \"base\" formControlName = \"base\" hidden>\n            \t  <option value=\"\">Select</option>\n\t\t\t\t  <option value=\"Water\">Water</option>\n\t\t\t\t  <option value=\"RedBull\">RedBull</option>\n\t\t\t\t  <option value=\"J2O\">J2O</option>\n\t\t\t\t  <option value=\"Milk\">Milk</option>\n\t\t\t\t</select>\n\t\t\t\t<small [hidden]=\"!submitted || form.controls.base.valid\" style=\"color: red\">No base chosen!</small>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectBase('Water', 0)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\"  src=\"../../assets/shisha parts/waterbase.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"base\">Water</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectBase('RedBull', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/redbullbase.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"base\">RedBull* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectBase('JTO', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/j2obase.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"base\">J2O* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div headpicker (click) = \"selectBase('Milk', 3)\" class=\"options img-responsive\">\n\t\t\t\t\t\t\t<img style = \"max-width: 100%\" src=\"../../assets/shisha parts/milkbase.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<label class=\"label\" for=\"base\">Milk* +£3.00</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<h5>4: Flavours:</h5>\n\t\t\t\t<h6>Alfakher</h6>\n\t\t\t\t<small [hidden]=\"!submitted || form.controls.flavours.valid\" style=\"color: red\">No flavours chosen!</small>\n\t\t\t\t<small [hidden]=\"pickedFlavours.length < 4\" style=\"color: red\">You are only allowed to choose up to three flavours!</small>\n\t\t\t\t<ul class=\"row\">\n\t\t\t\t\t<!-- Its the flavourPicker drictive requiroment that <li> tag should be the first child!-->\n\t\t\t\t\t<li *ngFor=\"let flavour of flavours\" class=\"col-sm-4 flavours\">\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"flavours\" (change) = \"pickFlavour(flavour, $event.target.checked)\" flavourPicker>\n\t\t\t\t\t\t<label>{{flavour}}</label>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<h6>Starbuzz* +£1.50</h6>\n\t\t\t\t<ul class=\"row\">\n\t\t\t\t\t<!-- Its the flavourPicker drictive requiroment that <li> tag should be the first child!-->\n\t\t\t\t\t<li *ngFor=\"let flavour of starbuzzFlavours\" class=\"col-sm-4 flavours\">\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"flavours\" (change) = \"pickFlavour(flavour, $event.target.checked, true)\" flavourPicker>\n\t\t\t\t\t\t<label>{{flavour}}</label>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<hr>\n\t\t\t\t<div class=\"clearfix full-width mb1\">\n\t\t    \t\t<div class=\"left quarter-width px2\">\n\t\t    \t\t\t<p class=\"small bottom-dotted border-color-light-gray relative mb1\">\n\t\t\t    \t\t\t<span class=\"bg-white absolute t1\">Options & extras</span> <span class=\"bg-white absolute t1 r0\"> &nbsp; £{{(costs.head+costs.base+costs.hose).toFixed(2)}}</span>\n\t\t\t    \t\t</p>\n\t\t\t    \t\t<p class=\"small bottom-dotted border-color-light-gray relative mb1\">\n\t\t\t    \t\t\t<span class=\"bg-white absolute t1\">Shisha</span> <span class=\"bg-white absolute t1 r0\"> &nbsp; £{{costs.shisha.toFixed(2)}}</span>\n\t\t\t    \t\t</p>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<div class=\"col-sm-4\" style=\"font-weight: bold; float: right;\">\n\t\t\t          \t<hr>\n\t\t\t          \t<p style=\"float: right;\">Total: £{{(costs.head+costs.shisha+costs.hose+costs.base).toFixed(2)}}</p>\n\t\t\t        </div>\n\t    \t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<div  class=\"row\" style=\"margin-bottom: 5px;\">\n\t\t\t\t\t<input type=\"submit\"  class=\"btn btn-info\" value=\"Add To Basket\">\n\t\t\t\t\t<label class=\"qLabel hidden-xs-down\">Quantity:</label>\n\t\t\t\t\t<label class=\"qLabel hidden-sm-up\">Qty:</label>\n\t\t\t\t\t<button (click) =\"adjustByQuantity(-1)\" type=\"button\" class=\"btn btn-sm btn-danger minus-button qButton-one\" >-</button>\n\t\t\t\t\t<div class=\"form-control\">{{quantity}} </div>\n\t\t\t\t    <button (click) =\"adjustByQuantity(1)\" type=\"button\" class=\"btn btn-sm btn-success plus-button qButton-two\">+</button>\n\t\t\t\t</div>\n            </form>\n        </div>                              \t\t\n    </div>\n</div>        \n"

/***/ }),

/***/ "../../../../../src/app/pages/shisha-order/shisha-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShishaOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShishaOrderComponent = (function () {
    function ShishaOrderComponent(orderService, router, flashMessage) {
        this.orderService = orderService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.flavours = ['Grape', 'Lemon', 'Peach', 'Coconut', 'Pomegranate', 'Strawberry', 'Sweet Melon', 'Mint', 'Orange', 'Vanila', 'Fresh Mist', 'Watermelon', 'Double Apple', 'Blueberry'];
        this.starbuzzFlavours = ['Irn bru', 'Skittles', 'Frozen Apple', 'Frozen Blueberry', 'Pink lemonade'];
        this.pickedFlavours = [];
        this.numberOfPremiumFlavoursPicked = 0;
        this.quantity = 1;
        this.submitted = false;
        this.costs = { shisha: 7.49, head: 0, hose: 0, base: 0 };
        this.prices = { shisha: 7.49, head: 0, hose: 0, base: 0 };
    }
    ShishaOrderComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormGroup */]({
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('shisha'),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('Clasic Khalil Mamoon'),
            costs: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */](this.costs),
            head: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            hose: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            base: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            flavours: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            quantity: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* FormControl */](1)
        });
    };
    ShishaOrderComponent.prototype.selectHead = function (head, price) {
        this.form.controls['head'].setValue(head);
        this.prices['head'] = price;
        this.costs['head'] = price * this.quantity;
    };
    ShishaOrderComponent.prototype.selectHose = function (hose, price) {
        this.form.controls['hose'].setValue(hose);
        this.prices['hose'] = price;
        this.costs['hose'] = price * this.quantity;
    };
    ShishaOrderComponent.prototype.selectBase = function (base, price) {
        this.form.controls['base'].setValue(base);
        this.prices['base'] = price;
        this.costs['base'] = price * this.quantity;
    };
    ShishaOrderComponent.prototype.addToBasket = function (item) {
        var _this = this;
        this.submitted = true;
        if (item.flavours.length <= 3 && this.form.valid) {
            item['costs'] = Object.values(this.costs).reduce(function (sum, value) { return sum + value; });
            this.orderService.addToBasket(item);
            //reload the page
            this.router.navigateByUrl("safas", { skipLocationChange: true }).then(function () { _this.router.navigate(['shisha']); });
            window.scrollTo(0, 0);
            this.flashMessage.show("Item successfully added to basket!", { cssClass: 'alert-success', timeout: 3000 });
        }
    };
    ShishaOrderComponent.prototype.pickFlavour = function (flavour, isChecked, premium) {
        if (premium === void 0) { premium = false; }
        if (isChecked) {
            this.pickedFlavours.push(flavour);
            if (premium) {
                this.numberOfPremiumFlavoursPicked++;
                this.prices['shisha'] = 9.99;
                this.costs['shisha'] = this.prices['shisha'] * this.quantity;
            }
        }
        else {
            var index = this.pickedFlavours.indexOf(flavour);
            this.pickedFlavours.splice(index, 1);
            if (premium) {
                this.numberOfPremiumFlavoursPicked--;
                if (this.numberOfPremiumFlavoursPicked <= 0) {
                    this.prices['shisha'] = 7.49;
                    this.costs['shisha'] = this.prices['shisha'] * this.quantity;
                }
            }
        }
        this.form.controls['flavours'].setValue(this.pickedFlavours);
    };
    ShishaOrderComponent.prototype.adjustByQuantity = function (q) {
        if ((this.quantity < 20 || q === -1) && (this.quantity > 1 || q === 1)) {
            this.quantity = this.quantity + q;
            this.form.controls['quantity'].setValue(this.quantity);
            this.multiplyByQuantity(this.quantity);
        }
    };
    ShishaOrderComponent.prototype.multiplyByQuantity = function (q) {
        for (var cost in this.costs) {
            this.costs[cost] = this.prices[cost] * q;
        }
    };
    return ShishaOrderComponent;
}());
ShishaOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shisha-order',
        template: __webpack_require__("../../../../../src/app/pages/shisha-order/shisha-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/shisha-order/shisha-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ShishaOrderComponent);

var _a, _b, _c;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/shisha-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tabs/tab.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tab = (function () {
    function Tab() {
        this.active = false;
    }
    return Tab;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tabTitle'),
    __metadata("design:type", String)
], Tab.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Tab.prototype, "active", void 0);
Tab = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tab',
        template: "<div [hidden]='!active' style='margin-top:5px;'><ng-content></ng-content></div>"
    })
], Tab);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/tab.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tabs/tabs.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wizard a {\n    margin-top: 6px;\n    padding: 10px 25px 10px;\n    margin-right: 5px;\n    background: #f8F8F8;\n    position: relative;\n    display: inline-block;\n    text-decoration: none;\n    color: #0c0973;\n}\n\n.wizard a:before {\n    width: 0;\n    height: 0;\n    border-top: 20px inset transparent;\n    border-bottom: 20px inset transparent;\n    border-left: 10px solid #fff;\n    position: absolute;\n    content: \"\";\n    top: 0;\n    left: 0;\n    \n}\n\n.wizard a:after {\n    width: 0;\n    height: 0;\n    border-top: 20px inset transparent;\n    border-bottom: 20px inset transparent;\n    border-left: 10px solid #F8F8F8;\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: -10px;\n    z-index: 2;\n}\n\n.wizard a:first-child:before,\n.wizard a:last-child:after {\n    border: none;\n    \n}\n\n.wizard a:first-child {\n    border-radius: 4px 0 0 4px;\n}\n\n.wizard a:last-child {\n    border-radius: 0 4px 4px 0;\n}\n\n.wizard .label {\n    margin: 0 5px 0 18px;\n    position: relative;\n    top: -1px;\n}\n\n.wizard a:first-child .badge {\n    margin-left: 0;\n}\n\n.wizard .current {\n    background: #ff8600;\n    color: #fff;\n}\n\n.wizard .current:after {\n    border-left-color: #ff8600;\n}\n.wizard .done {\n    background: #63687C;\n    color: #fff;\n}\n\n.wizard .done:after {\n    border-left-color: #63687C;\n}\n.btn-group-lg{\n    padding: 0;\n}\n\n@media only screen and (max-width: 992px){\n    .wizard a {\n    padding: 8px 10px 8px;\n    font-size: 12px;\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tabs/tabs.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav nav-tabs wizard\" style=\"text-align: center; margin-top:\" *ngIf =\"title\">\n      <a href=\"javascript:void(0)\" *ngFor=\"let tab of tabs; let i = index\" (click)=\"selectTab(tab)\"[class.current] = \"tab.active\" [class.done] =\"tab.done\">{{tab.title}}</a>\n</div>\n<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/pages/tabs/tabs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab__ = __webpack_require__("../../../../../src/app/pages/tabs/tab.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tabs = (function () {
    function Tabs() {
        this.title = true;
    }
    // contentChildren are set
    Tabs.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    Tabs.prototype.selectTab = function (tab) {
        var toBeActivedIndex = this.tabs.toArray().indexOf(tab);
        var currentActiveIndex = this.tabs.toArray().findIndex(function (t) { return t.active == true; });
        //Disabled links logic
        if (toBeActivedIndex < currentActiveIndex || toBeActivedIndex == 0) {
            // deactivate all tabs
            this.tabs.toArray().forEach(function (tab, index) {
                tab.active = false;
                tab.done = index < toBeActivedIndex;
            });
            // activate the tab the user has clicked on.
            tab.active = true;
        }
    };
    return Tabs;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", Boolean)
], Tabs.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__tab__["a" /* Tab */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], Tabs.prototype, "tabs", void 0);
Tabs = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tabs',
        template: __webpack_require__("../../../../../src/app/pages/tabs/tabs.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/tabs/tabs.css")]
    })
], Tabs);

var _a;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/tabs.js.map

/***/ }),

/***/ "../../../../../src/app/partials/slider/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sliderImage{\n\theight: 100%;\n\twidth: 100%;\n}\n\n@media only screen and (max-width: 576px){\n\th1{\n\t\tfont-size: 15px;\n\t}\n}\n\n.order{\n\tcursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<carousel>\n  <slide>\n    <img class=\"sliderImage\" src=\"../../../assets/slider/slide1.jpg\" alt=\"First slide\">\n    <div class=\"carousel-caption\">\n      <button routerLink=\"/order\" class=\"order btn btn-info bg-lg\"><h1>Order Now</h1></button>\n    </div>\n  </slide>\n  <slide>\n    <img class=\"sliderImage\" src=\"assets/slider/slide2.jpg\" alt=\"Second slide\">\n    <div class=\"carousel-caption\">\n      <button routerLink=\"/order\" class=\"order btn btn-info bg-lg\"><h1>Order Now</h1></button>\n    </div>\n  </slide>\n  <slide>\n    <img class=\"sliderImage\" src=\"assets/slider/slide3.jpg\" alt=\"Third slide\">\n    <div class=\"carousel-caption\">\n       <button routerLink=\"/order\" class=\"order btn btn-info bg-lg\"><h1>Order Now</h1></button>\n    </div>\n  </slide>\n  <slide>\n    <img class=\"sliderImage\" src=\"assets/slider/slide4.jpg\" alt=\"Fourth slide\">\n    <div class=\"carousel-caption\">\n      <button routerLink=\"/order\" class=\"order btn btn-info bg-lg\"><h1>Order Now</h1></button>\n    </div>\n  </slide>\n</carousel>"

/***/ }),

/***/ "../../../../../src/app/partials/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = (function () {
    function SliderComponent() {
    }
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__("../../../../../src/app/partials/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/slider/slider.component.css")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_carousel__["b" /* CarouselConfig */], useValue: { interval: 10500, noPause: true } }]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/address.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressService = (function () {
    function AddressService(http) {
        this.http = http;
    }
    AddressService.prototype.getAddresses = function (id, token) {
        //fetch addresses in relation to the current user
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get('address/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    AddressService.prototype.addAddress = function (address, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.post('address', address, { headers: headers }).map(function (res) { return res.json(); });
    };
    AddressService.prototype.removeAddress = function (address_id, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.put('address/removeAddress/' + address_id, { headers: headers }).map(function (res) { return res.json(); });
    };
    return AddressService;
}());
AddressService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AddressService);

var _a;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/address.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_deep_equal__ = __webpack_require__("../../../../deep-equal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_deep_equal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderService = (function () {
    function OrderService(storage, http, router) {
        this.storage = storage;
        this.http = http;
        this.router = router;
        this.basket = {
            items: [],
            subtotal: 0,
            discount: 0
        };
        this.basket_id = this.storage.get("basket_id");
        this.basketSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    OrderService.prototype.addToBasket = function (item) {
        var _this = this;
        if (this.basket_id == undefined || this.basket_id == null) {
            this.createBasket(item);
        }
        else {
            this.fetchBasket(this.basket_id).subscribe(function (data) {
                if (data.success) {
                    _this.basket = data.basket;
                    var index = _this.basket["items"].findIndex(function (existingItem) { return _this.compareItems(existingItem, item); });
                    if (index === -1) {
                        //update basket in the database
                        _this.basket["items"].push(item);
                        _this.basket["subtotal"] = _this.basket["subtotal"] + item.costs;
                        _this.updateBasket(_this.basket);
                    }
                    else {
                        _this.basket["items"][index].quantity = _this.basket["items"][index].quantity + item.quantity;
                        _this.basket["items"][index].costs = _this.basket["items"][index].costs + item.costs;
                        _this.basket["subtotal"] = _this.basket["subtotal"] + item.costs;
                        _this.updateBasket(_this.basket);
                    }
                }
                else {
                    _this.createBasket(item);
                }
            });
        }
    };
    OrderService.prototype.compareItems = function (existingItem, newItem) {
        var comparableExistingItem = Object.assign({}, existingItem);
        var comparableNewItem = Object.assign({}, newItem);
        delete comparableExistingItem.costs;
        delete comparableExistingItem.quantity;
        delete comparableNewItem.costs;
        delete comparableNewItem.quantity;
        if (__WEBPACK_IMPORTED_MODULE_5_deep_equal__(comparableExistingItem, comparableNewItem)) {
            return true;
        }
        else {
            return false;
        }
    };
    OrderService.prototype.updateBasket = function (basket, navigateToBasket) {
        var _this = this;
        //apply discount
        if (basket["discounted"]) {
            basket["discount"] = basket["subtotal"] * -0.2;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('basket/updateBasket/' + this.basket_id, basket, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.fetchBasket(_this.loadBasketId()).subscribe(function (data) {
                if (data.success) {
                    _this.basket = data.basket;
                    //update prices in basket logo shown in the navbar
                    _this.basketSubject.next(_this.basketTotal());
                    // In case of order again navigate to the basket
                    if (navigateToBasket) {
                        _this.router.navigate(['/basket']);
                    }
                }
            });
        });
    };
    OrderService.prototype.basketTotal = function () {
        if (this.basket["items"]) {
            var total_1 = 0;
            var numItems_1 = 0;
            this.basket["items"].forEach(function (item) { total_1 = total_1 + item.costs; numItems_1 = numItems_1 + item.quantity; });
            return { totalCost: total_1, numberOfItems: numItems_1 };
        }
        else {
            return { totalCost: 0, numberOfItems: 0 };
        }
    };
    OrderService.prototype.createBasket = function (items, navigateToBasket, repeatOrder) {
        var _this = this;
        if (!repeatOrder) {
            this.basket["items"].push(items);
            this.basket["subtotal"] = items["costs"];
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('basket/addItem', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.storage.set('basket_id', data.basket._id);
                _this.basket_id = data.basket._id;
                _this.updateBasket(_this.basket, navigateToBasket);
            }
        });
    };
    OrderService.prototype.fetchBasket = function (basket_id) {
        return this.http.get('basket/fetchBasket/' + basket_id).map(function (res) { return res.json(); });
    };
    OrderService.prototype.loadBasketId = function () {
        this.basket_id = this.storage.get('basket_id');
        return this.basket_id;
    };
    OrderService.prototype.saveOrder = function (order, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.post('order', order, { headers: headers }).map(function (res) { return res.json(); });
    };
    OrderService.prototype.loadOrdersByUserId = function (userId, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get('order/user/' + userId, { headers: headers }).map(function (res) { return res.json(); });
    };
    OrderService.prototype.orderAgain = function (items) {
        var _this = this;
        if (this.basket_id == undefined || this.basket_id == null) {
            this.putToBasket(items);
            this.createBasket(this.basket, true, true);
        }
        else {
            this.fetchBasket(this.basket_id).subscribe(function (result) {
                if (result.success) {
                    _this.putToBasket(items);
                    _this.updateBasket(_this.basket, true);
                }
                else {
                    _this.putToBasket(items);
                    _this.createBasket(_this.basket, true, true);
                }
            });
        }
    };
    OrderService.prototype.putToBasket = function (items) {
        var _this = this;
        this.basket["items"] = items;
        this.basket["subtotal"] = 0;
        items.forEach(function (elm) {
            _this.basket["subtotal"] = _this.basket["subtotal"] + elm.costs;
        });
    };
    OrderService.prototype.applyDiscount = function (basket) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('basket/updateDiscount/', basket, { headers: headers }).map(function (res) { return res.json(); });
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], OrderService);

var _a, _b, _c;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/order.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });

var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 8; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_0_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/pager.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.findUser = function (email) {
        return this.http.get('users/find/' + email).map(function (res) { return res.json(); });
    };
    UserService.prototype.fetchCurrentUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        this.getCurrentUser();
        headers.append('Authorization', this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/' + this.user.id, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUserProfile = function (newData, user_id) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        return this.http.put('users/updateProfile/' + user_id, newData, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.authenticate = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.storeAuthData = function (token, user) {
        localStorage.setItem("id_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.token = token;
        this.user = user;
    };
    UserService.prototype.signOut = function () {
        this.token = null;
        this.user = null;
        localStorage.removeItem("user");
        localStorage.removeItem("id_token");
    };
    UserService.prototype.loadToken = function () {
        this.token = localStorage.getItem("id_token");
        return this.token;
    };
    UserService.prototype.getCurrentUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    };
    UserService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    UserService.prototype.sendOrderConfirmationMail = function (order) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/orderConfirmationEmail', order, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.sendWelcomeMail = function (user) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.token);
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/welcomeEmail', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=/users/saber/desktop/testfolder/cloud7shisha/polyfills.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map