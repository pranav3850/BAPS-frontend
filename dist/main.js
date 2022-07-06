(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\pranav\BAPS\BAPS-Dashboard\src\main.ts */"zUnb");


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, Employee, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "zvoc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/api.service */ "yTNM");
/* harmony import */ var app_pages_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/login/login.service */ "fxZ6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Menu Items
var ROUTES = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank',
        roles: "Admin",
    },
];
var Employee = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank',
        roles: "Admin",
    },
];
/*


*/
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, loginService, apiService) {
        this.router = router;
        this.loginService = loginService;
        this.apiService = apiService;
        this.Rolees = localStorage.getItem("role");
        this.userName = localStorage.getItem("UserName");
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.in_time = localStorage.getItem("lastInTime");
        this.out_time = localStorage.getItem("lastInTime");
        this.Roles = localStorage.getItem("role");
        this.uid = localStorage.getItem("UserId");
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        if (localStorage.getItem('role') == undefined) {
            this.userName = 'Haribhakt';
        }
        else {
            this.userName = 'Admin';
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
    };
    SidebarComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['pages/login']);
        // this.loginTimeCalculation();
        // let data = {
        //   userid: this.uid ,
        //   loginMinute: this.loginTotalTime
        // };
        // debugger
        // this.loginService.UpdateLogout(data).subscribe((res) => {
        //   this.apiService.showNotification('top', 'right', 'Logout Successfully.', 'success');
        //   localStorage.clear();
        //   this.router.navigate(['pages/login']);
        // });
    };
    SidebarComponent.prototype.loginTimeCalculation = function () {
        var intime = typeof datetime !== 'undefined' ? datetime : this.in_time;
        var datetime = new Date(intime).getTime();
        var now = new Date().getTime();
        if (isNaN(datetime)) {
            return "";
        }
        var milisec_diff = 0;
        if (datetime < now) {
            milisec_diff = now - datetime;
        }
        else {
            milisec_diff = datetime - now;
        }
        var minutes = 0;
        minutes = (milisec_diff / 60000);
        var minutesRound = Math.round(minutes);
        this.loginTotalTime = minutesRound;
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_pages_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sidebar-cmp',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_pages_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "550G":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-plugin\">\r\n    <div class=\"dropdown\" hidden>\r\n        <a href=\"javascript:void(0)\" data-toggle=\"dropdown\">\r\n            <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                    <span class=\"badge filter badge-default\" data-color=\"brown\"></span>\r\n                    <span class=\"badge filter badge-light\" data-color=\"white\"></span>\r\n                </a>\r\n            </li>\r\n\r\n            <li class=\"header-title\">Sidebar Active Color</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                    <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\r\n                    <span class=\"badge filter badge-info\" data-color=\"info\"></span>\r\n                    <span class=\"badge filter badge-success\" data-color=\"success\"></span>\r\n                    <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\r\n                    <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "5My1":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedplugin.component */ "Pqk8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = /** @class */ (function () {
    function FixedPluginModule() {
    }
    FixedPluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]]
        })
    ], FixedPluginModule);
    return FixedPluginModule;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "CpO+":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "EtQq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "cIR/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.lastLogin = Date;
        this.open = false;
        this.quantity = 0;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.lastLogin = localStorage.getItem('lastOutTime');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }).subscribe(function (event) {
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if (window.outerWidth < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            var parent = this.listTitles[item];
            if (parent.path === titlee) {
                return parent.title;
            }
            else if (parent.children) {
                var children_from_url = titlee.split("/")[2];
                for (var current = 0; current < parent.children.length; current++) {
                    if (parent.children[current].path === children_from_url) {
                        return parent.children[current].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    NavbarComponent.prototype.incre = function () {
        if (this.quantity != 10) {
            this.quantity++;
        }
    };
    NavbarComponent.prototype.decre = function () {
        if (this.quantity != 0)
            this.quantity--;
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NavbarComponent.propDecorators = {
        button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["navbar-cmp", { static: false },] }]
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            // moduleId: module.id,
            selector: 'navbar-cmp',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "OiN0":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"brown\" data-active-color=\"danger\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <footer-cmp></footer-cmp>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<fixedplugin-cmp></fixedplugin-cmp>\r\n");

/***/ }),

/***/ "Pqk8":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "550G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = window.outerWidth;
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    FixedPluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fixedplugin-cmp',
            template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        })
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ "QpQ6":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "YGuC":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "OiN0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        var html = document.getElementsByTagName('html')[0];
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
            html.classList.add('perfect-scrollbar-on');
        }
        else {
            html.classList.add('perfect-scrollbar-off');
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
    };
    AdminLayoutComponent.prototype.isMap = function () {
        // console.log(this.location.prepareExternalUrl(this.location.path()));
        if (this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    AdminLayoutComponent.propDecorators = {
        sidebar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sidebar', { static: false },] }],
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], { static: false },] }]
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "wCP4");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "5My1");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.module */ "cNqA");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "CpO+");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "YGuC");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "le+r");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "e/mZ");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material/material.module */ "hctd");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"], {
                    useHash: true
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__["FixedPluginModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["AngularMultiSelectModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "YGuC");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "le+r");


var AppRoutes = [{
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            },
            {
                path: '',
                loadChildren: './password/password.module#PasswordModule'
            },
            {
                path: '',
                loadChildren: './mandal/mandal.module#MandalModule',
            },
        ]
    }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            },
        ]
    }
];


/***/ }),

/***/ "cIR/":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-img-head {\r\n    width: 25%;\r\n    margin: 5%;\r\n}\r\n\r\n.cart-img img {\r\n    margin: 5%;\r\n    padding: 5%;\r\n    height: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1pbWctaGVhZCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiA1JTtcclxufVxyXG5cclxuLmNhcnQtaW1nIGltZyB7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "jQpT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"TDBs",
		"default~dashboard-dashboard-module~mandal-mandal-module",
		"dashboard-dashboard-module"
	],
	"./mandal/mandal.module": [
		"VJFv",
		"default~dashboard-dashboard-module~mandal-mandal-module"
	],
	"./pages/pages.module": [
		"dgmN",
		"pages-pages-module"
	],
	"./password/password.module": [
		"k6Cy",
		"password-password-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "fxZ6":
/*!**********************************************!*\
  !*** ./src/app/pages/login/login.service.ts ***!
  \**********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/api.service */ "yTNM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
    }
    LoginService.prototype.userLogin = function (credentials) {
        var data = {
            email: credentials.email,
            password: credentials.password,
        };
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getUserLoginURL, data);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ "N/qJ");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"],
                _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_45__["OverlayModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n\r\n                <li>\r\n                    <a href=\"http://www.keryar.com\">\r\n                        Keryar\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://keryar.com/why\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a>\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}}, Managed by <a href=\"http://www.keryar.com\">Keryar</a>\r\n        </div>\r\n    </div>\r\n</footer>");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer-cmp',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "le+r":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "QpQ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "47Jg");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "yTNM":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ApiService_1 = ApiService;
    ApiService.prototype.showNotification = function (from, align, msg, color) {
        var color = color;
        $.notify({
            icon: "",
            message: msg
        }, {
            type: color,
            timer: 2000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
        });
    };
    var ApiService_1;
    // public static HOST_URL: string = "http://localhost:8090";
    ApiService.HOST_URL = "http://31.220.111.153:8090";
    ApiService.getUserLoginURL = ApiService_1.HOST_URL + '/admin/GetUsersLogin';
    ApiService.updateLogoutDetailsURL = ApiService_1.HOST_URL + '/admin/UpdateLogoutDetails';
    ApiService.getMandalListURL = ApiService_1.HOST_URL + '/admin/GetMandalList/';
    ApiService.getAllMandalListURL = ApiService_1.HOST_URL + '/admin/GetAllMandalList/';
    ApiService.getAllMandalTypeListURL = ApiService_1.HOST_URL + '/admin/GetAllMandalTypeList';
    ApiService.getAllRelationListURL = ApiService_1.HOST_URL + '/admin/GetAllRelationList';
    ApiService.saveMemberListURL = ApiService_1.HOST_URL + '/admin/SaveMemberList';
    ApiService.getAllSavedMembersListURL = ApiService_1.HOST_URL + '/admin/GetAllSavedMembersList';
    ApiService.SaveProffesionInfoURL = ApiService_1.HOST_URL + '/admin/SaveProffesionInfo';
    ApiService.updateProffesionInfoURL = ApiService_1.HOST_URL + '/admin/updateProffesionInfoURL';
    ApiService.createFamilyURL = ApiService_1.HOST_URL + '/admin/createFamily';
    ApiService.getOldDetailsURL = ApiService_1.HOST_URL + '/admin/getOldDetails';
    ApiService.getAllFamilyListURL = ApiService_1.HOST_URL + '/admin/getAllFamilyForData';
    ApiService.removeHaribhaktDetailsURL = ApiService_1.HOST_URL + '/admin/RemoveHaribhaktDetails/';
    ApiService.removeMandalDetailsURL = ApiService_1.HOST_URL + '/admin/RemoveMandalDetails/';
    ApiService.saveMandalListURL = ApiService_1.HOST_URL + '/admin/SaveMandalList';
    ApiService.updateMandalListURL = ApiService_1.HOST_URL + '/admin/UpdateMandalList';
    ApiService.getRedtickCountURL = ApiService_1.HOST_URL + '/admin/getRedtickCount';
    ApiService.getYellowtickCountURL = ApiService_1.HOST_URL + '/admin/getYellowtickCount';
    ApiService.getGreentickCountURL = ApiService_1.HOST_URL + '/admin/getGreentickCount';
    ApiService.getEditDataforSecondStageURL = ApiService_1.HOST_URL + '/admin/getEditDataforSecondStage';
    ApiService.updateHaribhaktURL = ApiService_1.HOST_URL + '/admin/updateHaribhakt';
    ApiService.savePersonalInfoURL = ApiService_1.HOST_URL + '/admin/savePersonalInfo';
    ApiService.verifyNumberURL = ApiService_1.HOST_URL + '/admin/vetifyNumber';
    ApiService.updatePersonalInfoURL = ApiService_1.HOST_URL + '/admin/updatePersonalInfo';
    ApiService.addFamilytoNewURL = ApiService_1.HOST_URL + '/admin/addFamilytoNew';
    ApiService.saveSanchalakListURL = ApiService_1.HOST_URL + '/admin/SaveSanchalakDetails';
    ApiService.getAllSanchalakURL = ApiService_1.HOST_URL + '/admin/GetAllSanchalakDetails';
    ApiService.removeSanchalakURL = ApiService_1.HOST_URL + '/admin/RemoveSanchalakDetails/';
    ApiService.updateSanchalakListURL = ApiService_1.HOST_URL + '/admin/UpdateSanchalakDetails/';
    ApiService.getAllHaribhaktURL = ApiService_1.HOST_URL + '/admin/getAllHaribhakt';
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ApiService = ApiService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #navbar class=\"navbar navbar-expand-lg\" style=\"margin-bottom:-5%;\" [ngClass]=\"{ 'bg-white': open === true , 'navbar-transparent': open === false}\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n            <div class=\"navbar-minimize\">\r\n                <button id=\"minimizeSidebar\" class=\"btn btn-icon btn-round\" (click)=\"minimizeSidebar()\">\r\n          <i class=\"nc-icon nc-minimal-right text-center visible-on-sidebar-mini\"></i>\r\n          <i class=\"nc-icon nc-minimal-left text-center visible-on-sidebar-regular\"></i>\r\n        </button>\r\n            </div>\r\n            <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <button type=\"button\" class=\"navbar-toggler\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n            </div>\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"open = !open\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n       \r\n        <!-- <form>\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <div class=\"input-group-append\">\r\n            <div class=\"input-group-text\">\r\n              <i class=\"nc-icon nc-zoom-split\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form> -->\r\n\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

 =========================================================
 * Paper Dashboard Pro Angular - v1.4.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-angular
 * Copyright 2020 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zvoc":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n    <a routerLink=\"/dashboard\" class=\"simple-text logo-mini\">\r\n        <div class=\"logo-image-small\">\r\n            <img src=\"../../assets/img/logo.jpeg\" />\r\n        </div>\r\n    </a>\r\n    <a routerLink=\"/dashboard\" class=\"simple-text logo-normal\">\r\n        BAPS\r\n    </a>\r\n</div>\r\n\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"user\">\r\n        <div class=\"photo\">\r\n            <img src=\"./assets/img/faces/ayo-ogunseinde-2.png\" />\r\n        </div>\r\n        <div class=\"info\">\r\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n                <div class=\"row\">\r\n                    &nbsp;{{userName}}\r\n                </div>\r\n            </a>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"collapse\" id=\"collapseExample\">\r\n                <ul class=\"nav\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"sidebar-mini-icon\">LO</span>\r\n                            <span class=\"sidebar-normal\" (click)=\"logout()\">Logout</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ul class=\"nav\" *ngIf=\"Roles == 'Admin'\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\r\n            <!--If is a single link-->\r\n            <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\r\n                <i class=\"{{menuitem.icontype}}\"></i>\r\n                <p>{{menuitem.title}}</p>\r\n            </a>\r\n            <!--If it have a submenu-->\r\n            <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\">\r\n                <i class=\"{{menuitem.icontype}}\"></i>\r\n                <p>{{menuitem.title}}<b class=\"caret\"></b></p>\r\n            </a>\r\n\r\n            <!--Display the submenu items-->\r\n            <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\r\n                <ul class=\"nav\">\r\n                    <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\r\n                        <a [routerLink]=\"[menuitem.path, childitem.path]\">\r\n                            <span class=\"sidebar-mini-icon\">{{childitem.ab}}</span>\r\n                            <span class=\"sidebar-normal\">{{childitem.title}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n  \r\n\r\n</div>\r\n<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"logo\">\r\n                <div class=\"logo-image-smalllogo-mini logo-normal\">\r\n                    <a routerLink=\"/dashboard\" class=\"simple-text\">\r\n                        <img src=\"../../assets/img/logo1.png\" />\r\n\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map