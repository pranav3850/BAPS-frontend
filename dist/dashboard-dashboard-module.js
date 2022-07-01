(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "5dAw":
/*!**********************************************!*\
  !*** ./src/app/dashboard/dashboard.model.ts ***!
  \**********************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
var Dashboard = /** @class */ (function () {
    function Dashboard(
    // Form 1
    contactNo, firstName, middleName, lastName, mandalId, mandalName, mandaltype, relationship, index, famulyId) {
        this.contactNo = contactNo;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mandalId = mandalId;
        this.mandalName = mandalName;
        this.mandaltype = mandaltype;
        this.relationship = relationship;
        this.index = index;
        this.famulyId = famulyId;
    }
    return Dashboard;
}());



/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openCustomer()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-users text-primary\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Families: {{totalFamily.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openServices()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-user text-success\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Haribhakt: {{ totalHaribhakt.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openServCustom()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-address-book text-warning\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Mandal: {{ allMandalList.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openEniquiry()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-check text-danger\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Red tick: {{totalRedTick.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openMonthly()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-check text-warning\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Yellow tick: {{totalYelloTick.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openEniquiry()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-check text-success\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Green tick: {{totalGreenTick.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div *ngIf=\"strpArray.length>0\">\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead class=\"text-primary\">\r\n                        <th class=\"text-left\">#</th>\r\n                        <th class=\"text-center\">progress</th>\r\n                        <th class=\"text-left\">Name</th>\r\n                        <th class=\"text-left\">Contact No</th>\r\n                        <th class=\"text-left\">Mandal</th>\r\n                        <th class=\"text-left\">Relation</th>\r\n                        <th class=\"text-center\">Actions</th>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of strpArray |  paginate: { id:'listing_pagination',itemsPerPage: 5, currentPage: page,totalItems:strpArray.length };let ind=index\"\r\n                           >\r\n                            <td class=\"text-left\">{{ind+1}}</td>\r\n                            <td class=\"text-center\">\r\n                                <i class=\"fa fa-circle text-danger\" style=\"font-size: large;\" aria-hidden=\"true\"\r\n                                    *ngIf=\"item.status==1\"></i>\r\n                                <i class=\"fa fa-circle text-warning\" style=\"font-size: large;\" aria-hidden=\"true\"\r\n                                    *ngIf=\"item.status==2\"></i>\r\n                                <i class=\"fa fa-circle text-sucess\" style=\"font-size: large;\" aria-hidden=\"true\"\r\n                                    *ngIf=\"item.status==3\"></i>\r\n                            </td>\r\n                            <td class=\"text-left\">{{item.firstName}} {{item.middleName}} {{item.lastName}}</td>\r\n                            <td class=\"text-left\">{{item.contactNo}}</td>\r\n                            <td class=\"text-left\">{{ item.mandaltype }}-{{item.mandalName}}</td>\r\n                            <td class=\"text-left\">{{item.relationship}}</td>\r\n                            <td class=\"text-center\">\r\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm\">\r\n                                    <i class=\"fa fa-eye\"  (click)=\"openViewInfo(item)\" ></i>\r\n                                </button>\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--Family Member form loop -->\r\n    <div *ngIf=\"dashboardModelarr.length>0\">\r\n        <div *ngFor=\"let i of dashboardModelarr; let ind=index\">\r\n            <div class=\"card\">\r\n                <form class=\"loopforms\">\r\n                    <h5 class=\"text-center\">Member {{ind+1}} </h5>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label text-center\">\r\n                            <label>\r\n                                <h6>First Name</h6>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\"\r\n                                    [(ngModel)]=\"i.firstName\" placeholder=\" Enter First Name \" required value=\"\"\r\n                                    pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #fname=\"ngModel\" />\r\n                            </div>\r\n                            <!-- <div *ngIf=\"fname.errors && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\r\n                                <div *ngIf=\"fname.errors.required\">\r\n                                    First Name is required\r\n                                </div>\r\n                                <div [hidden]=\"!fname.errors('pattern')\">\r\n                                    Numbers and Special Characters not allowed\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label text-center\">\r\n                            <label>\r\n                                <h6>Middle Name</h6>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"i.middleName\"\r\n                                    placeholder=\" Enter Middle Name \" required value=\"\" pattern=\"[A-Za-z]{1,32}\"\r\n                                    (focus)=\"focus = true\" #mname{{ind+1}}=\"ngModel\" />\r\n                            </div>\r\n                            <!-- <div *ngIf=\"mname.errors && (mname.dirty || mname.touched)\" class=\"alert alert-danger\">\r\n                                <div *ngIf=\"mname.errors.required\">\r\n                                    Middle Name is required\r\n                                </div>\r\n                                <div [hidden]=\"!mname.errors('pattern')\">\r\n                                    Numbers and Special Characters not allowed\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label text-center\">\r\n                            <label>\r\n                                <h6>Last Name</h6>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"i.lastName\"\r\n                                    placeholder=\" Enter Last Name \" required value=\"\" pattern=\"[A-Za-z]{1,32}\"\r\n                                    (focus)=\"focus = true\" #lname=\"ngModel\" />\r\n                            </div>\r\n                            <!-- <div *ngIf=\"lname.errors && (lname.dirty || lname.touched)\" class=\"alert alert-danger\">\r\n                                <div *ngIf=\"lname.errors.required\">\r\n                                    Last Name is required\r\n                                </div>\r\n                                <div [hidden]=\"!lname.errors('pattern')\">\r\n                                    Numbers and Special Characters not allowed\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label text-center\">\r\n                            <label>\r\n                                <h6>Contact Number</h6>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"contact\" [(ngModel)]=\"i.contactNo\"\r\n                                    name=\"contact\" placeholder=\"Enter Contact Number\" required value=\"\"\r\n                                    pattern=\"^[0-9].{9,9}$\" (focus)=\"focus = true\" #contact=\"ngModel\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2\">\r\n                            <div class=\"dropdown form-group\">\r\n                                <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                    name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    {{ i.mandaltype }}\r\n                                </button>\r\n                                <div class=\"dropdown-menu \" aria-labelledby=\"dropdownMenuButton2\">\r\n                                    <div class=\"dropdown-header\">Select Mandal Type</div>\r\n                                    <div *ngFor=\"let j of mandalTypeList\">\r\n                                        <a class=\"dropdown-item\"\r\n                                            (click)=\"selectedmandaltype(j.mandaltype,ind)\">{{j.mandaltype}}</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2\">\r\n                            <div class=\"dropdown form-group\">\r\n                                <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                    name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    {{ i.mandalName }}\r\n                                </button>\r\n                                <div class=\"dropdown-menu \" aria-labelledby=\"dropdownMenuButton2\">\r\n                                    <div class=\"dropdown-header\">Select Mandal </div>\r\n                                    <div *ngFor=\"let j of mandalList\">\r\n                                        <a class=\"dropdown-item\" (click)=\"selectedmandal(j.id,ind)\">{{j.name}}</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-4 col-lg-4 col-xl-4\">\r\n                            <div class=\"dropdown form-group\">\r\n                                <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                    name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    {{ i.relationship }}\r\n                                </button>\r\n                                <div class=\"dropdown-menu \" aria-labelledby=\"dropdownMenuButton\">\r\n                                    <div class=\"dropdown-header\">Select Relation</div>\r\n                                    <div *ngFor=\"let j of relationList\">\r\n                                        <a class=\"dropdown-item\" (click)=\"selectedrelation(j.id,ind)\">{{j.name}}</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <!--Submit Section -->\r\n                    <div class=\"row\">\r\n                        <div class=\"ml-md-auto\">\r\n                            <div class=\"btn btn-warning\" (click)=\"saveDraft(i,ind)\">Save Draft</div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Member Information-->\r\n    <div *ngIf=\"strpArray.length>0\">\r\n        <div *ngFor=\"let item of professionModel; let ind=index\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5 class=\"text-center\">Profession Information</h5>\r\n                    <h6 class=\"small text-muted text-center\">For Member {{ind+1}}</h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form class=\"form-horizontal\" name=\"InfoForm\" #InfoForm=\"ngForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label class=\"labeltext\">\r\n                                    <h6>First Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\"\r\n                                        [(ngModel)]=\"item.firstName\" placeholder=\" Enter First Name \" required value=\"\"\r\n                                        pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #fname=\"ngModel\" disabled />\r\n                                </div>\r\n                                <div *ngIf=\"fname.errors && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"fname.errors.required\">\r\n                                        First Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!fname.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Middle Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"mname\" name=\"mname\"\r\n                                        [(ngModel)]=\"item.middleName\" placeholder=\" Enter Middle Name \" required\r\n                                        value=\"\" pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #mname=\"ngModel\"\r\n                                        disabled />\r\n                                </div>\r\n                                <div *ngIf=\"mname.errors && (mname.dirty || mname.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"mname.errors.required\">\r\n                                        Middle Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!mname.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Last Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\"\r\n                                        [(ngModel)]=\"item.lastName\" placeholder=\" Enter Last Name \" required value=\"\"\r\n                                        pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #lname=\"ngModel\" disabled />\r\n                                </div>\r\n                                <div *ngIf=\"lname.errors && (lname.dirty || lname.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"lname.errors.required\">\r\n                                        Last Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!lname.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Contact Number</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact\" [(ngModel)]=\"item.contactNo\"\r\n                                        name=\"contact\" placeholder=\"Enter Contact Number\" required value=\"\"\r\n                                        pattern=\"^[0-9].{9,9}$\" (focus)=\"focus = true\" #contact=\"ngModel\" disabled />\r\n                                </div>\r\n                                <div *ngIf=\"contact.errors && (contact.dirty || contact.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"contact.errors.required\">\r\n                                        Contact Address is required.\r\n                                    </div>\r\n                                    <div [hidden]=\"!contact.errors('pattern')\">\r\n                                        Enter Only Numbers.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\" disabled>\r\n                                        {{ item.mandaltype }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\"\r\n                                        aria-labelledby=\"dropdownMenuButton2\">\r\n                                        <div class=\"dropdown-header\">Select Mandal Type</div>\r\n                                        <div *ngFor=\"let i of mandalTypeList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedmandaltype(i.mandaltype)\">{{i.mandaltype}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\" disabled>\r\n                                        {{ item.mandalName }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\"\r\n                                        aria-labelledby=\"dropdownMenuButton2\">\r\n                                        <div class=\"dropdown-header\">Select Mandal </div>\r\n                                        <div *ngFor=\"let i of mandalList\">\r\n                                            <a class=\"dropdown-item\" (click)=\"selectedmandal(i.id)\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4 col-md-4 col-lg-4 col-xl-4\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\" disabled>\r\n                                        {{ item.relationship}}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Relation</div>\r\n                                        <div *ngFor=\"let i of relationList\">\r\n                                            <a class=\"dropdown-item\" (click)=\"selectedrelation(i.id)\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Address</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\"\r\n                                        [(ngModel)]=\"item.address\" placeholder=\"Enter Address\" value=\"\"\r\n                                        pattern=\"[#\\d+ ([^,]+), ([A-Z]{2}) (\\d{5})]\" (focus)=\"focus = true\"\r\n                                        #address=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"address.errors && (address.dirty || address.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"address.errors.required\">\r\n                                        Address is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!address.errors('pattern')\">\r\n                                        Enter Only Numbers, Characters and Special Charatcters.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>City</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-2 col-md-2 col-lg-2 col-xl-2\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"city\" city=\"city\"\r\n                                        [(ngModel)]=\"item.city\" placeholder=\" Enter city \" required value=\"\"\r\n                                        pattern=\"^[a-zA-Z]+$\" (focus)=\"focus = true\" #city=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"city.errors && (city.dirty || city.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"city.errors.required\">\r\n                                        city name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!city.errors('pattern')\">\r\n                                        Enter Only Characters.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>pincode</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-2 col-md-2 col-lg-2 col-xl-2\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"pincode\" [(ngModel)]=\"item.pincode\"\r\n                                        name=\"pincode\" placeholder=\"Enter pincode \" required value=\"\"\r\n                                        pattern=\"^[0-9].{0,6}$\" (focus)=\"focus = true\" #pincode=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"pincode.errors && (pincode.dirty || pincode.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"pincode.errors.required\">\r\n                                        pincode Address is required.\r\n                                    </div>\r\n                                    <div [hidden]=\"!pincode.errors('pattern')\">\r\n                                        Enter Only Numbers.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-4 col-md-4 col-lg-4 col-xl-4\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ item.profession }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select profession</div>\r\n                                        <div *ngFor=\"let i of professionList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedprofession(i.name,ind)\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Job'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Occupation</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Job'\"\r\n                                class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"occupation\" name=\"occupation\"\r\n                                        [(ngModel)]=\"item.occupation\" placeholder=\" Enter occupation\" required value=\"\"\r\n                                        pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #occupation=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"occupation.errors && (occupation.dirty || occupation.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"occupation.errors.required\">\r\n                                        occupation is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!occupation.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Business'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Type of Business</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Business'\"\r\n                                class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"businessType\" name=\"businessType\"\r\n                                        [(ngModel)]=\"item.businessType\" placeholder=\" Enter businessType\" required\r\n                                        value=\"\" pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\"\r\n                                        #businessType=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"businessType.errors && (businessType.dirty || businessType.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"businessType.errors.required\">\r\n                                        businessType is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!businessType.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"item.profession =='Student'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Education</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Student'\"\r\n                                class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"education\" name=\"education\"\r\n                                        [(ngModel)]=\"item.education\" placeholder=\" Enter education\" required value=\"\"\r\n                                        pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #education=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"education.errors && (education.dirty || education.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"education.errors.required\">\r\n                                        education is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!education.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"item.profession =='Other'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Type of Work</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Other'\"\r\n                                class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"workInfo\" name=\"workInfo\"\r\n                                        [(ngModel)]=\"item.workInfo\" placeholder=\" Enter workInfo\" required value=\"\"\r\n                                        pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #workInfo=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"workInfo.errors && (workInfo.dirty || workInfo.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"workInfo.errors.required\">\r\n                                        workInfo is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!workInfo.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Skills</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"skills\" name=\"skills\"\r\n                                        [(ngModel)]=\"item.skills\" placeholder=\" Enter skills \" required value=\"\"\r\n                                        pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #skills=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"skills.errors && (skills.dirty || skills.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"skills.errors.required\">\r\n                                        skills is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!skills.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"ml-md-auto\">\r\n                                <div class=\"btn btn-warning\" (click)=\"saveProffesionInfo(item,ind)\">Save Draft</div>\r\n                                <!-- <div class=\"btn btn-success\">Submit</div> -->\r\n                                &nbsp;&nbsp;&nbsp;\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <br />\r\n            <h5 class=\"modal-title text-center\">\r\n                Add Number of Family Members\r\n                <br>\r\n                <small class=\"text-muted\">(Including You)</small>\r\n            </h5>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"family\" [(ngModel)]=\"tot_mem\" name=\"family\" value=\"\"\r\n                        pattern=\"[0-9]{0,10}\" (focus)=\"focus = true\" #noofmem=\"ngModel\" />\r\n                </div>\r\n                <div *ngIf=\"noofmem.errors && noofmem.dirty \" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!family.errors('pattern')\">\r\n                        Enter Valid Numbers\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ml-md-auto\">\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"AddMoreMember()\">Save\r\n                    changes</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Edit modal -->\r\n<div class=\"modal fade\" id=\"DuplicateNoModalCenter\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <br />\r\n            <h5 class=\"modal-title text-center\">\r\n                {{duplicateUser.firstName}} {{duplicateUser.middleName}} {{duplicateUser.lastName}} Already registered\r\n                <br>\r\n                <small class=\"text-muted\">Enter otp to add in family</small>\r\n            </h5>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"otp\" name=\"otp\" />\r\n                </div>\r\n                <!-- <div *ngIf=\"noofmem.errors && noofmem.dirty \" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!family.errors('pattern')\">\r\n                        Enter Valid Numbers\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"ml-md-auto\">\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"\r\n                    (click)=\"AddExistUser()\">Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"addCustomerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-xl modal-notice\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                    <i class=\"nc-icon nc-simple-remove\"></i>\r\n                </button>\r\n                <h5 class=\"modal-title\" id=\"myModalLabel\">Add New Customer</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              \r\n                            <form class=\"form-horizontal\" name=\"InfoForm\" #InfoForm=\"ngForm\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label class=\"labeltext\">\r\n                                            <h6>First Name</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\"\r\n                                                [(ngModel)]=\"professionViewModel.firstName\" placeholder=\" Enter First Name \" required value=\"\"\r\n                                                pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #fname=\"ngModel\"  />\r\n                                        </div>\r\n                                        <div *ngIf=\"fname.errors && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"fname.errors.required\">\r\n                                                First Name is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!fname.errors('pattern')\">\r\n                                                Numbers and Special Characters not allowed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Middle Name</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"mname\" name=\"mname\"\r\n                                                [(ngModel)]=\"professionViewModel.middleName\" placeholder=\" Enter Middle Name \" required\r\n                                                value=\"\" pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #mname=\"ngModel\"\r\n                                                 />\r\n                                        </div>\r\n                                        <div *ngIf=\"mname.errors && (mname.dirty || mname.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"mname.errors.required\">\r\n                                                Middle Name is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!mname.errors('pattern')\">\r\n                                                Numbers and Special Characters not allowed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Last Name</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\"\r\n                                                [(ngModel)]=\"professionViewModel.lastName\" placeholder=\" Enter Last Name \" required value=\"\"\r\n                                                pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #lname=\"ngModel\"  />\r\n                                        </div>\r\n                                        <div *ngIf=\"lname.errors && (lname.dirty || lname.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"lname.errors.required\">\r\n                                                Last Name is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!lname.errors('pattern')\">\r\n                                                Numbers and Special Characters not allowed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Contact Number</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"contact\" [(ngModel)]=\"professionViewModel.contactNo\"\r\n                                                name=\"contact\" placeholder=\"Enter Contact Number\" required value=\"\"\r\n                                                pattern=\"^[0-9].{9,9}$\" (focus)=\"focus = true\" #contact=\"ngModel\"  />\r\n                                        </div>\r\n                                        <div *ngIf=\"contact.errors && (contact.dirty || contact.touched)\"\r\n                                            class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"contact.errors.required\">\r\n                                                Contact Address is required.\r\n                                            </div>\r\n                                            <div [hidden]=\"!contact.errors('pattern')\">\r\n                                                Enter Only Numbers.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n        \r\n                                    <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2\">\r\n                                        <div class=\"dropdown form-group\">\r\n                                            <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                                name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                                aria-haspopup=\"true\" aria-expanded=\"false\" >\r\n                                                {{ professionViewModel.mandaltype }}\r\n                                            </button>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\"\r\n                                                aria-labelledby=\"dropdownMenuButton2\">\r\n                                                <div class=\"dropdown-header\">Select Mandal Type</div>\r\n                                                <div *ngFor=\"let i of mandalTypeList\">\r\n                                                    <a class=\"dropdown-item\"\r\n                                                        (click)=\"selectedmandaltype(i.mandaltype)\">{{i.mandaltype}}</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2\">\r\n                                        <div class=\"dropdown form-group\">\r\n                                            <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                                name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                                aria-haspopup=\"true\" aria-expanded=\"false\" >\r\n                                                {{ professionViewModel.mandalName }}\r\n                                            </button>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\"\r\n                                                aria-labelledby=\"dropdownMenuButton2\">\r\n                                                <div class=\"dropdown-header\">Select Mandal </div>\r\n                                                <div *ngFor=\"let i of mandalList\">\r\n                                                    <a class=\"dropdown-item\" (click)=\"selectedmandal(i.id)\">{{i.name}}</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 col-xl-4\">\r\n                                        <div class=\"dropdown form-group\">\r\n                                            <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                                name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                                aria-haspopup=\"true\" aria-expanded=\"false\" >\r\n                                                {{ professionViewModel.relationship}}\r\n                                            </button>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                                <div class=\"dropdown-header\">Select Relation</div>\r\n                                                <div *ngFor=\"let i of relationList\">\r\n                                                    <a class=\"dropdown-item\" (click)=\"selectedrelation(i.id)\">{{i.name}}</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Address</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\"\r\n                                                [(ngModel)]=\"professionViewModel.address\" placeholder=\"Enter Address\" value=\"\"\r\n                                                pattern=\"[#\\d+ ([^,]+), ([A-Z]{2}) (\\d{5})]\" (focus)=\"focus = true\"\r\n                                                #address=\"ngModel\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"address.errors && (address.dirty || address.touched)\"\r\n                                            class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"address.errors.required\">\r\n                                                Address is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!address.errors('pattern')\">\r\n                                                Enter Only Numbers, Characters and Special Charatcters.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>City</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-2 col-md-2 col-lg-2 col-xl-2\">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"city\" city=\"city\"\r\n                                                [(ngModel)]=\"professionViewModel.city\" placeholder=\" Enter city \" required value=\"\"\r\n                                                pattern=\"^[a-zA-Z]+$\" (focus)=\"focus = true\" #city=\"ngModel\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"city.errors && (city.dirty || city.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"city.errors.required\">\r\n                                                city name is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!city.errors('pattern')\">\r\n                                                Enter Only Characters.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>pincode</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-2 col-md-2 col-lg-2 col-xl-2\">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"pincode\" [(ngModel)]=\"professionViewModel.pincode\"\r\n                                                name=\"pincode\" placeholder=\"Enter pincode \" required value=\"\"\r\n                                                pattern=\"^[0-9].{0,6}$\" (focus)=\"focus = true\" #pincode=\"ngModel\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"pincode.errors && (pincode.dirty || pincode.touched)\"\r\n                                            class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"pincode.errors.required\">\r\n                                                pincode Address is required.\r\n                                            </div>\r\n                                            <div [hidden]=\"!pincode.errors('pattern')\">\r\n                                                Enter Only Numbers.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 col-xl-4\">\r\n                                        <div class=\"dropdown form-group\">\r\n                                            <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                                name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                                aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                {{ professionViewModel.profession }}\r\n                                            </button>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                                <div class=\"dropdown-header\">Select profession</div>\r\n                                                <div *ngFor=\"let i of professionList\">\r\n                                                    <a class=\"dropdown-item\"\r\n                                                        (click)=\"selectedprofession(i.name,ind)\">{{i.name}}</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"professionViewModel.profession =='Job'\"\r\n                                        class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Occupation</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div *ngIf=\"professionViewModel.profession =='Job'\"\r\n                                        class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"occupation\" name=\"occupation\"\r\n                                                [(ngModel)]=\"professionViewModel.occupation\" placeholder=\" Enter occupation\" required value=\"\"\r\n                                                pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #occupation=\"ngModel\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"occupation.errors && (occupation.dirty || occupation.touched)\"\r\n                                            class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"occupation.errors.required\">\r\n                                                occupation is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!occupation.errors('pattern')\">\r\n                                                Numbers and Special Characters not allowed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"professionViewModel.profession =='Business'\"\r\n                                        class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Type of Business</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div *ngIf=\"professionViewModel.profession =='Business'\"\r\n                                        class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"businessType\" name=\"businessType\"\r\n                                                [(ngModel)]=\"professionViewModel.businessType\" placeholder=\" Enter businessType\" required\r\n                                                value=\"\" pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\"\r\n                                                #businessType=\"ngModel\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"businessType.errors && (businessType.dirty || businessType.touched)\"\r\n                                            class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"businessType.errors.required\">\r\n                                                businessType is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!businessType.errors('pattern')\">\r\n                                                Numbers and Special Characters not allowed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n        \r\n                                    <div *ngIf=\"professionViewModel.profession =='Student'\"\r\n                                        class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Education</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div *ngIf=\"professionViewModel.profession =='Student'\"\r\n                                        class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"education\" name=\"education\"\r\n                                                [(ngModel)]=\"professionViewModel.education\" placeholder=\" Enter education\" required value=\"\"\r\n                                                pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #education=\"ngModel\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"education.errors && (education.dirty || education.touched)\"\r\n                                            class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"education.errors.required\">\r\n                                                education is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!education.errors('pattern')\">\r\n                                                Numbers and Special Characters not allowed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n        \r\n                                    <div *ngIf=\"professionViewModel.profession =='Other'\"\r\n                                        class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Type of Work</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div *ngIf=\"professionViewModel.profession =='Other'\"\r\n                                        class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"workInfo\" name=\"workInfo\"\r\n                                                [(ngModel)]=\"professionViewModel.workInfo\" placeholder=\" Enter workInfo\" required value=\"\"\r\n                                                pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #workInfo=\"ngModel\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"workInfo.errors && (workInfo.dirty || workInfo.touched)\"\r\n                                            class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"workInfo.errors.required\">\r\n                                                workInfo is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!workInfo.errors('pattern')\">\r\n                                                Numbers and Special Characters not allowed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n        \r\n        \r\n        \r\n                                    <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                        <label>\r\n                                            <h6>Skills</h6>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\r\n                                        <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"skills\" name=\"skills\"\r\n                                                [(ngModel)]=\"professionViewModel.skills\" placeholder=\" Enter skills \" required value=\"\"\r\n                                                pattern=\"[A-Za-z]{1,32}\" (focus)=\"focus = true\" #skills=\"ngModel\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"skills.errors && (skills.dirty || skills.touched)\"\r\n                                            class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"skills.errors.required\">\r\n                                                skills is required\r\n                                            </div>\r\n                                            <div [hidden]=\"!skills.errors('pattern')\">\r\n                                                Numbers and Special Characters not allowed\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n        \r\n                                <div class=\"row\">\r\n                                    <div class=\"ml-md-auto\">\r\n                                        <div class=\"btn btn-success\" >Save Edit</div>\r\n                                        <!-- <div class=\"btn btn-success\">Submit</div> -->\r\n                                        &nbsp;&nbsp;&nbsp;\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                       \r\n            </div>\r\n           \r\n            <div class=\"modal-footer justify-content-center\">\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "I3w1":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");

var DashboardRoutes = [{
        path: '',
        children: [{
                path: 'dashboard',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
            }]
    }];


/***/ }),

/***/ "JOdj":
/*!***********************************************!*\
  !*** ./src/app/dashboard/profession.model.ts ***!
  \***********************************************/
/*! exports provided: Profession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profession", function() { return Profession; });
var Profession = /** @class */ (function () {
    function Profession(address, city, pincode, area, kshetra, education, profession, occupation, businessType, skill, workInfo, 
    //  Dashboard model variables
    contact, fname, mname, lname, mandalname, mandaltype, relation) {
        this.address = address;
        this.city = city;
        this.pincode = pincode;
        this.area = area;
        this.kshetra = kshetra;
        this.education = education;
        this.profession = profession;
        this.occupation = occupation;
        this.businessType = businessType;
        this.skill = skill;
        this.workInfo = workInfo;
        this.contact = contact;
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.mandalname = mandalname;
        this.mandaltype = mandaltype;
        this.relation = relation;
    }
    return Profession;
}());



/***/ }),

/***/ "QAUA":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
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



var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    DashboardService.prototype.getMandalList = function (type) {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getMandalListURL + type);
    };
    DashboardService.prototype.getAllMandalList = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getAllMandalListURL);
    };
    DashboardService.prototype.getAllFamilyList = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getAllFamilyListURL);
    };
    DashboardService.prototype.getAllMandaltypeList = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getAllMandalTypeListURL);
    };
    DashboardService.prototype.getAllRelationList = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getAllRelationListURL);
    };
    DashboardService.prototype.saveData = function (admin) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].saveMemberListURL, admin);
    };
    DashboardService.prototype.getSavedMembersList = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getAllSavedMembersListURL);
    };
    DashboardService.prototype.getAllHaribhakt = function () {
        debugger;
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getAllHaribhaktURL);
    };
    DashboardService.prototype.saveProffesionInfo = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].SaveProffesionInfoURL, data);
    };
    DashboardService.prototype.getRedtickCount = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getRedtickCountURL);
    };
    DashboardService.prototype.getYellowtickCount = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getYellowtickCountURL);
    };
    DashboardService.prototype.getGreentickCount = function () {
        return this.httpClient.get(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getGreentickCountURL);
    };
    DashboardService.prototype.createFamily = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].createFamilyURL, data);
    };
    DashboardService.prototype.getOldDetails = function (data) {
        return this.httpClient.post(app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].getOldDetailsURL, data);
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "VKVo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.model */ "5dAw");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ "QAUA");
/* harmony import */ var app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/api.service */ "yTNM");
/* harmony import */ var _profession_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profession.model */ "JOdj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService, apiService, avctivatedroute) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.apiService = apiService;
        this.avctivatedroute = avctivatedroute;
        this.dashboardModelarr = [];
        this.professionModel = [];
        this.professionViewModel = new _profession_model__WEBPACK_IMPORTED_MODULE_6__["Profession"];
        this.dashboardModel = new _dashboard_model__WEBPACK_IMPORTED_MODULE_3__["Dashboard"];
        this.mandalModel = [];
        this.relationModel = [];
        this.tot_mem = 1;
        this.mandalList = [];
        this.strpArray = [];
        this.basicInfo = [];
        this.selectedMandalType = 'Select Mandal Type';
        this.selectedRelation = 'Self';
        this.selectedMandal = 'Select Mandal';
        this.totalFamily = [];
        this.totalHaribhakt = [];
        this.totalRedTick = [];
        this.totalYelloTick = [];
        this.totalGreenTick = [];
        this.haribhakt = [];
        this.duplicateUser = {};
        this.professionList = [];
        this.allMandalList = [];
        this.oldUser = false;
        this.Role = localStorage.getItem('role');
        this.avctivatedroute.queryParams.subscribe(function (res) {
            _this.mainMob = res.mob;
            var obj = {
                mob: _this.mainMob
            };
            _this.getOldDetails(obj);
            debugger;
        });
        this.tot_mem = 0;
        this.professionList = [
            { name: 'Job' },
            { name: 'Business' },
            { name: 'Housewife' },
            { name: 'Student' },
            { name: 'Other' }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.tot_mem = 0;
        if (this.Role != undefined) {
            this.getHaribhakt();
            this.getRedTickCount();
            this.getYellowTickCount();
            this.getGreenTickCount();
            this.getAllFamily();
            this.getAllmandal();
        }
        this.getrelation();
        this.getMandalType();
    };
    DashboardComponent.prototype.getOldDetails = function (data) {
        var _this = this;
        this.dashboardService.getOldDetails(data).subscribe(function (res) {
            if (res != 'no family') {
                _this.strpArray = res;
                _this.strpArray.forEach(function (element) {
                    if (element.status == 1) {
                        _this.professionModel.push(element);
                    }
                });
                _this.oldUser = true;
            }
            else {
                _this.newUser();
            }
        });
    };
    DashboardComponent.prototype.newUser = function () {
        $(document).ready(function () {
            $("#exampleModalCenter").modal('show');
        });
    };
    DashboardComponent.prototype.openEdit = function (data) {
        if (data.status == 1) {
            this.dashboardModelarr.push(data);
        }
        else if (data.status == 2) {
            this.professionModel.push(data);
        }
        else {
        }
    };
    DashboardComponent.prototype.getAllFamily = function () {
        var _this = this;
        this.dashboardService.getAllFamilyList().subscribe(function (res) {
            _this.totalFamily = res;
        });
    };
    DashboardComponent.prototype.getRedTickCount = function () {
        var _this = this;
        this.dashboardService.getRedtickCount().subscribe(function (res) {
            _this.totalRedTick = res;
        });
    };
    DashboardComponent.prototype.getYellowTickCount = function () {
        var _this = this;
        this.dashboardService.getYellowtickCount().subscribe(function (res) {
            _this.totalYelloTick = res;
        });
    };
    DashboardComponent.prototype.getGreenTickCount = function () {
        var _this = this;
        this.dashboardService.getGreentickCount().subscribe(function (res) {
            _this.totalGreenTick = res;
        });
    };
    DashboardComponent.prototype.getrelation = function () {
        var _this = this;
        this.dashboardService.getAllRelationList().subscribe(function (data) {
            _this.relationList = data;
        });
    };
    DashboardComponent.prototype.getMandalType = function () {
        var _this = this;
        this.dashboardService.getAllMandaltypeList().subscribe(function (data) {
            _this.mandalTypeList = data;
        });
    };
    DashboardComponent.prototype.getmandal = function (type) {
        var _this = this;
        this.mandalList = [];
        this.dashboardService.getMandalList(type).subscribe(function (data) {
            _this.mandalList = data;
        });
    };
    DashboardComponent.prototype.getAllmandal = function () {
        var _this = this;
        this.mandalList = [];
        this.dashboardService.getAllMandalList().subscribe(function (data) {
            _this.allMandalList = data;
        });
    };
    DashboardComponent.prototype.getHaribhakt = function () {
        var _this = this;
        this.dashboardService.getAllHaribhakt().subscribe(function (res) {
            _this.totalHaribhakt = res;
        });
    };
    DashboardComponent.prototype.selectedmandaltype = function (type, ind) {
        var _this = this;
        this.mandalTypeList.forEach(function (element) {
            if (element.mandaltype == type) {
                _this.dashboardModelarr[ind].mandaltype = element.mandaltype;
                _this.getmandal(element.mandaltype);
            }
        });
    };
    DashboardComponent.prototype.selectedrelation = function (id, ind) {
        var _this = this;
        this.relationList.forEach(function (element) {
            if (element.id == id) {
                _this.selectedRelation = element.name;
                _this.dashboardModelarr[ind].relationship = element.name;
            }
        });
    };
    DashboardComponent.prototype.saveDraft = function (data, ind) {
        var _this = this;
        var test = [];
        if (data.relationship == 'Father') {
            var obj = {
                nooffammem: this.tot_mem,
                mob: data.contactNo
            };
            this.dashboardService.createFamily(obj).subscribe(function (res) {
                _this.familyId = res.insertId;
                data.familyId = _this.familyId;
                test.push(data);
                _this.dashboardService.saveData(test).subscribe(function (res) {
                    if (res[0].isDuplicate) {
                        _this.duplicateUser = res[0];
                        _this.duplicateUser.index = ind;
                        $(document).ready(function () {
                            $("#DuplicateNoModalCenter").modal('show');
                        });
                    }
                    else if (res.length > 0) {
                        data.status = res[0].status;
                        data.userId = res[0].id;
                        _this.strpArray.push(data);
                        _this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
                        _this.dashboardModelarr.splice(ind, 1);
                        _this.openProffesionalForm();
                    }
                });
            });
        }
        else if (data.relationship == 'Self' && this.familyId == undefined) {
            var obj = {
                nooffammem: this.tot_mem,
                mob: data.contactNo
            };
            this.dashboardService.createFamily(obj).subscribe(function (res) {
                _this.familyId = res.insertId;
                data.familyId = _this.familyId;
                test.push(data);
                _this.dashboardService.saveData(test).subscribe(function (res) {
                    if (res[0].isDuplicate) {
                        _this.duplicateUser = res[0];
                        _this.duplicateUser.index = ind;
                        $(document).ready(function () {
                            $("#DuplicateNoModalCenter").modal('show');
                        });
                    }
                    else if (res.length > 0) {
                        data.status = res[0].status;
                        data.userId = res[0].id;
                        _this.strpArray.push(data);
                        _this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
                        _this.dashboardModelarr.splice(ind, 1);
                        _this.openProffesionalForm();
                    }
                });
            });
        }
        else {
            data.familyId = this.familyId;
            test.push(data);
            this.dashboardService.saveData(test).subscribe(function (res) {
                if (res[0].isDuplicate) {
                    _this.duplicateUser = res[0];
                    debugger;
                    _this.duplicateUser.index = ind;
                    $(document).ready(function () {
                        $("#DuplicateNoModalCenter").modal('show');
                    });
                }
                else if (res.length > 0) {
                    data.status = res[0].status;
                    data.userId = res[0].id;
                    _this.strpArray.push(data);
                    _this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
                    _this.dashboardModelarr.splice(ind, 1);
                    _this.openProffesionalForm();
                }
            });
        }
    };
    DashboardComponent.prototype.AddExistUser = function () {
        this.strpArray.push(this.duplicateUser);
        this.dashboardModelarr.splice(this.duplicateUser.index, 1);
        this.openProffesionalForm();
    };
    DashboardComponent.prototype.selectedprofession = function (name, index) {
        this.professionModel[index].profession = name;
    };
    DashboardComponent.prototype.openProffesionalForm = function () {
        this.professionModel = this.strpArray;
    };
    DashboardComponent.prototype.getSavedMembers = function () {
        var _this = this;
        this.dashboardService.getSavedMembersList().subscribe(function (data) {
            _this.addedMembers = data;
        });
    };
    DashboardComponent.prototype.selectedmandal = function (id, ind) {
        var _this = this;
        this.mandalList.forEach(function (element) {
            if (element.id == id) {
                _this.selectedMandal = element.name;
                _this.dashboardModelarr[ind].mandalName = element.name;
                _this.dashboardModelarr[ind].mandalId = element.id;
            }
        });
    };
    DashboardComponent.prototype.AddMoreMember = function () {
        this.dashboardModelarr = [];
        for (var i = 0; i < this.tot_mem; i++) {
            var data = {
                mandalName: this.selectedMandal,
                mandaltype: this.selectedMandalType,
                relationship: this.selectedRelation,
                contactNo: '',
                firstName: '',
                middleName: '',
                lastName: ''
            };
            this.dashboardModelarr.push(data);
            this.dashboardModelarr[0].contactNo = this.mainMob;
        }
    };
    DashboardComponent.prototype.saveProffesionInfo = function (data, ind) {
        var _this = this;
        var test = [];
        test.push(data);
        this.dashboardService.saveProffesionInfo(test).subscribe(function (res) {
            _this.strpArray[ind].status = res[0].status;
            _this.professionModel.splice(1, ind);
        });
    };
    DashboardComponent.prototype.openViewInfo = function (data) {
        this.professionViewModel = data;
        debugger;
        $(document).ready(function () {
            $("#addCustomerModal").modal('show');
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
        { type: app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routing */ "I3w1");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "VKVo":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');\r\n.status {\r\n    margin-top: .75%;\r\n}\r\n.loopforms {\r\n    margin-top: 30px;\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n}\r\n#myForm {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    border: 4px solid rgba(13, 207, 6, 0.501);\r\n    vertical-align: middle;\r\n    line-height: 3.5;\r\n    margin-bottom: 15px;\r\n    border-radius: 8px;\r\n}\r\n#myForm1 {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    border: 4px solid #fbc658;\r\n    vertical-align: middle;\r\n    line-height: 3.5;\r\n    margin-bottom: 15px;\r\n    border-radius: 8px;\r\n}\r\n#myForm2 {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    border: 4px solid rgba(246, 12, 12, 0.852);\r\n    vertical-align: middle;\r\n    line-height: 3.5;\r\n    border-radius: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjtBQUNwRjtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11bGlzaDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuLnN0YXR1cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAuNzUlO1xyXG59XHJcblxyXG4ubG9vcGZvcm1zIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuI215Rm9ybSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgxMywgMjA3LCA2LCAwLjUwMSk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbiNteUZvcm0xIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmJjNjU4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4jbXlGb3JtMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNDYsIDEyLCAxMiwgMC44NTIpO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map