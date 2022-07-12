(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "1UHe":
/*!**********************************************************!*\
  !*** ./src/app/pages/forgot-pwd/forgot-pwd.component.ts ***!
  \**********************************************************/
/*! exports provided: ForgotPwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPwdComponent", function() { return ForgotPwdComponent; });
/* harmony import */ var _raw_loader_forgot_pwd_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./forgot-pwd.component.html */ "XWbl");
/* harmony import */ var _forgot_pwd_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-pwd.component.css */ "r1AH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/api.service */ "yTNM");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "fxZ6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPwdComponent = /** @class */ (function () {
    function ForgotPwdComponent(element, loginService, apiService, router) {
        this.element = element;
        this.loginService = loginService;
        this.apiService = apiService;
        this.router = router;
        this.loginModel = [];
        this.account_validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
        };
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ForgotPwdComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    ForgotPwdComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    ForgotPwdComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    };
    ForgotPwdComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    ForgotPwdComponent.prototype.login = function (data) {
        var _this = this;
        this.loginService.userLogin(data).subscribe(function (res) {
            if (res == 1) {
                _this.apiService.showNotification('top', 'right', 'Wrong Email.', 'danger');
            }
            else if (res == 2) {
                _this.apiService.showNotification('top', 'right', 'Incorrect Password.', 'danger');
            }
            else {
                _this.apiService.showNotification('top', 'right', 'Login successfully', 'success');
                localStorage.setItem('role', 'Admin');
                _this.router.navigate(['dashboard']);
            }
        });
    };
    ForgotPwdComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ForgotPwdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-forgot-pwd',
            template: _raw_loader_forgot_pwd_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_forgot_pwd_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPwdComponent);
    return ForgotPwdComponent;
}());



/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/api.service */ "yTNM");
/* harmony import */ var app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/dashboard.service */ "QAUA");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.model */ "cqlc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(element, router, dashboardService, apiService) {
        this.element = element;
        this.router = router;
        this.dashboardService = dashboardService;
        this.apiService = apiService;
        this.test = new Date();
        this.loginModel = new _login_model__WEBPACK_IMPORTED_MODULE_5__["Loginuser"];
        this.OTPSent = false;
        this.submitButton = true;
        this.timeLeft = 120;
        this.account_validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
        };
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        localStorage.clear();
    }
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.prototype.verifybox = function () {
        var _this = this;
        this.submitButton = false;
        this.startTimer();
        this.OTPSent = true;
        var data = {
            contactno: this.loginModel.pno,
        };
        this.dashboardService.saveAndSendOtp(data).subscribe(function (data) {
            _this.apiService.showNotification('top', 'right', 'OTP Sent Successfully.', 'success');
        });
    };
    LoginComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft == 0) {
                clearInterval(_this.interval);
            }
            else {
                _this.timeLeft--;
            }
        }, 1000);
    };
    LoginComponent.prototype.resendOTP = function () {
        var _this = this;
        var data = {
            contactno: this.loginModel.pno,
        };
        this.dashboardService.removeLastInsertedOTP(data).subscribe(function (data) {
            _this.apiService.showNotification('top', 'right', 'OTP Resent Successfully.', 'success');
            _this.timeLeft = 120;
            _this.startTimer();
            _this.verifybox();
        });
    };
    LoginComponent.prototype.gotodashboard = function () {
        localStorage.setItem('mob', this.loginModel.pno);
        this.router.navigate(['dashboard']);
    };
    LoginComponent.prototype.verifyOTPFromUser = function () {
        var _this = this;
        var data = {
            contactno: this.loginModel.pno,
            otp: this.loginModel.otp
        };
        this.dashboardService.verifyUserOTP(data).subscribe(function (res) {
            if (res == 'wrong') {
                _this.apiService.showNotification('top', 'right', 'OTP does not Match Please try Again.', 'danger');
            }
            else if (res == 'err') {
                _this.apiService.showNotification('top', 'right', 'Something is wrong please try again.', 'danger');
            }
            else {
                _this.apiService.showNotification('top', 'right', 'OTP Verified Successfully.', 'success');
                _this.dashboardService.removeLastInsertedOTP(data).subscribe();
                _this.gotodashboard();
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
        { type: app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login-cmp',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "XWbl":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-pwd/forgot-pwd.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n        <button type=\"button\" class=\"navbar-toggler\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" href=\"http://127.0.0.1:5500/index.html\">\r\n        <img style=\"max-height: 70px;\" src=\"../../../assets/img/logo.jpeg\">\r\n        <!-- <img style=\"max-height: 40px;\" src=\"../../../assets/img/logo1.png\"> -->\r\n      </a>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\r\n      aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n      <ul class=\"navbar-nav\">\r\n        <!-- <li class=\"nav-item\">\r\n          <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" target=\"_blank\" class=\"nav-link\">\r\n            <i class=\"nc-icon nc-layout-11\"></i> Home\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" class=\"nav-link\">\r\n            <i class=\"nc-icon nc-book-bookmark\"></i> About\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLinkActive=\"active\" onmouseover=\"this.style.color ='#000000';\" href=\"https://angrezthesalon.com/\"\r\n            class=\"nav-link\">\r\n            <i class=\"nc-icon nc-tap-01\"></i> Appointement\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n          <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" class=\"nav-link\">\r\n            <i class=\"nc-icon nc-satisfied\"></i> Blog\r\n          </a>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n  <div class=\"wrapper wrapper-full-page \">\r\n    <div class=\"full-page section-image\" filter-color=\"red\" data-image=\"./assets/img/bg/banner.jpeg\">\r\n      <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n      <div class=\"content\">\r\n        <div class=\"container\">\r\n          <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\r\n            <form class=\"register-form\" name=\"loginForm\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n  \r\n              <div class=\"card card-login\">\r\n                <div class=\"card-header \">\r\n                  <div class=\"card-header \">\r\n                    <h3 class=\"header text-center\">Login</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-body \">\r\n  \r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <input type=\"email\" id=\"email\" name=\"eInput\" placeholder=\"Email\" class=\"form-control\"\r\n                      [(ngModel)]=\"loginModel.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                      #email=\"ngModel\" required email [ngClass]=\"{ 'is-invalid': submitted && loginForm.email.errors }\"\r\n                      aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-user\"\r\n                          aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                  <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!email.hasError('required')\">Email is required</div>\r\n                    <div [hidden]=\"!email.hasError('pattern')\">Email format should be\r\n                      <small><b>joe@abc.com</b></small>\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" minlength=\"6\"\r\n                      class=\"form-control\" [(ngModel)]=\"loginModel.password\" required=\"true\" value=\"\" #password=\"ngModel\"\r\n                      type=\"password\" required aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-key\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                  <div [hidden]=\"(password.valid || password.pristine || password.untouched )\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!password.hasError('minlength')\">password should be 6 digit</div>\r\n                    <div [hidden]=\"!password.hasError('required')\">password is required</div>\r\n                  </div>\r\n                  <br />\r\n                  <!-- <div class=\"form-group\">\r\n                    <a routerLink='/pages/forgotpwd' style=\"font-weight: 500;\">Forgot Password ?</a>\r\n                    <a routerLink='/pages/customer-register' style=\"font-weight: 500; padding-left: 80px\">Register\r\n                      here</a>\r\n                  </div> -->\r\n                </div>\r\n                <div class=\"card-footer \">\r\n                  <!-- <a href=\"javascript:void(0)\"  (click)=\"Login()\" class=\"btn btn-warning btn-round btn-block mb-3\">Get Started</a> -->\r\n                  <button class=\"btn btn-danger btn-block btn-round\" id=\"registration-submit\" (click)=\"login(loginModel)\"\r\n                    value=\"Sign in\" [disabled]=\"!loginForm.form.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\r\n                    <!-- <div class=\"link d-flex justify-content-center\" >\r\n                      <a routerLink=\"/pages/login\">\r\n                          <h5>Already registered? Login here.</h5>\r\n                      </a>\r\n                  </div> -->\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <footer class=\"footer footer-black  footer-white \">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n           \r\n            <div class=\"credits ml-auto\">\r\n              <span class=\"copyright\">\r\n                &copy; Managed by <a href=\"https://www.keryar.com\">Keryar</a>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "cqlc":
/*!********************************************!*\
  !*** ./src/app/pages/login/login.model.ts ***!
  \********************************************/
/*! exports provided: Loginuser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loginuser", function() { return Loginuser; });
var Loginuser = /** @class */ (function () {
    function Loginuser(pno, email, password, role, adminrole, otp) {
        this.pno = pno;
        this.email = email;
        this.password = password;
        this.role = role;
        this.adminrole = adminrole;
        this.otp = otp;
    }
    return Loginuser;
}());



/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routing */ "lYjW");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "D8EZ");
/* harmony import */ var _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-pwd/forgot-pwd.component */ "1UHe");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_4__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPwdComponent"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "lYjW":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-pwd/forgot-pwd.component */ "1UHe");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "D8EZ");


var PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
            {
                path: 'adminlogin',
                component: _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPwdComponent"]
            },
        ]
    }];


/***/ }),

/***/ "r1AH":
/*!***********************************************************!*\
  !*** ./src/app/pages/forgot-pwd/forgot-pwd.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1wd2QvZm9yZ290LXB3ZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-wrapper\">\r\n            <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <button type=\"button\" class=\"navbar-toggler\">\r\n                    <span class=\"navbar-toggler-bar bar1\"></span>\r\n                    <span class=\"navbar-toggler-bar bar2\"></span>\r\n                    <span class=\"navbar-toggler-bar bar3\"></span>\r\n                </button>\r\n            </div>\r\n            <a class=\"navbar-brand\" routerLinkActive=\"active\" href=\"http://127.0.0.1:5500/index.html\">\r\n                <img style=\"max-height: 100px;\" src=\"../../../assets/img/logo.jpeg\">\r\n                <!-- <img style=\"max-height: 40px;\" src=\"../../../assets/img/logo1.png\"> -->\r\n            </a>\r\n        </div>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\r\n            aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n        </button>\r\n        <!-- <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" target=\"_blank\" class=\"nav-link\">\r\n                        <i class=\"nc-icon nc-layout-11\"></i> Home\r\n                    </a>\r\n                </li>\r\n                 <li class=\"nav-item\">\r\n                    <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" class=\"nav-link\">\r\n                        <i class=\"nc-icon nc-book-bookmark\"></i> About\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a routerLinkActive=\"active\" onmouseover=\"this.style.color ='#000000';\" href=\"https://angrezthesalon.com/\" class=\"nav-link\">\r\n                        <i class=\"nc-icon nc-tap-01\"></i> Appointement\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item \">\r\n                    <a routerLinkActive=\"active\" href=\"https://angrezthesalon.com/\" class=\"nav-link\">\r\n                        <i class=\"nc-icon nc-satisfied\"></i> Blog\r\n                    </a>\r\n                </li> \r\n            </ul>\r\n        </div> -->\r\n    </div>\r\n</nav>\r\n<div class=\"wrapper wrapper-full-page \">\r\n    <div class=\"full-page section-image\" filter-color=\"red\" data-image=\"./assets/img/bg/banner.jpeg\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\r\n                    <form class=\"register-form\" name=\"loginForm\" #loginForm=\"ngForm\">\r\n                        <div class=\"card card-login\">\r\n                            <div class=\"card-header \">\r\n                                <div class=\"card-header \">\r\n                                    <h3 class=\"header text-center\" *ngIf=\"submitButton\">Login/Register</h3>\r\n                                    <h3 class=\"header text-center\" *ngIf=\"OTPSent\">Enter OTP</h3>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"submitButton\">\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <input type=\"text\" id=\"pno\" name=\"pno\" placeholder=\"Phone Number\" minlength=\"10\"\r\n                                        class=\"form-control\" [(ngModel)]=\"loginModel.pno\" required=\"true\" #pno=\"ngModel\"\r\n                                        type=\"text\" required >\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-phone\"\r\n                                                aria-hidden=\"true\"></i></span>\r\n                                    </div>\r\n                                </div>\r\n                                <div [hidden]=\"(pno.valid || pno.pristine || pno.untouched )\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div [hidden]=\"!pno.hasError('minlength')\">Phone Number should be atleast should be\r\n                                        10 digit</div>\r\n                                    <div [hidden]=\"!pno.hasError('required')\">Phone Number is required</div>\r\n                                </div>\r\n                                <br />\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"OTPSent\">\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <input type=\"text\" id=\"otp\" name=\"otp\" placeholder=\"Enter OTP\" minlength=\"6\"\r\n                                        class=\"form-control\" [(ngModel)]=\"loginModel.otp\" required=\"true\" value=\"\"\r\n                                        #otp=\"ngModel\" type=\"text\" required aria-describedby=\"basic-addon1\" autofocus\r\n                                        (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-key\"\r\n                                                aria-hidden=\"true\"></i></span>\r\n                                    </div>\r\n                                </div>\r\n                                <div [hidden]=\"(otp.valid || otp.pristine || otp.untouched )\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div [hidden]=\"!otp.hasError('minlength')\">OTP Number should be should be 6 digit\r\n                                    </div>\r\n                                    <div [hidden]=\"!otp.hasError('required')\">OTP Number is required</div>\r\n                                </div>\r\n                                <br />\r\n                            </div>\r\n\r\n                            <div class=\"card-footer \" *ngIf=\"submitButton\">\r\n                                <!-- <a href=\"javascript:void(0)\"  (click)=\"Login()\" class=\"btn btn-warning btn-round btn-block mb-3\">Get Started</a> -->\r\n                                <button class=\"btn btn-danger btn-block btn-round\" id=\"registration-submit\"\r\n                                    (click)=\"verifybox()\" value=\"Sign in\" [disabled]=\"!loginForm.form.valid \"><i\r\n                                        class=\"fa fa-sign-in\"></i> Get OTP</button>\r\n\r\n                            </div>\r\n                            <div class=\"card-footer \" *ngIf=\"OTPSent\">\r\n                                <!-- <a href=\"javascript:void(0)\"  (click)=\"Login()\" class=\"btn btn-warning btn-round btn-block mb-3\">Get Started</a> -->\r\n                                <button class=\"btn btn-danger btn-block btn-round\" id=\"registration-submit\"\r\n                                    (click)=\"verifyOTPFromUser()\" value=\"Sign in\" [disabled]=\"!loginForm.form.valid\"><i\r\n                                        class=\"fa fa-sign-in\"></i> Login</button>\r\n                                <div class=\"link d-flex justify-content-center\" style=\"padding-top:10px ;color:blue;\" >\r\n                                    <a >\r\n                                        <h5><strong>Resend OTP in: </strong>{{timeLeft}}</h5>\r\n                                    </a>\r\n                                </div>\r\n                                <button class=\"btn btn-danger btn-block btn-round\" id=\"registration-submit\" *ngIf=\"timeLeft==0\"\r\n                                    (click)=\"resendOTP()\" value=\"Sign in\" ><i\r\n                                        class=\"fa fa-sign-in\"></i> Resend OTP</button>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer footer-black  footer-white \">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <!-- <nav class=\"footer-nav\">\r\n                        <ul>\r\n\r\n                            <li>\r\n                                <a href=\"https://www.keryar.com\">\r\n                  Keryar\r\n                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"https://keryar.com/why\">\r\n                  Blog\r\n                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a>\r\n                  Licenses\r\n                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav> -->\r\n                    <div class=\"credits ml-auto\">\r\n                        <span class=\"copyright\">\r\n                            &copy; {{test | date: 'yyyy'}}, Managed by <a href=\"https://www.keryar.com\">Keryar</a>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map