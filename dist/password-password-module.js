(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-password-module"],{

/***/ "/xIM":
/*!************************************************!*\
  !*** ./src/app/password/password.component.ts ***!
  \************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _raw_loader_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./password.component.html */ "VB8v");
/* harmony import */ var _password_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.component.css */ "w71O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/api.service */ "yTNM");
/* harmony import */ var app_pages_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/login/login.service */ "fxZ6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(loginService, apiService, router) {
        this.loginService = loginService;
        this.apiService = apiService;
        this.router = router;
        this.oldpass = false;
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent.ctorParameters = function () { return [
        { type: app_pages_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-password',
            template: _raw_loader_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_password_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_pages_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "GJ8S":
/*!**********************************************!*\
  !*** ./src/app/password/password.routing.ts ***!
  \**********************************************/
/*! exports provided: PasswordRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRoutes", function() { return PasswordRoutes; });
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.component */ "/xIM");

var PasswordRoutes = [{
        path: '',
        children: [{
                path: 'password',
                component: _password_component__WEBPACK_IMPORTED_MODULE_0__["PasswordComponent"]
            }]
    }];


/***/ }),

/***/ "VB8v":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password/password.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-wrapper\">\r\n            <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <button type=\"button\" class=\"navbar-toggler\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n            </div>\r\n            <a class=\"navbar-brand\" routerLinkActive=\"active\" href=\"http://127.0.0.1:5500/index.html\">\r\n                <img style=\"max-height: 100px;\" src=\"../../../assets/img/logo.jpeg\">\r\n                <!-- <img style=\"max-height: 40px;\" src=\"../../../assets/img/logo1.png\"> -->\r\n            </a>\r\n        </div>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n        <!-- <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" target=\"_blank\" class=\"nav-link\">\r\n                        <i class=\"nc-icon nc-layout-11\"></i> Home\r\n                    </a>\r\n                </li>\r\n                 <li class=\"nav-item\">\r\n                    <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" class=\"nav-link\">\r\n                        <i class=\"nc-icon nc-book-bookmark\"></i> About\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a routerLinkActive=\"active\" onmouseover=\"this.style.color ='#000000';\" href=\"https://angrezthesalon.com/\" class=\"nav-link\">\r\n                        <i class=\"nc-icon nc-tap-01\"></i> Appointement\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item \">\r\n                    <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" class=\"nav-link\">\r\n                        <i class=\"nc-icon nc-satisfied\"></i> Blog\r\n                    </a>\r\n                </li> \r\n            </ul>\r\n        </div> -->\r\n    </div>\r\n</nav>\r\n<div class=\"wrapper wrapper-full-page \">\r\n    <div class=\"full-page section-image\" filter-color=\"red\" data-image=\"./assets/img/bg/banner.jpeg\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\r\n                    <form class=\"register-form\" name=\"loginForm\" #loginForm=\"ngForm\">\r\n                        <div class=\"card card-login\">\r\n                            <div class=\"card-header \">\r\n                                <div class=\"card-header \">\r\n                                    <h3 class=\"header text-center\" *ngIf=\"submitButton\">Register</h3>\r\n                                    <h3 class=\"header text-center\" *ngIf=\"OTPSent\">Enter OTP</h3>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"submitButton\">\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <input type=\"text\" id=\"number\" name=\"Phone Number\" placeholder=\"Phone Number\" minlength=\"10\" class=\"form-control\" [(ngModel)]=\"loginModel.pno\" required=\"true\" value=\"\" #pno=\"ngModel\" type=\"text\" required aria-describedby=\"basic-addon1\" (focus)=\"focus=true\"\r\n                                        (blur)=\"focus=false\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span>\r\n                                    </div>\r\n                                </div>\r\n                                <div [hidden]=\"(pno.valid || pno.pristine || pno.untouched )\" class=\"alert alert-danger\">\r\n                                    <div [hidden]=\"!pno.hasError('minlength')\">Phone Number should be atleast should be 10 digit</div>\r\n                                    <div [hidden]=\"!pno.hasError('required')\">Phone Number is required</div>\r\n                                </div>\r\n                                <br />\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"OTPSent\">\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <input type=\"text\" id=\"otp\" name=\"OTP\" placeholder=\"Enter OTP\" minlength=\"6\" class=\"form-control\" [(ngModel)]=\"loginModel.otp\" required=\"true\" value=\"\" #otp=\"ngModel\" type=\"text\" required aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-key\" aria-hidden=\"true\"></i></span>\r\n                                    </div>\r\n                                </div>\r\n                                <div [hidden]=\"(otp.valid || otp.pristine || otp.untouched )\" class=\"alert alert-danger\">\r\n                                    <div [hidden]=\"!otp.hasError('minlength')\">Phone Number should be atleast should be 10 digit</div>\r\n                                    <div [hidden]=\"!otp.hasError('required')\">Phone Number is required</div>\r\n                                </div>\r\n                                <br />\r\n                            </div>\r\n\r\n                            <div class=\"card-footer \" *ngIf=\"submitButton\">\r\n                                <!-- <a href=\"javascript:void(0)\"  (click)=\"Login()\" class=\"btn btn-warning btn-round btn-block mb-3\">Get Started</a> -->\r\n                                <button class=\"btn btn-danger btn-block btn-round\" id=\"registration-submit\" (click)=\"verifybox()\" value=\"Sign in\" [disabled]=\"!loginForm.form.valid\"><i class=\"fa fa-sign-in\"></i> Get OTP</button>\r\n                            </div>\r\n                            <div class=\"card-footer \" *ngIf=\"OTPSent\">\r\n                                <!-- <a href=\"javascript:void(0)\"  (click)=\"Login()\" class=\"btn btn-warning btn-round btn-block mb-3\">Get Started</a> -->\r\n                                <button class=\"btn btn-danger btn-block btn-round\" id=\"registration-submit\" (click)=\"gotodashboard()\" value=\"Sign in\" [disabled]=\"!loginForm.form.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\r\n                            </div>\r\n                            <div class=\"link d-flex justify-content-center\">\r\n                                <a href=\"\">\r\n                                    <h5>Already registered? Login here.</h5>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer footer-black  footer-white \">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <!-- <nav class=\"footer-nav\">\r\n                        <ul>\r\n\r\n                            <li>\r\n                                <a href=\"https://www.keryar.com\">\r\n                  Keryar\r\n                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"https://keryar.com/why\">\r\n                  Blog\r\n                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a>\r\n                  Licenses\r\n                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav> -->\r\n                    <div class=\"credits ml-auto\">\r\n                        <span class=\"copyright\">\r\n              &copy; {{test | date: 'yyyy'}}, Managed by <a href=\"https://www.keryar.com\">Keryar</a>\r\n            </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "k6Cy":
/*!*********************************************!*\
  !*** ./src/app/password/password.module.ts ***!
  \*********************************************/
/*! exports provided: PasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModule", function() { return PasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.component */ "/xIM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _password_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password.routing */ "GJ8S");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PasswordModule = /** @class */ (function () {
    function PasswordModule() {
    }
    PasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_password_component__WEBPACK_IMPORTED_MODULE_2__["PasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_password_routing__WEBPACK_IMPORTED_MODULE_5__["PasswordRoutes"])
            ]
        })
    ], PasswordModule);
    return PasswordModule;
}());



/***/ }),

/***/ "w71O":
/*!*************************************************!*\
  !*** ./src/app/password/password.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=password-password-module.js.map