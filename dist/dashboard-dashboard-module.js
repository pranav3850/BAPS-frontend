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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <!-- Cards for all Counting Start -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openTotalFamilies()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-users text-primary\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Families: {{tFamily.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openTotalHaribhakt()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-user text-success\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Haribhakt: {{ tHaribhakt.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openTotalMandal()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-address-book text-warning\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Mandal: {{ tMandal.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"opentotalRedtick()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-check text-danger\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Red tick: {{totalRedTick.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openTotalYellowTick()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-check text-warning\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Yellow tick: {{tYellow.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngIf=\"Role == 'Admin'\">\r\n            <div class=\"card card-stats\" (click)=\"openTotalGreenTick()\">\r\n                <div class=\"card-body \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-5 col-md-4\">\r\n                            <div class=\"icon-big text-center icon-warning\">\r\n                                <i class=\"fa fa-check text-success\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-7 col-md-8\">\r\n                            <div class=\"numbers\">\r\n                                <p class=\"card-category\">Total</p>\r\n                                <p class=\"card-title\">Green tick: {{tGreen.length}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <hr>\r\n                    <div class=\"stats\">\r\n                        <i class=\"fa fa-arrow-right\"></i> View\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Cards for all Counting End -->\r\n\r\n    <!-- DataTable for openFamilies Start -->\r\n    <div class=\"row\" *ngIf=\"openFamiliesFlag\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h4 class=\"card-title\">Families List</h4>\r\n                        </div>\r\n                        <div class=\"ml-md-auto\">\r\n                            <label class=\"col-form-label\" style=\"margin-top: 5px;font-size: 18px;color: black;\">Search\r\n                                By</label>\r\n                        </div>\r\n                        <div class=\"col-md-3 ml-md-auto\">\r\n                            <div class=\"form-group\" style=\"margin-top: 8px !important;\">\r\n                                <input type=\"search\" id=\"form1\" class=\"form-control\" placeholder=\"Conatct Number\"\r\n                                    [(ngModel)]=\"search\" (keyup)=\"searchFamiliesList($event.target.value)\"\r\n                                    aria-label=\"Search\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-primary\">\r\n                                <th class=\"text-center\">#</th>\r\n                                <th class=\"text-center\">Family Head</th>\r\n                                <th class=\"text-center\">Contact Number</th>\r\n                                <th class=\"text-center\">Total Members</th>\r\n                                <th class=\"text-right\">Actions</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr\r\n                                    *ngFor=\"let item of totalFamily | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\r\n\r\n                                    <td class=\"text-center\">{{ item.index }}</td>\r\n                                    <td class=\"text-center\">{{ item.firstName }} {{ item.middleName }} {{ item.lastName\r\n                                        }}</td>\r\n                                    <td class=\"text-center\">{{ item.mobNo }}</td>\r\n                                    <td class=\"text-center\">{{ item.noOfFamilyMem }}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-eye\" data-toggle=\"modal\" data-target=\"#familyModal\"\r\n                                                (click)=\"viewFamilyMembersDetails(item.familyId)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-edit\" ></i>\r\n                                        </button> -->\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\"\r\n                                            (click)=\"removeOfferList(item.id)\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"row\">\r\n                        <div class=\"ml-md-auto\">\r\n                            <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\" autoHide=\"true\"\r\n                                responsive=\"true\">\r\n                            </pagination-controls>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"familyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-xl modal-notice\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                        <i class=\"nc-icon nc-simple-remove\"></i>\r\n                    </button>\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">View Family Members</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-primary\">\r\n                                <th class=\"text-center\">#</th>\r\n                                <th class=\"text-center\">Name</th>\r\n                                <th class=\"text-center\">Mandal Name</th>\r\n                                <th class=\"text-center\">Relationship</th>\r\n                                <th class=\"text-center\">Contact Number</th>\r\n                                <!-- <th class=\"text-right\">Actions</th> -->\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr\r\n                                    *ngFor=\"let item of viewMembers | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\r\n                                    <td class=\"text-center\">{{ item.index }}</td>\r\n                                    <td class=\"text-center\">{{ item.firstName}} {{item.lastName}}</td>\r\n                                    <td class=\"text-center\">{{ item.mandalName }}</td>\r\n                                    <td class=\"text-center\">{{ item.relationship }}</td>\r\n                                    <td class=\"text-center\">{{ item.contactNo }}</td>\r\n                                    <!-- <td class=\"text-right\">\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-eye\" (click)=\"onlyViewOfferDetails(item.id)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-edit\" data-toggle=\"modal\" data-target=\"#offerModal\"\r\n                                                (click)=\"viewOfferDetails(item)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\"\r\n                                            (click)=\"removeOfferList(item.id)\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </button>\r\n                                    </td> -->\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer justify-content-center\">\r\n                    <!-- <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\r\n                    (click)=\"updateOfferDetails()\">\r\n                    <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> Update\r\n                </button> -->\r\n                    <button type=\"button\" class=\"btn btn-secondary btn-round\" data-dismiss=\"modal\">\r\n                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- DataTable for openFamilies End -->\r\n\r\n    <!-- DataTable for openFamilies Start -->\r\n    <div class=\"row\" *ngIf=\"openHaribhaktFlag\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h4 class=\"card-title\">Haribhakt List</h4>\r\n                        </div>\r\n                        <div class=\"ml-md-auto\">\r\n                            <label class=\"col-form-label\" style=\"margin-top: 5px;font-size: 18px;color: black;\">Search\r\n                                By</label>\r\n                        </div>\r\n                        <div class=\"col-md-3 ml-md-auto\">\r\n                            <div class=\"form-group\" style=\"margin-top: 8px !important;\">\r\n                                <input type=\"search\" id=\"form1\" class=\"form-control\" placeholder=\"Conatct Number\"\r\n                                    [(ngModel)]=\"search\" (keyup)=\"searchHaribhaktList($event.target.value)\"\r\n                                    aria-label=\"Search\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-primary\">\r\n                                <th class=\"text-center\">#</th>\r\n                                <th class=\"text-center\">Name</th>\r\n                                <th class=\"text-center\">Mandal Name</th>\r\n                                <th class=\"text-center\">Relationship</th>\r\n                                <th class=\"text-center\">Contact Number</th>\r\n                                <th class=\"text-right\">Actions</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr\r\n                                    *ngFor=\"let item of totalHaribhakt | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\r\n                                    <td class=\"text-center\">{{ item.index }}</td>\r\n                                    <td class=\"text-center\">{{ item.firstName}} {{item.lastName}}</td>\r\n                                    <td class=\"text-center\">{{ item.mandalName }}</td>\r\n                                    <td class=\"text-center\">{{ item.relationship }}</td>\r\n                                    <td class=\"text-center\">{{ item.contactNo }}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-eye\" (click)=\"viewEditHaribhakatDetails(item)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-edit\" data-toggle=\"modal\" data-target=\"#offerModal\"\r\n                                                (click)=\"viewOfferDetails(item)\"></i>\r\n                                        </button>\r\n                                        &nbsp; -->\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\"\r\n                                            (click)=\"removeHaribhaktList(item.userId)\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"row\">\r\n                        <div class=\"ml-md-auto\">\r\n                            <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\" autoHide=\"true\"\r\n                                responsive=\"true\">\r\n                            </pagination-controls>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <style>\r\n        .modal-xl {\r\n            max-width: 1504px !important;\r\n        }\r\n    </style>\r\n    <div class=\"modal fade\" id=\"editCustomerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-xl modal-notice\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                        <i class=\"nc-icon nc-simple-remove\"></i>\r\n                    </button>\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">View/Edit Information</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-horizontal\" name=\"InfoForm\" #InfoForm=\"ngForm\">\r\n                        <div class=\"row\" style=\"display: -webkit-box !important;\" *ngIf=\"Role=='Admin'\">\r\n                            <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2 col-form-label\">\r\n                                <label>\r\n                                    <h6>Select Tags</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-4 col-lg-4 col-xl-4\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ professionViewModel.tag }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Tags</div>\r\n                                        <div *ngFor=\"let i of haribhaktTagsdata\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedHaribhaktTags(i.name,ind,'modal')\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"display: -webkit-box !important;\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label class=\"labeltext\">\r\n                                    <h6>First Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\"\r\n                                        [(ngModel)]=\"professionViewModel.firstName\" placeholder=\" Enter First Name \"\r\n                                        required value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #firstName=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"firstName.errors.required\">\r\n                                        First Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!firstName.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Middle Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"mname\" name=\"mname\"\r\n                                        [(ngModel)]=\"professionViewModel.middleName\" placeholder=\" Enter Middle Name \"\r\n                                        required value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" #mname=\"ngModel\" />\r\n                                </div>\r\n                                <div *ngIf=\"mname.errors && (mname.dirty || mname.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"mname.errors.required\">\r\n                                        Middle Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!mname.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Last Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\"\r\n                                        [(ngModel)]=\"professionViewModel.lastName\" placeholder=\" Enter Last Name \"\r\n                                        required value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #lname=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"lname.errors && (lname.dirty || lname.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"lname.errors.required\">\r\n                                        Last Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!lname.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Contact Number</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact\"\r\n                                        [(ngModel)]=\"professionViewModel.contactNo\" name=\"contact\"\r\n                                        placeholder=\"Enter Contact Number\" required value=\"\" pattern=\"^[0-9].{9,9}$\"\r\n                                        (focus)=\"focus = true\" #contact=\"ngModel\" (keyup)=\"verifyNumber(ind)\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n\r\n                                <div *ngIf=\"contact.errors && (contact.dirty || contact.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"contact.errors.required\">\r\n                                        Contact is required.\r\n                                    </div>\r\n                                    <div [hidden]=\"!contact.errors('pattern')\">\r\n                                        Enter Only Numbers. Only 10 digit.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Mandal Type</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ professionViewModel.mandalType }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Mandal Type</div>\r\n                                        <div *ngFor=\"let pos of mandalTypeList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedMandalType(pos.mandaltype,ind,'edit')\">{{pos.mandaltype}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Mandal Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ professionViewModel.mandalName }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\"\r\n                                        aria-labelledby=\"dropdownMenuButton2\">\r\n                                        <div class=\"dropdown-header\">Select Mandal </div>\r\n                                        <div *ngFor=\"let j of mandalList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedmandal(j.id,ind,'modal')\">{{j.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1  \">\r\n                                <label class=\"col-form-label \" style=\"font-weight: 700;\">\r\n                                    Relationship\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ professionViewModel.relationship}}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right \"\r\n                                        aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Relation</div>\r\n                                        <div *ngFor=\"let j of relationList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedrelation(j.id,ind,'modal')\">{{j.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 \">\r\n                                <label class=\"col-form-label \" style=\"font-weight: 700;\">\r\n                                    Address\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\"\r\n                                        [(ngModel)]=\"professionViewModel.address\" placeholder=\"Enter Address\" value=\"\"\r\n                                        pattern=\"[#\\d+ ([^,]+), ([A-Z]{2}) (\\d{5})]\" (focus)=\"focus = true\"\r\n                                        #address=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"address.errors && (address.dirty || address.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"address.errors.required\">\r\n                                        Address is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!address.errors('pattern')\">\r\n                                        Enter Only Numbers, Characters and Special Charatcters.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1  \">\r\n                                <label class=\"col-form-label\" style=\"font-weight: 700;\">\r\n                                    City/Village\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"city\" city=\"city\"\r\n                                        [(ngModel)]=\"professionViewModel.city\" placeholder=\" Enter city \" required\r\n                                        value=\"\" pattern=\"^[a-zA-Z]+$\" (focus)=\"focus = true\" #city=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"city.errors && (city.dirty || city.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"city.errors.required\">\r\n                                        city name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!city.errors('pattern')\">\r\n                                        Enter Only Characters.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>pincode</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"pincode\"\r\n                                        [(ngModel)]=\"professionViewModel.pincode\" name=\"pincode\"\r\n                                        placeholder=\"Enter pincode \" required value=\"\" pattern=\"^[0-9].{0,6}$\"\r\n                                        (focus)=\"focus = true\" #pincode=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"pincode.errors && (pincode.dirty || pincode.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"pincode.errors.required\">\r\n                                        pincode Address is required.\r\n                                    </div>\r\n                                    <div [hidden]=\"!pincode.errors('pattern')\">\r\n                                        Enter Only Numbers.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>E-mail</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"\r\n                                        [(ngModel)]=\"professionViewModel.email\"\r\n                                        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                                        placeholder=\"Enter Email Id\" required value=\"\"\r\n                                        [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>\r\n                                        Gender\r\n                                    </h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n                                        <div class=\"form-check-radio\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"male\"\r\n                                                    value=\"male\" [(ngModel)]=\"professionViewModel.gender\"> MALE\r\n                                                <span class=\"form-check-sign\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n                                        <div class=\"form-check-radio\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"female\"\r\n                                                    value=\"female\" [(ngModel)]=\"professionViewModel.gender\"> FEMALE\r\n                                                <span class=\"form-check-sign\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>Blood Group</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ professionViewModel.bloodGrp }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Blood Group</div>\r\n                                        <div *ngFor=\"let i of bloodGroupDataList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedBloodData(i.name,ind,'modal')\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>Birth Date</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"date\" id=\"dob\" [(ngModel)]=\"professionViewModel.dob\" name=\"dob\"\r\n                                        class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>Martial Status</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ professionViewModel.maritalStatus }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Marital Status</div>\r\n                                        <div *ngFor=\"let i of maratialData\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectChangeHandlerForMarital(i.name,ind,'modal')\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Native Place</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <!-- <input type=\"text\" class=\"form-control\" placeholder=\" Enter Native Place \"\r\n                                        [ngModelOptions]=\"{standalone: true}\"> -->\r\n                                    <input type=\"text\" class=\"form-control\" id=\"native\" name=\"native\"\r\n                                        [(ngModel)]=\"professionViewModel.native\" placeholder=\"Enter Native Place\" required\r\n                                        value=\"\" [ngModelOptions]=\"{standalone: true}\" pattern=\"[A-Za-z ]{1,32}\">\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Select profession</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ professionViewModel.profession }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select profession</div>\r\n                                        <div *ngFor=\"let i of professionList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedprofession(i.name,ind,'modal')\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Job'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Occupation</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Job'\"\r\n                                class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"occupation\" name=\"occupation\"\r\n                                        [(ngModel)]=\"professionViewModel.occupation\" placeholder=\" Enter occupation\"\r\n                                        required value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #occupation=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"occupation.errors && (occupation.dirty || occupation.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"occupation.errors.required\">\r\n                                        occupation is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!occupation.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Job'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Company Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Job'\"\r\n                                class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"company\" name=\"company\"\r\n                                        [(ngModel)]=\"professionViewModel.company\" placeholder=\" Enter company\" required\r\n                                        value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #company=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"company.errors && (company.dirty || company.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"company.errors.required\">\r\n                                        Company Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!company.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Business'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Type of Business</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Business'\"\r\n                                class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"businessType\" name=\"businessType\"\r\n                                        [(ngModel)]=\"professionViewModel.businessType\" placeholder=\" Enter businessType\"\r\n                                        required value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #businessType=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"businessType.errors && (businessType.dirty || businessType.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"businessType.errors.required\">\r\n                                        businessType is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!businessType.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Business'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Business City</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Business'\"\r\n                                class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"businesscity\" name=\"businesscity\"\r\n                                        [(ngModel)]=\"professionViewModel.businesscity\"\r\n                                        placeholder=\" Enter Business City\" required value=\"\" pattern=\"[A-Za-z ]{1,32}\"\r\n                                        (focus)=\"focus = true\" #businesscity=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"businesscity.errors && (businesscity.dirty || businesscity.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"businesscity.errors.required\">\r\n                                        Business city is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!businesscity.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Student'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Education</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Student'\"\r\n                                class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"education\" name=\"education\"\r\n                                        [(ngModel)]=\"professionViewModel.education\" placeholder=\" Enter education\"\r\n                                        required value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #education=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"education.errors && (education.dirty || education.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"education.errors.required\">\r\n                                        education is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!education.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Student'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>\r\n                                        Is Preparing For IELTS?\r\n                                    </h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Student'\"\r\n                                class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n                                        <div class=\"form-check-radio\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"radio\" name=\"prepareIelts\"\r\n                                                    id=\"yes\" value=\"yes\" [(ngModel)]=\"professionViewModel.prepareIelts\">\r\n                                                YES\r\n                                                <span class=\"form-check-sign\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n                                        <div class=\"form-check-radio\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"radio\" name=\"prepareIelts\" id=\"no\"\r\n                                                    value=\"no\" [(ngModel)]=\"professionViewModel.prepareIelts\"> NO\r\n                                                <span class=\"form-check-sign\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Other'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Type of Work</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"professionViewModel.profession =='Other'\"\r\n                                class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"workInfo\" name=\"workInfo\"\r\n                                        [(ngModel)]=\"professionViewModel.workInfo\" placeholder=\" Enter workInfo\"\r\n                                        required value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #workInfo=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"workInfo.errors && (workInfo.dirty || workInfo.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"workInfo.errors.required\">\r\n                                        workInfo is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!workInfo.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Skills</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"skills\" name=\"skills\"\r\n                                        [(ngModel)]=\"professionViewModel.skill\" placeholder=\" Enter skills \" required\r\n                                        value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #skills=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"skills.errors && (skills.dirty || skills.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"skills.errors.required\">\r\n                                        skills is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!skills.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2 col-form-label\">\r\n                                <label>\r\n                                    <h6>Currently living in Foreingh country?</h6>\r\n                                </label>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-1 col-lg-1 col-xl-1\">\r\n                                <div class=\"form-check-radio\" style=\"margin-top:12px;\"\r\n                                    (click)=\"isForigenOpen(true,ind,'modal')\">\r\n                                    <label class=\"form-check-label\">\r\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"isForeignCountry\" id=\"yes\"\r\n                                            value=\"true\" [(ngModel)]=\"professionViewModel.isForeignCountry\"> YES\r\n                                        <span class=\"form-check-sign\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-1 col-lg-1 col-xl-1\">\r\n\r\n                                <div class=\"form-check-radio\" style=\"margin-top:12px;\"\r\n                                    (click)=\"isForigenClose(false,ind,'modal')\">\r\n                                    <label class=\"form-check-label\">\r\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"isForeignCountry\" id=\"no\"\r\n                                            value=\"false\" [(ngModel)]=\"professionViewModel.isForeignCountry\"> NO\r\n                                        <span class=\"form-check-sign\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"isCountry\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label class=\"labeltext\">\r\n                                    <h6>Enter Country</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"foreignCountry\" name=\"foreignCountry\"\r\n                                        [(ngModel)]=\"professionViewModel.foreignCountry\"\r\n                                        placeholder=\" Enter Country Name \" required value=\"\" pattern=\"[A-Za-z ]{1,32}\"\r\n                                        (focus)=\"focus = true\" #foreignCountry=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"foreignCountry.errors && (foreignCountry.dirty || foreignCountry.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"foreignCountry.errors.required\">\r\n                                        First Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!foreignCountry.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>City Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"foreignCity\" name=\"foreignCity\"\r\n                                        [(ngModel)]=\"professionViewModel.foreignCity\" placeholder=\" Enter City Name \"\r\n                                        required value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #foreignCity=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"foreignCity.errors && (foreignCity.dirty || foreignCity.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"foreignCity.errors.required\">\r\n                                        Middle Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!foreignCity.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Foriegn Number</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"foreignContact\"\r\n                                        [(ngModel)]=\"professionViewModel.foreignContact\" name=\"foreignContact\"\r\n                                        placeholder=\"Enter Foreign  Number\" required value=\"\" pattern=\"^[0-9].{9,9}$\"\r\n                                        (focus)=\"focus = true\" #foreignContact=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"foreignContact.errors && (foreignContact.dirty || foreignContact.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"foreignContact.errors.required\">\r\n                                        foreignContact is required.\r\n                                    </div>\r\n                                    <div [hidden]=\"!foreignContact.errors('pattern')\">\r\n                                        Enter Only Numbers. Only 10 digit.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </div>\r\n\r\n                <div class=\"modal-footer justify-content-center\">\r\n                    <div class=\"row\">\r\n                        <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\r\n                            (click)=\"updateHarbhakatDetailsById()\">\r\n                            <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> Update\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-round\" data-dismiss=\"modal\"><i\r\n                                class=\"fa fa-times\" aria-hidden=\"true\"></i> Close</button>\r\n                        <!-- <div class=\"ml-md-auto\">\r\n                            <div class=\"btn btn-warning\" (click)=\"updateHarbhakatDetailsById()\">Update</div>\r\n                            \r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- DataTable for openFamilies End -->\r\n\r\n    <!-- DataTable for openMandal Start -->\r\n    <div style=\"margin-top: -93px !important; padding: 0 0 1px 1px !important;\" *ngIf=\"openMandalFlag\">\r\n\r\n        <app-mandal></app-mandal>\r\n\r\n    </div>\r\n\r\n    <!-- DataTable for openMandal End -->\r\n\r\n    <!-- DataTable for RedTick Start -->\r\n    <div class=\"row\" *ngIf=\"openRedtickFlag\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h4 class=\"card-title\">Redtick Haribhakt List</h4>\r\n                        </div>\r\n                        <div class=\"ml-md-auto\">\r\n                            <label class=\"col-form-label\" style=\"margin-top: 5px;font-size: 18px;color: black;\">Search\r\n                                By</label>\r\n                        </div>\r\n                        <div class=\"col-md-3 ml-md-auto\">\r\n                            <div class=\"form-group\" style=\"margin-top: 8px !important;\">\r\n                                <input type=\"search\" id=\"form1\" class=\"form-control\" placeholder=\"Conatct Number\"\r\n                                    [(ngModel)]=\"search\" (keyup)=\"searchManadalList($event.target.value)\"\r\n                                    aria-label=\"Search\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-primary\">\r\n                                <th class=\"text-center\">#</th>\r\n                                <th class=\"text-center\">Name</th>\r\n                                <th class=\"text-center\">Mandal Name</th>\r\n                                <th class=\"text-center\">Relationship</th>\r\n                                <th class=\"text-center\">Contact Number</th>\r\n                                <th class=\"text-right\">Actions</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr\r\n                                    *ngFor=\"let item of tRedList | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\r\n                                    <td class=\"text-center\">{{ item.index }}</td>\r\n                                    <td class=\"text-center\">{{ item.firstName}} {{item.lastName}}</td>\r\n                                    <td class=\"text-center\">{{ item.mandalName }}</td>\r\n                                    <td class=\"text-center\">{{ item.relationship }}</td>\r\n                                    <td class=\"text-center\">{{ item.contactNo }}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-eye\" (click)=\"onlyViewOfferDetails(item.id)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-edit\" data-toggle=\"modal\" data-target=\"#offerModal\"\r\n                                                (click)=\"viewOfferDetails(item)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\"\r\n                                            (click)=\"removeHaribhaktList(item.userId)\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"row\">\r\n                        <div class=\"ml-md-auto\">\r\n                            <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\" autoHide=\"true\"\r\n                                responsive=\"true\">\r\n                            </pagination-controls>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- DataTable for RedTick End -->\r\n\r\n    <!-- DataTable for YellowTick Start -->\r\n    <div class=\"row\" *ngIf=\"openYellowtickFlag\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h4 class=\"card-title\">Yellowtick Haribhakt List</h4>\r\n                        </div>\r\n                        <div class=\"ml-md-auto\">\r\n                            <label class=\"col-form-label\" style=\"margin-top: 5px;font-size: 18px;color: black;\">Search\r\n                                By</label>\r\n                        </div>\r\n                        <div class=\"col-md-3 ml-md-auto\">\r\n                            <div class=\"form-group\" style=\"margin-top: 8px !important;\">\r\n                                <input type=\"search\" id=\"form1\" class=\"form-control\" placeholder=\"Conatct Number\"\r\n                                    [(ngModel)]=\"search\" (keyup)=\"searchYellowList($event.target.value)\"\r\n                                    aria-label=\"Search\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-primary\">\r\n                                <th class=\"text-center\">#</th>\r\n                                <th class=\"text-center\">Name</th>\r\n                                <th class=\"text-center\">Mandal Name</th>\r\n                                <th class=\"text-center\">Relationship</th>\r\n                                <th class=\"text-center\">Contact Number</th>\r\n                                <th class=\"text-right\">Actions</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr\r\n                                    *ngFor=\"let item of totalYelloTick | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\r\n                                    <td class=\"text-center\">{{ item.index }}</td>\r\n                                    <td class=\"text-center\">{{ item.firstName}} {{item.lastName}}</td>\r\n                                    <td class=\"text-center\">{{ item.mandalName }}</td>\r\n                                    <td class=\"text-center\">{{ item.relationship }}</td>\r\n                                    <td class=\"text-center\">{{ item.contactNo }}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-eye\" (click)=\"onlyViewOfferDetails(item.id)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-edit\" data-toggle=\"modal\" data-target=\"#offerModal\"\r\n                                                (click)=\"viewOfferDetails(item)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\"\r\n                                            (click)=\"removeHaribhaktList(item.userId)\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"row\">\r\n                        <div class=\"ml-md-auto\">\r\n                            <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\" autoHide=\"true\"\r\n                                responsive=\"true\">\r\n                            </pagination-controls>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- DataTable for YellowTick End -->\r\n    <!-- DataTable for GreenTick Start -->\r\n    <div class=\"row\" *ngIf=\"openGreentickFlag\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h4 class=\"card-title\">GreenTick Haribhakt List</h4>\r\n                        </div>\r\n                        <div class=\"ml-md-auto\">\r\n                            <label class=\"col-form-label\" style=\"margin-top: 5px;font-size: 18px;color: black;\">Search\r\n                                By</label>\r\n                        </div>\r\n                        <div class=\"col-md-3 ml-md-auto\">\r\n                            <div class=\"form-group\" style=\"margin-top: 8px !important;\">\r\n                                <input type=\"search\" id=\"form1\" class=\"form-control\" placeholder=\"Conatct Number\"\r\n                                    [(ngModel)]=\"search\" (keyup)=\"searchGreenList($event.target.value)\"\r\n                                    aria-label=\"Search\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-primary\">\r\n                                <th class=\"text-center\">#</th>\r\n                                <th class=\"text-center\">Name</th>\r\n                                <th class=\"text-center\">Mandal Name</th>\r\n                                <th class=\"text-center\">Relationship</th>\r\n                                <th class=\"text-center\">Contact Number</th>\r\n                                <th class=\"text-right\">Actions</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr\r\n                                    *ngFor=\"let item of totalGreenTick | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\r\n                                    <td class=\"text-center\">{{ item.index }}</td>\r\n                                    <td class=\"text-center\">{{ item.firstName}} {{item.lastName}}</td>\r\n                                    <td class=\"text-center\">{{ item.mandalName }}</td>\r\n                                    <td class=\"text-center\">{{ item.relationship }}</td>\r\n                                    <td class=\"text-center\">{{ item.contactNo }}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-eye\" (click)=\"onlyViewOfferDetails(item.id)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm\">\r\n                                            <i class=\"fa fa-edit\" data-toggle=\"modal\" data-target=\"#offerModal\"\r\n                                                (click)=\"viewOfferDetails(item)\"></i>\r\n                                        </button>\r\n                                        &nbsp;\r\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\"\r\n                                            (click)=\"removeHaribhaktList(item.userId)\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"row\">\r\n                        <div class=\"ml-md-auto\">\r\n                            <pagination-controls (pageChange)=\"p = $event\" maxSize=\"10\" autoHide=\"true\"\r\n                                responsive=\"true\">\r\n                            </pagination-controls>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- DataTable for GreenTick End -->\r\n\r\n    <div *ngIf=\"professionModelList.length>0\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <h4 class=\"card-title\" style=\"margin-top: 10px !important;\">Registered Members List</h4>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 ml-md-auto\">\r\n                    <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"newUser()\">\r\n                        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add New Members\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead class=\"text-primary\">\r\n                        <th class=\"text-left\">#</th>\r\n                        <th class=\"text-center\">progress</th>\r\n                        <th class=\"text-left\">Name</th>\r\n                        <th class=\"text-left\">Contact No</th>\r\n                        <th class=\"text-left\">Mandal</th>\r\n                        <th class=\"text-left\">Relation</th>\r\n                        <th class=\"text-center\">Actions</th>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr\r\n                            *ngFor=\"let item of professionModelList |  paginate: { id:'listing_pagination',itemsPerPage: 5, currentPage: page,totalItems:strpArray.length };let ind=index\">\r\n                            <td class=\"text-left\">{{ind+1}}</td>\r\n                            <td class=\"text-center\">\r\n                                <i class=\"fa fa-circle text-danger\" style=\"font-size: large;\" aria-hidden=\"true\"\r\n                                    *ngIf=\"item.status==1\"></i>\r\n                                <i class=\"fa fa-circle text-warning\" style=\"font-size: large;\" aria-hidden=\"true\"\r\n                                    *ngIf=\"item.status==2\"></i>\r\n                                <i class=\"fa fa-circle text-sucess\" style=\"font-size: large;\" aria-hidden=\"true\"\r\n                                    *ngIf=\"item.status==3\"></i>\r\n                            </td>\r\n                            <td class=\"text-left\">{{item.firstName}} {{item.middleName}} {{item.lastName}}</td>\r\n                            <td class=\"text-left\">{{item.contactNo}}</td>\r\n                            <td class=\"text-left\">{{ item.mandalType }}-{{item.mandalName}}</td>\r\n                            <td class=\"text-left\">{{item.relationship}}</td>\r\n                            <td class=\"text-center\">\r\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm\">\r\n                                    <i class=\"fa fa-eye\" (click)=\"openViewInfo(item)\"></i>\r\n                                </button> &nbsp;&nbsp;\r\n                                <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm\"\r\n                                    (click)=\"removeHaribhaktList(item.userId)\">\r\n                                    <i class=\"fa fa-times\"></i>\r\n                                </button>\r\n                            </td>\r\n\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <!--Member Information-->\r\n    <div *ngIf=\"professionModel.length>0 && isOpenForm\">\r\n        <div *ngFor=\"let item of professionModel; let ind=index\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-11 col-sm-11 col-xl-11 col-lg-11\">\r\n                            <h5 class=\"text-center\" *ngIf=\"ind==0\">Add Details For Head of the Family first</h5>\r\n                            <h5 class=\"text-center\" *ngIf=\"ind==1\">Add Your details</h5>\r\n                            <h5 class=\"text-center\" *ngIf=\"ind>1\">Add details for Member {{ind+1}}</h5>\r\n                        </div>\r\n                        <div class=\"col-md-1 col-sm-1 col-xl-1 col-lg-1\">\r\n                            <button type=\"button\" rel=\"tooltip\" class=\"btn btn-dangerbtn-icon btn-sm\"\r\n                                (click)=\"closeModal(ind)\">\r\n                                <i class=\"fa fa-close\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <h1 class=\"small text-muted text-center\" ></h1>\r\n                    <h4 class=\"small text-muted text-center\" ></h4>\r\n                    <h6 class=\"small text-muted text-center\" ></h6> -->\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form class=\"form-horizontal\" name=\"InfoForm\" #InfoForm=\"ngForm\"\r\n                        [ngModelOptions]=\"{standalone: true}\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label class=\"labeltext\">\r\n                                    <h6>First Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\"\r\n                                        [(ngModel)]=\"item.firstName\" placeholder=\" Enter First Name \" required value=\"\"\r\n                                        pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #firstName=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"firstName.errors.required\">\r\n                                        First Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!firstName.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Middle Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"mname\" name=\"mname\"\r\n                                        [(ngModel)]=\"item.middleName\" placeholder=\" Enter Middle Name \" required\r\n                                        value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #mname=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"mname.errors && (mname.dirty || mname.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"mname.errors.required\">\r\n                                        Middle Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!mname.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Last Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-3 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\"\r\n                                        [(ngModel)]=\"item.lastName\" placeholder=\" Enter Last Name \" required value=\"\"\r\n                                        pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #lname=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"lname.errors && (lname.dirty || lname.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"lname.errors.required\">\r\n                                        Last Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!lname.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Contact Number</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact\" [(ngModel)]=\"item.contactNo\"\r\n                                        name=\"contact\" placeholder=\"Enter Contact Number\" required value=\"\"\r\n                                        pattern=\"^[0-9].{9,9}$\" (focus)=\"focus = true\" #contact=\"ngModel\"\r\n                                        (keyup)=\"verifyNumber(ind)\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n\r\n                                <div *ngIf=\"contact.errors && (contact.dirty || contact.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"contact.errors.required\">\r\n                                        Contact is required.\r\n                                    </div>\r\n                                    <div [hidden]=\"!contact.errors('pattern')\">\r\n                                        Enter Only Numbers. Only 10 digit.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Select Mandal Type</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ item.mandalType }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Category</div>\r\n                                        <div *ngFor=\"let pos of mandalTypeList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedMandalType(pos.mandaltype,ind,'array')\">{{pos.mandaltype}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Select Mandal</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton2\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ item.mandalName }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu \" aria-labelledby=\"dropdownMenuButton2\">\r\n                                        <div class=\"dropdown-header\">Select Mandal </div>\r\n                                        <div *ngFor=\"let j of mandalList\">\r\n                                            <a class=\"dropdown-item\" (click)=\"selectedmandal(j.id,ind)\">{{j.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Select Relationship</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ item.relationship}}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu \" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Relation</div>\r\n                                        <div *ngFor=\"let j of relationList\">\r\n                                            <a class=\"dropdown-item\" (click)=\"selectedrelation(j.id,ind)\">{{j.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Address</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\"\r\n                                        [(ngModel)]=\"item.address\" placeholder=\"Enter Address\" value=\"\"\r\n                                        pattern=\"[#\\d+ ([^,]+), ([A-Z]{2}) (\\d{5})]\" (focus)=\"focus = true\"\r\n                                        #address=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"address.errors && (address.dirty || address.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"address.errors.required\">\r\n                                        Address is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!address.errors('pattern')\">\r\n                                        Enter Only Numbers, Characters and Special Charatcters.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>City/Village</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"city\" city=\"city\"\r\n                                        [(ngModel)]=\"item.city\" placeholder=\" Enter city \" required value=\"\"\r\n                                        pattern=\"^[a-zA-Z]+$\" (focus)=\"focus = true\" #city=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"city.errors && (city.dirty || city.touched)\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"city.errors.required\">\r\n                                        city name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!city.errors('pattern')\">\r\n                                        Enter Only Characters.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>pincode</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"pincode\" [(ngModel)]=\"item.pincode\"\r\n                                        name=\"pincode\" placeholder=\"Enter pincode \" required value=\"\"\r\n                                        pattern=\"^[0-9].{0,6}$\" (focus)=\"focus = true\" #pincode=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"pincode.errors && (pincode.dirty || pincode.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"pincode.errors.required\">\r\n                                        pincode Address is required.\r\n                                    </div>\r\n                                    <div [hidden]=\"!pincode.errors('pattern')\">\r\n                                        Enter Only Numbers.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>E-mail</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"\r\n                                        [(ngModel)]=\"item.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                                        placeholder=\"Enter Email Id\" required value=\"\"\r\n                                        [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>\r\n                                        Gender\r\n                                    </h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n                                        <div class=\"form-check-radio\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"male\"\r\n                                                    value=\"male\" [(ngModel)]=\"item.gender\"> MALE\r\n                                                <span class=\"form-check-sign\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n                                        <div class=\"form-check-radio\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"female\"\r\n                                                    value=\"female\" [(ngModel)]=\"item.gender\"\r\n                                                    [ngModelOptions]=\"{standalone: true}\"> FEMALE\r\n                                                <span class=\"form-check-sign\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>Blood Group</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ item.bloodGrp }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Blood Group</div>\r\n                                        <div *ngFor=\"let i of bloodGroupDataList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedBloodData(i.name,ind)\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>Birth Date</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"date\" id=\"dob\" [(ngModel)]=\"item.dob\" name=\"dob\" value=\"{{ item.dob }}\"\r\n                                        class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>Martial Status</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ item.maritalStatus }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select Marital Status</div>\r\n                                        <div *ngFor=\"let i of maratialData\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectChangeHandlerForMarital(i.name,ind)\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Native Place</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <!-- <input type=\"text\" class=\"form-control\" placeholder=\" Enter Native Place \"\r\n                                        [ngModelOptions]=\"{standalone: true}\"> -->\r\n                                    <input type=\"text\" class=\"form-control\" id=\"native\" name=\"native\"\r\n                                        [(ngModel)]=\"professionViewModel.native\" placeholder=\"Enter Native Place\" required\r\n                                        value=\"\" [ngModelOptions]=\"{standalone: true}\" pattern=\"[A-Za-z ]{1,32}\">\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Select profession</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"dropdown form-group\">\r\n                                    <button class=\"dropdown-toggle btn btn-info btn-round btn-block\" type=\"button\"\r\n                                        name=\"dropdownMenuButton\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        {{ item.profession }}\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <div class=\"dropdown-header\">Select profession</div>\r\n                                        <div *ngFor=\"let i of professionList\">\r\n                                            <a class=\"dropdown-item\"\r\n                                                (click)=\"selectedprofession(i.name,ind)\">{{i.name}}</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Job'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Occupation</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Job'\" class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"occupation\" name=\"occupation\"\r\n                                        [(ngModel)]=\"item.occupation\" placeholder=\" Enter occupation\" required value=\"\"\r\n                                        pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #occupation=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"occupation.errors && (occupation.dirty || occupation.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"occupation.errors.required\">\r\n                                        occupation is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!occupation.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Job'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Company Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Job'\" class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"company\" name=\"company\"\r\n                                        [(ngModel)]=\"item.company\" placeholder=\" Enter company\" required value=\"\"\r\n                                        pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #company=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"company.errors && (company.dirty || company.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"company.errors.required\">\r\n                                        Company Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!company.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Business'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Type of Business</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Business'\" class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"businessType\" name=\"businessType\"\r\n                                        [(ngModel)]=\"item.businessType\" placeholder=\" Enter businessType\" required\r\n                                        value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #businessType=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"businessType.errors && (businessType.dirty || businessType.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"businessType.errors.required\">\r\n                                        businessType is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!businessType.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Business'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Business City</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Business'\" class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"businesscity\" name=\"businesscity\"\r\n                                        [(ngModel)]=\"item.businesscity\" placeholder=\" Enter Business City\" required\r\n                                        value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #businesscity=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"businesscity.errors && (businesscity.dirty || businesscity.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"businesscity.errors.required\">\r\n                                        Business City is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!businesscity.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"item.profession =='Student'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Education</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Student'\" class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"education\" name=\"education\"\r\n                                        [(ngModel)]=\"item.education\" placeholder=\" Enter education\" required value=\"\"\r\n                                        pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #education=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"education.errors && (education.dirty || education.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"education.errors.required\">\r\n                                        education is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!education.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Student'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label\">\r\n                                <label>\r\n                                    <h6>\r\n                                        Is Preparing For IELTS?\r\n                                    </h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Student'\" class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n                                        <div class=\"form-check-radio\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"radio\" name=\"prepareIelts\"\r\n                                                    id=\"yes\" value=\"yes\" [(ngModel)]=\"item.prepareIelts\"> YES\r\n                                                <span class=\"form-check-sign\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xl-6\">\r\n                                        <div class=\"form-check-radio\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"radio\" name=\"prepareIelts\" id=\"no\"\r\n                                                    value=\"no\" [(ngModel)]=\"item.prepareIelts\"> NO\r\n                                                <span class=\"form-check-sign\"></span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Other'\"\r\n                                class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Type of Work</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div *ngIf=\"item.profession =='Other'\" class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"workInfo\" name=\"workInfo\"\r\n                                        [(ngModel)]=\"item.workInfo\" placeholder=\" Enter workInfo\" required value=\"\"\r\n                                        pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #workInfo=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"workInfo.errors && (workInfo.dirty || workInfo.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"workInfo.errors.required\">\r\n                                        workInfo is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!workInfo.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Skills</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"skills\" name=\"skills\"\r\n                                        [(ngModel)]=\"item.skill\" placeholder=\" Enter skills \" required value=\"\"\r\n                                        pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #skills=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"skills.errors && (skills.dirty || skills.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"skills.errors.required\">\r\n                                        skills is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!skills.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-md-2 col-lg-2 col-xl-2 col-form-label\">\r\n                                <label>\r\n                                    <h6>Currently living in Foreingh country?</h6>\r\n                                </label>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-1 col-lg-1 col-xl-1\">\r\n                                <div class=\"form-check-radio\" style=\"margin-top:12px;\"\r\n                                    (click)=\"isForigenOpen(true,ind)\">\r\n                                    <label class=\"form-check-label\">\r\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"isForeignCountry\" id=\"yes\"\r\n                                            value=\"true\" [(ngModel)]=\"item.isForeignCountry\"> YES\r\n                                        <span class=\"form-check-sign\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-1 col-lg-1 col-xl-1\">\r\n\r\n                                <div class=\"form-check-radio\" style=\"margin-top:12px;\"\r\n                                    (click)=\"isForigenClose(false,ind)\">\r\n                                    <label class=\"form-check-label\">\r\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"isForeignCountry\" id=\"no\"\r\n                                            value=\"false\" [(ngModel)]=\"item.isForeignCountry\"> NO\r\n                                        <span class=\"form-check-sign\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"isCountry\">\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label class=\"labeltext\">\r\n                                    <h6>Enter Country</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"foreignCountry\" name=\"foreignCountry\"\r\n                                        [(ngModel)]=\"item.foreignCountry\" placeholder=\" Enter Country Name \" required\r\n                                        value=\"\" pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\"\r\n                                        #foreignCountry=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"foreignCountry.errors && (foreignCountry.dirty || foreignCountry.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"foreignCountry.errors.required\">\r\n                                        First Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!foreignCountry.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>City Name</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"foreignCity\" name=\"foreignCity\"\r\n                                        [(ngModel)]=\"item.foreignCity\" placeholder=\" Enter City Name \" required value=\"\"\r\n                                        pattern=\"[A-Za-z ]{1,32}\" (focus)=\"focus = true\" #foreignCity=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"foreignCity.errors && (foreignCity.dirty || foreignCity.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"foreignCity.errors.required\">\r\n                                        Middle Name is required\r\n                                    </div>\r\n                                    <div [hidden]=\"!foreignCity.errors('pattern')\">\r\n                                        Numbers and Special Characters not allowed\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-1 col-form-label \">\r\n                                <label>\r\n                                    <h6>Foriegn Number</h6>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3 \">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"foreignContact\"\r\n                                        [(ngModel)]=\"item.foreignContact\" name=\"foreignContact\"\r\n                                        placeholder=\"Enter Foreign  Number\" required value=\"\" pattern=\"^[0-9].{9,9}$\"\r\n                                        (focus)=\"focus = true\" #foreignContact=\"ngModel\"\r\n                                        [ngModelOptions]=\"{standalone: true}\" />\r\n                                </div>\r\n                                <div *ngIf=\"foreignContact.errors && (foreignContact.dirty || foreignContact.touched)\"\r\n                                    class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"foreignContact.errors.required\">\r\n                                        foreignContact is required.\r\n                                    </div>\r\n                                    <div [hidden]=\"!foreignContact.errors('pattern')\">\r\n                                        Enter Only Numbers. Only 10 digit.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"ml-md-auto\">\r\n                                <div class=\"btn btn-warning\" (click)=\"savePersonalInfo(item,ind)\">Save Draft</div>\r\n                                <!-- <div class=\"btn btn-success\">Submit</div> -->\r\n                                &nbsp;&nbsp;&nbsp;\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <br />\r\n                <h5 class=\"modal-title text-center\">\r\n                    Add Number of Family Members\r\n                    <br>\r\n                    <small class=\"text-muted\">(Including You)</small>\r\n                </h5>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                        <input type=\"number\" class=\"form-control\" id=\"family\" [(ngModel)]=\"tot_mem\" name=\"family\"\r\n                            value=\"\" pattern=\"[0-9]{0,10}\" placeholder=\"Enter Total Numbers Of Members\"\r\n                            (focus)=\"focus = true\" #noofmem=\"ngModel\" autofocus />\r\n                    </div>\r\n                    <div *ngIf=\"noofmem.errors && noofmem.dirty \" class=\"alert alert-danger\">\r\n                        <div [hidden]=\"!family.errors('pattern')\">\r\n                            Enter Valid Numbers\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ml-md-auto\">\r\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"AddMoreMember()\">Save\r\n                        changes</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- duplicate number modal -->\r\n    <div class=\"modal fade\" id=\"DuplicateNoModalCenter1\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <br />\r\n                <h6 class=\"modal-title text-center\">\r\n                    Family with this Contact number is registered Already\r\n                    <br />\r\n\r\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"openOTPforAddUser()\">Do\r\n                        you want to add them?</button><br />\r\n                    <h3>OR</h3>\r\n                    <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">You want to create new?</button>\r\n                </h6>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"DuplicateNoModalCenter\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <br />\r\n                <h5 class=\"modal-title text-center\">\r\n                    <small class=\"text-muted\">Enter otp to add in family</small>\r\n                </h5>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"form-group\" [ngClass]=\"{ 'form-group-focus': focus === true }\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"otp\" name=\"otp\" />\r\n                    </div>\r\n                    <!-- <div *ngIf=\"noofmem.errors && noofmem.dirty \" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!family.errors('pattern')\">\r\n                        Enter Valid Numbers\r\n                    </div>\r\n                </div> -->\r\n                </div>\r\n                <div class=\"ml-md-auto\">\r\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"\r\n                        (click)=\"AddExistUser()\">Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" *ngIf=\"1==2\">\r\n        <div class=\"card-body\">\r\n            <h6 class=\"text-center\" id=\"satsang\">Satsang Details</h6>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-2 col-form-label text-left\">\r\n                    <label>\r\n                        <h6>Satsang Sava Appointment</h6>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                    <div class=\"dropdown\">\r\n                        <div class=\"btn-group bootstrap-select w-100\">\r\n                            <select class=\"selectpicker w-100\" data-size=\"7\" data-style=\"btn btn-primary btn-round\"\r\n                                title=\"Select...\">\r\n                                <option disabled selected>Select...</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-1\"></div>\r\n                <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-2 col-form-label text-left\">\r\n                    <label>\r\n                        <h6>Member Enqiry</h6>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                    <div class=\"dropdown\">\r\n                        <div class=\"btn-group bootstrap-select w-100\">\r\n                            <select class=\"selectpicker w-100\" data-size=\"7\" data-style=\"btn btn-primary btn-round\"\r\n                                title=\"Select...\">\r\n                                <option disabled selected>Any Family Member Living in Foreign Country?</option>\r\n                                <option value=\"2\">Yes</option>\r\n                                <option value=\"3\">No</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-2 col-form-label text-left\">\r\n                    <label>\r\n                        <h6>Mandal Sabha Attendance</h6>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                    <div class=\"dropdown\">\r\n                        <div class=\"btn-group bootstrap-select w-100\">\r\n                            <select class=\"selectpicker w-100\" data-size=\"7\" data-style=\"btn btn-primary btn-round\"\r\n                                title=\"Select...\">\r\n                                <option disabled selected>Select...</option>\r\n                                <option value=\"2\" id=\"yes\">Yes</option>\r\n                                <option value=\"3\">No</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-1\"></div>\r\n                <!-- <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-2 col-form-label text-center\">\r\n                    <label>\r\n                        <h6>Member Enquiry</h6>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                    <div class=\"dropdown\">\r\n                        <div class=\"btn-group bootstrap-select w-100\">\r\n                            <select class=\"selectpicker w-100\" data-size=\"7\" data-style=\"btn btn-primary btn-round\"\r\n                                title=\"Select...\">\r\n                                <option disabled selected>Any Member Living in Foreign Country?</option>\r\n                                <option value=\"2\">Yes</option>\r\n                                <option value=\"3\">No</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-sm-12 col-md-1 col-lg-1 col-xl-2 col-form-label text-left\">\r\n                    <label>\r\n                        <h6>Satsang Sava History</h6>\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n                    <div class=\"form-group\">\r\n                        <textarea type=\"text\" class=\"form-control\" placeholder=\"History!\"></textarea>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
            },
        ]
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
    function Profession(
    //  Dashboard model variables
    contactNo, firstName, middleName, lastName, mandalId, mandalName, mandalType, relationship, index, familyId, address, city, pincode, area, kshetra, education, profession, occupation, businessType, skill, workInfo, status, email, bloodGrp, dob, gender, maritalStatus, isForeignCountry, foreignCountry, foreignCity, foreignContact, userId, tag, prepareIelts, general, medium, vip, mvip, politician, company, native, businesscity) {
        this.contactNo = contactNo;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mandalId = mandalId;
        this.mandalName = mandalName;
        this.mandalType = mandalType;
        this.relationship = relationship;
        this.index = index;
        this.familyId = familyId;
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
        this.status = status;
        this.email = email;
        this.bloodGrp = bloodGrp;
        this.dob = dob;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
        this.isForeignCountry = isForeignCountry;
        this.foreignCountry = foreignCountry;
        this.foreignCity = foreignCity;
        this.foreignContact = foreignContact;
        this.userId = userId;
        this.tag = tag;
        this.prepareIelts = prepareIelts;
        this.general = general;
        this.medium = medium;
        this.vip = vip;
        this.mvip = mvip;
        this.politician = politician;
        this.company = company;
        this.native = native;
        this.businesscity = businesscity;
    }
    return Profession;
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
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
        this.dashboardService = dashboardService;
        this.apiService = apiService;
        this.avctivatedroute = avctivatedroute;
        this.dashboardModelarr = [];
        this.professionModel = [];
        this.professionViewModel = new _profession_model__WEBPACK_IMPORTED_MODULE_6__["Profession"];
        this.professionModelList = [];
        this.duplicateUser = new _profession_model__WEBPACK_IMPORTED_MODULE_6__["Profession"];
        this.duplicateFamily = [];
        this.dashboardModel = new _dashboard_model__WEBPACK_IMPORTED_MODULE_3__["Dashboard"];
        this.mandalModel = [];
        this.relationModel = [];
        this.tot_mem = 1;
        this.mandalList = [];
        this.strpArray = [];
        this.basicInfo = [];
        // selectedMandalType = 'Select Mandal Type';
        this.selectedRelation = 'Self';
        this.selectedMandal = 'Select Mandal';
        this.totalFamily = [];
        this.viewMembers = [];
        this.tFamily = [];
        this.totalHaribhakt = [];
        this.tHaribhakt = [];
        this.tMandal = [];
        this.tYellow = [];
        this.totalRedTick = [];
        this.tRedList = [];
        this.tGreen = [];
        this.totalYelloTick = [];
        this.totalGreenTick = [];
        this.search = '';
        this.haribhakt = [];
        this.professionList = [];
        this.allMandalList = [];
        this.oldUser = false;
        this.formdate = new Date();
        this.isCountry = false;
        this.openFamiliesFlag = false;
        this.openHaribhaktFlag = false;
        this.openMandalFlag = false;
        this.openRedtickFlag = false;
        this.openYellowtickFlag = false;
        this.openGreentickFlag = false;
        this.bloodGroupDataList = [];
        this.maratialData = [];
        this.isOpenForm = false;
        this.haribhaktTagsdata = [];
        this.updateHariDetail = [];
        this.Role = localStorage.getItem('role');
        this.mainMob = localStorage.getItem('mob');
        // this.avctivatedroute.queryParams.subscribe((res: any) => {
        //   this.mainMob = res.mob;
        var obj = {
            mob: this.mainMob
        };
        if (this.Role == undefined) {
            this.getOldDetails(obj);
        }
        this.formdate;
        // })
        this.tot_mem = 0;
        this.professionList = [
            { name: 'Job' },
            { name: 'Business' },
            { name: 'Housewife' },
            { name: 'Student' },
            { name: 'Other' }
        ];
        this.bloodGroupDataList = [
            { name: 'A Positive' },
            { name: 'A Negative' },
            { name: 'B Positive' },
            { name: 'B Negative' },
            { name: 'AB Positive' },
            { name: 'AB Negative' },
            { name: 'O Positive' },
            { name: 'O Negative' },
            { name: 'Unknown' },
        ];
        this.maratialData = [
            { name: 'Single' },
            { name: 'Married' },
            { name: 'Unmarried' },
            { name: 'Divorced' },
            { name: 'Widowed' }
        ];
        this.haribhaktTagsdata = [
            { name: 'General' },
            { name: 'Medium' },
            { name: 'Vip' },
            { name: 'Mvip' },
            { name: 'Politician' }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (this.Role != undefined) {
            this.getHaribhakt();
            this.getRedTickCount();
            this.getYellowTickCount();
            this.getGreenTickCount();
            this.getAllFamily();
            this.getAllmandal();
        }
        else {
            var obj = {
                mob: this.mainMob
            };
            this.getOldDetails(obj);
        }
        this.getrelation();
        this.getMandalType();
    };
    DashboardComponent.prototype.getOldDetails = function (data) {
        var _this = this;
        this.dashboardService.getOldDetails(data).subscribe(function (res) {
            if (res != 'no family' && res.length > 0) {
                _this.familyId = res[0].familyId;
                _this.professionModelList = res;
                _this.isOpenForm = false;
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
    DashboardComponent.prototype.viewEditHaribhakatDetails = function (data) {
        this.professionViewModel = data;
        this.professionViewModel.general = false;
        this.professionViewModel.medium = false;
        this.professionViewModel.vip = false;
        this.professionViewModel.mvip = false;
        this.professionViewModel.politician = false;
        var str = this.professionViewModel.dob;
        var date = new Date(str);
        this.formdate = date;
        $(document).ready(function () {
            $("#editCustomerModal").modal('show');
        });
    };
    DashboardComponent.prototype.updateHarbhakatDetailsById = function () {
        var _this = this;
        var data = [];
        data.push(this.professionViewModel);
        this.dashboardService.updatePersonalInfo(data).subscribe(function (res) {
            if (res != 'success') {
                _this.apiService.showNotification('top', 'right', ' Error in Information Updation.', 'danger');
            }
            else {
                _this.apiService.showNotification('top', 'right', 'Information Updated Successfully.', 'success');
            }
        });
    };
    DashboardComponent.prototype.removeItem = function (i) {
        this.dashboardModelarr.splice(i, 1);
        // this.tot_mem = this.dashboardModelarr.length;
    };
    DashboardComponent.prototype.getAllFamily = function () {
        var _this = this;
        this.dashboardService.getAllFamilyList().subscribe(function (res) {
            debugger;
            _this.totalFamily = res;
            _this.tFamily = res;
            for (var i = 0; i < _this.totalFamily.length; i++) {
                _this.totalFamily[i].index = i + 1;
            }
        });
    };
    DashboardComponent.prototype.viewFamilyMembersDetails = function (id) {
        var _this = this;
        this.viewMembers = [];
        this.totalHaribhakt.forEach(function (element, index) {
            if (element.familyId == id) {
                element.index = index + 1;
                _this.viewMembers.push(element);
            }
        });
    };
    DashboardComponent.prototype.searchFamiliesList = function (val) {
        if (this.search == '') {
            this.totalFamily = this.tFamily;
        }
        else {
            this.transform(this.tFamily, val);
        }
    };
    DashboardComponent.prototype.transform = function (totalFamily, searchValue) {
        var _this = this;
        this.totalFamily = [];
        totalFamily.forEach(function (element) {
            if (element.mobNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalFamily.push(element);
            }
            else if (element.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalFamily.push(element);
            }
            else if (element.middleName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalFamily.push(element);
            }
            else if (element.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalFamily.push(element);
            }
        });
    };
    DashboardComponent.prototype.getHaribhakt = function () {
        var _this = this;
        this.dashboardService.getAllHaribhakt().subscribe(function (res) {
            _this.totalHaribhakt = res;
            _this.tHaribhakt = res;
            for (var i = 0; i < _this.totalHaribhakt.length; i++) {
                _this.totalHaribhakt[i].index = i + 1;
            }
        });
    };
    DashboardComponent.prototype.setGeneralTagbyAdmin = function () {
        this.professionViewModel.general;
    };
    DashboardComponent.prototype.searchHaribhaktList = function (val) {
        if (this.search == '') {
            this.totalHaribhakt = this.tHaribhakt;
        }
        else {
            this.transformHaribhakt(this.tHaribhakt, val);
        }
    };
    DashboardComponent.prototype.transformHaribhakt = function (totalHaribhakt, searchValue) {
        var _this = this;
        this.totalHaribhakt = [];
        totalHaribhakt.forEach(function (element) {
            if (element.contactNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalHaribhakt.push(element);
            }
            else if (element.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalHaribhakt.push(element);
            }
            else if (element.mandalName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalHaribhakt.push(element);
            }
            else if (element.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalHaribhakt.push(element);
            }
            else if (element.relationship.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalHaribhakt.push(element);
            }
        });
    };
    DashboardComponent.prototype.removeHaribhaktList = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure?',
            text: "You want to delete! If you delete Registered Member then the member will be removed from family.",
            icon: 'warning',
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            confirmButtonText: 'Yes',
            buttonsStyling: false
        }).then(function (result) {
            if (result.value == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: 'Are you sure?',
                    text: "You want to delete! If you delete Registered Member then the member will be removed from family.",
                    icon: 'warning',
                    showCancelButton: true,
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger',
                    },
                    confirmButtonText: 'Yes',
                    buttonsStyling: false
                }).then(function (result) {
                    if (result.value == true) {
                        _this.dashboardService.removeHaribhaktDetails(id).subscribe(function (req) {
                            _this.apiService.showNotification('top', 'right', 'Offer removed Successfully.', 'success');
                        });
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                            title: 'Deleted!',
                            text: 'Your Offer has been deleted.',
                            icon: 'success',
                            customClass: {
                                confirmButton: "btn btn-success",
                            },
                            buttonsStyling: false
                        });
                        _this.getHaribhakt();
                    }
                });
            }
        });
    };
    DashboardComponent.prototype.getRedTickCount = function () {
        var _this = this;
        this.dashboardService.getRedtickCount().subscribe(function (res) {
            _this.totalRedTick = res;
        });
    };
    DashboardComponent.prototype.getRedTickListForAll = function () {
        var _this = this;
        this.dashboardService.getRedtickCount().subscribe(function (data) {
            _this.tRedList = data;
            for (var i = 0; i < _this.tRedList.length; i++) {
                _this.tRedList[i].index = i + 1;
            }
        });
    };
    DashboardComponent.prototype.getYellowTickCount = function () {
        var _this = this;
        this.dashboardService.getYellowtickCount().subscribe(function (res) {
            _this.totalYelloTick = res;
            _this.tYellow = res;
            for (var i = 0; i < _this.totalYelloTick.length; i++) {
                _this.totalYelloTick[i].index = i + 1;
            }
        });
    };
    DashboardComponent.prototype.searchYellowList = function (val) {
        if (this.search == '') {
            this.totalYelloTick = this.tYellow;
        }
        else {
            this.transformYellow(this.tYellow, val);
        }
    };
    DashboardComponent.prototype.transformYellow = function (totalYelloTick, searchValue) {
        var _this = this;
        this.totalYelloTick = [];
        totalYelloTick.forEach(function (element) {
            if (element.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalYelloTick.push(element);
            }
            else if (element.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalYelloTick.push(element);
            }
            else if (element.mandalName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalYelloTick.push(element);
            }
            else if (element.relationship.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalYelloTick.push(element);
            }
            else if (element.contactNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalYelloTick.push(element);
            }
        });
    };
    DashboardComponent.prototype.getGreenTickCount = function () {
        var _this = this;
        this.dashboardService.getGreentickCount().subscribe(function (res) {
            _this.totalGreenTick = res;
            _this.tGreen = res;
            for (var i = 0; i < _this.totalGreenTick.length; i++) {
                _this.totalGreenTick[i].index = i + 1;
            }
        });
    };
    DashboardComponent.prototype.searchGreenList = function (val) {
        if (this.search == '') {
            this.totalGreenTick = this.tGreen;
        }
        else {
            this.transformGreen(this.tGreen, val);
        }
    };
    DashboardComponent.prototype.transformGreen = function (totalGreenTick, searchValue) {
        var _this = this;
        this.totalGreenTick = [];
        totalGreenTick.forEach(function (element) {
            if (element.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalGreenTick.push(element);
            }
            else if (element.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalGreenTick.push(element);
            }
            else if (element.mandalName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalGreenTick.push(element);
            }
            else if (element.relationship.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalGreenTick.push(element);
            }
            else if (element.contactNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.totalGreenTick.push(element);
            }
        });
    };
    DashboardComponent.prototype.isForigenOpen = function (data, ind, type) {
        if (type == 'modal') {
            this.isCountry = true;
            this.professionViewModel.isForeignCountry = true;
        }
        else {
            this.isCountry = true;
            this.professionModel[ind].isForeignCountry = true;
        }
    };
    DashboardComponent.prototype.isForigenClose = function (data, ind, type) {
        if (type == 'modal') {
            this.isCountry = false;
            this.professionViewModel.isForeignCountry = false;
        }
        else {
            this.isCountry = false;
            this.professionModel[ind].isForeignCountry = false;
        }
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
            _this.tMandal = data;
            for (var i = 0; i < _this.allMandalList.length; i++) {
                _this.allMandalList[i].index = i + 1;
            }
        });
    };
    DashboardComponent.prototype.searchManadalList = function (val) {
        if (this.search == '') {
            this.allMandalList = this.tMandal;
        }
        else {
            this.transformMandal(this.tMandal, val);
        }
    };
    DashboardComponent.prototype.transformMandal = function (allMandalList, searchValue) {
        var _this = this;
        this.allMandalList = [];
        allMandalList.forEach(function (element) {
            if (element.mandaltype.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.allMandalList.push(element);
            }
            else if (element.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                _this.allMandalList.push(element);
            }
        });
    };
    DashboardComponent.prototype.removeMandalList = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure?',
            text: "You want to delete! If you delete Offer then all the offer data will be delete.",
            icon: 'warning',
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            confirmButtonText: 'Yes',
            buttonsStyling: false
        }).then(function (result) {
            if (result.value == true) {
                _this.dashboardService.removeHaribhaktDetails(id).subscribe(function (req) {
                    _this.apiService.showNotification('top', 'right', 'Offer removed Successfully.', 'success');
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: 'Deleted!',
                    text: 'Your Offer has been deleted.',
                    icon: 'success',
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                    buttonsStyling: false
                });
                _this.getHaribhakt();
            }
        });
    };
    DashboardComponent.prototype.closeModal = function (index) {
        this.professionModel.splice(index, 1);
    };
    DashboardComponent.prototype.confirmationForHead = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you a head of the family?',
            // text: "You want to delete! If you delete Offer then all the offer data will be delete.",
            icon: 'warning',
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            buttonsStyling: false
        }).then(function (result) {
            if (result.value == true) {
                _this.professionModel[0].contactNo = _this.mainMob;
            }
            else {
                _this.professionModel[1].contactNo = _this.mainMob;
            }
        });
    };
    DashboardComponent.prototype.selectedMandalType = function (mandaltype, ind, type) {
        var _this = this;
        if (type == 'array') {
            this.mandalTypeList.forEach(function (element) {
                if (element.mandaltype == mandaltype) {
                    _this.selectedName = element.mandaltype;
                    _this.professionModel[ind].mandalType = element.mandaltype;
                    _this.getmandal(element.mandaltype);
                }
                // this.MandalModel.mandaltype = this.selectedName;
            });
        }
        else {
            this.mandalTypeList.forEach(function (element) {
                if (element.mandaltype == mandaltype) {
                    _this.selectedName = element.mandaltype;
                    _this.professionViewModel.mandalType = element.mandaltype;
                    _this.getmandal(element.mandaltype);
                }
                // this.MandalModel.mandaltype = this.selectedName;
            });
        }
    };
    DashboardComponent.prototype.selectedrelation = function (id, ind, type) {
        var _this = this;
        if (type == 'modal') {
            this.relationList.forEach(function (element) {
                if (element.id == id) {
                    _this.selectedRelation = element.name;
                    _this.professionViewModel.relationship = element.name;
                }
            });
        }
        else {
            this.relationList.forEach(function (element) {
                if (element.id == id) {
                    _this.selectedRelation = element.name;
                    _this.professionModel[ind].relationship = element.name;
                }
            });
        }
    };
    DashboardComponent.prototype.AddExistUser = function () {
        var _this = this;
        //  this.professionModel.length=0;
        //  this.professionModel = this.duplicateFamily;
        if (this.familyId == this.duplicateUser.familyId) {
            // this.getOldDetails(this.mainMob);
            $(document).ready(function () {
                $("#DuplicateNoModalCenter").modal('show');
            });
        }
        else {
            var data = {
                familyId: this.familyId,
                oldFamilyId: this.duplicateUser.familyId,
            };
            this.dashboardService.addFamilytoNew(data).subscribe(function (res) {
                debugger;
                if (res.length > 0) {
                    _this.familyId = res[0].familyId;
                    var data_1 = { mob: _this.mainMob };
                    _this.getOldDetails(data_1);
                }
            });
        }
    };
    DashboardComponent.prototype.selectedprofession = function (name, index, type) {
        if (type == 'modal') {
            this.professionViewModel.profession = name;
        }
        else {
            this.professionModel[index].profession = name;
        }
    };
    DashboardComponent.prototype.openProffesionalForm = function () {
        var _this = this;
        // this.professionModel = this.strpArray;
        this.professionModel = [];
        this.strpArray.forEach(function (ele) {
            if (ele.status == 1) {
                _this.professionModel.push(ele);
            }
        });
    };
    DashboardComponent.prototype.getSavedMembers = function () {
        var _this = this;
        this.dashboardService.getSavedMembersList().subscribe(function (data) {
            _this.addedMembers = data;
        });
    };
    DashboardComponent.prototype.selectedmandal = function (id, ind, type) {
        var _this = this;
        if (type == 'modal') {
            this.mandalList.forEach(function (element) {
                if (element.id == id) {
                    _this.selectedMandal = element.name;
                    _this.professionViewModel.mandalName = element.name;
                    _this.professionViewModel.mandalId = element.id;
                }
            });
        }
        else {
            this.mandalList.forEach(function (element) {
                if (element.id == id) {
                    _this.selectedMandal = element.name;
                    _this.professionModel[ind].mandalName = element.name;
                    _this.professionModel[ind].mandalId = element.id;
                }
            });
        }
    };
    DashboardComponent.prototype.AddMoreMember = function () {
        for (var i = 0; i < this.tot_mem; i++) {
            var data = {
                contactNo: 0,
                firstName: '',
                middleName: '',
                lastName: '',
                mandalName: '',
                mandaltype: '',
                relationship: 'Self',
                address: '',
                city: '',
                area: '',
                education: '',
                profession: '',
                occupation: '',
                businessType: '',
                skill: '',
                workInfo: '',
                email: '',
                bloodGrp: '',
                dob: '',
                gender: '',
                maritalStatus: '',
                foreignCountry: '',
                foreignCity: '',
                foreignContact: '',
                general: false,
                medium: false,
                vip: false,
                mvip: false,
                politician: false,
                company: '',
                native: '',
                businesscity: ''
            };
            this.isOpenForm = true;
            this.professionModel.push(data);
            if (this.professionModelList.length == 0) {
                this.confirmationForHead();
            }
        }
        // this.professionModel.length = this.tot_mem;
    };
    DashboardComponent.prototype.selectChangeHandlerForMarital = function (name, index, type) {
        if (type == 'modal') {
            this.professionViewModel.maritalStatus = name;
        }
        else {
            this.professionModel[index].maritalStatus = name;
        }
    };
    DashboardComponent.prototype.selectedBloodData = function (name, index, type) {
        if (type == 'modal') {
            this.professionViewModel.bloodGrp = name;
        }
        else {
            this.professionModel[index].bloodGrp = name;
        }
    };
    DashboardComponent.prototype.selectedHaribhaktTags = function (name, index, type) {
        if (type == 'modal') {
            this.professionViewModel.tag = name;
        }
        else {
            this.professionModel[index].tag = name;
        }
    };
    DashboardComponent.prototype.savePersonalInfo = function (data, ind) {
        var _this = this;
        var test = [];
        data.status = 1;
        data.tag = 'General';
        data.prepareIelts = false;
        if (data.relationship == 'Father') {
            var obj = {
                nooffammem: this.tot_mem,
                mob: data.contactNo
            };
            this.dashboardService.createFamily(obj).subscribe(function (res) {
                if (res.length == undefined) {
                    _this.familyId = res.insertId;
                    data.familyId = _this.familyId;
                }
                else {
                    _this.familyId = res[0].familyId;
                    data.familyId = _this.familyId;
                }
                test.push(data);
                _this.dashboardService.savePersonalInfo(test).subscribe(function (res) {
                    if (res.insertId != undefined) {
                        data.userId = res.insertId;
                        _this.professionModelList.push(data);
                        _this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
                        _this.professionModel.splice(ind, 1);
                        _this.tot_mem = _this.tot_mem - 1;
                    }
                    else if (res[0].msg == 'added') {
                        data.userId = res[0].userId;
                        _this.professionModelList.push(data);
                        _this.professionModel.splice(ind, 1);
                        _this.tot_mem = _this.tot_mem - 1;
                        _this.apiService.showNotification('top', 'right', 'Member already Added.', 'success');
                    }
                    else {
                        _this.apiService.showNotification('top', 'right', 'Error in Adding Member.', 'danger');
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
                if (res.length == undefined) {
                    _this.familyId = res.insertId;
                    data.familyId = _this.familyId;
                }
                else {
                    _this.familyId = res[0].familyId;
                    data.familyId = _this.familyId;
                }
                test.push(data);
                _this.dashboardService.savePersonalInfo(test).subscribe(function (res) {
                    if (res.insertId != undefined) {
                        data.userId = res.insertId;
                        _this.professionModelList.push(data);
                        _this.tot_mem = _this.tot_mem - 1;
                        _this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
                        _this.professionModel.splice(ind, 1);
                    }
                    else if (res[0].msg == 'added') {
                        data.userId = res[0].userId;
                        _this.professionModelList.push(data);
                        _this.professionModel.splice(ind, 1);
                        _this.tot_mem = _this.tot_mem - 1;
                        _this.apiService.showNotification('top', 'right', 'Member already Added.', 'success');
                    }
                    else {
                        _this.apiService.showNotification('top', 'right', 'Error in Adding Member.', 'danger');
                    }
                });
            });
        }
        else {
            if (this.familyId == undefined) {
                var obj = {
                    nooffammem: this.tot_mem,
                    mob: data.contactNo
                };
                this.dashboardService.createFamily(obj).subscribe(function (res) {
                    if (res.length == undefined) {
                        _this.familyId = res.insertId;
                        data.familyId = _this.familyId;
                    }
                    else {
                        _this.familyId = res[0].familyId;
                        data.familyId = _this.familyId;
                    }
                    test.push(data);
                    _this.dashboardService.savePersonalInfo(test).subscribe(function (res) {
                        if (res.insertId != undefined) {
                            data.userId = res.insertId;
                            _this.professionModelList.push(data);
                            _this.tot_mem = _this.tot_mem - 1;
                            _this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
                            _this.professionModel.splice(ind, 1);
                        }
                        else if (res[0].msg == 'added') {
                            data.userId = res[0].userId;
                            _this.professionModelList.push(data);
                            _this.professionModel.splice(ind, 1);
                            _this.tot_mem = _this.tot_mem - 1;
                            _this.apiService.showNotification('top', 'right', 'Member already Added.', 'success');
                        }
                        else {
                            _this.apiService.showNotification('top', 'right', 'Error in Adding Member.', 'danger');
                        }
                    });
                });
            }
            else {
                data.familyId = this.familyId;
                test.push(data);
                this.dashboardService.savePersonalInfo(test).subscribe(function (res) {
                    if (res.insertId != undefined) {
                        data.userId = res.insertId;
                        _this.professionModelList.push(data);
                        _this.professionModel.splice(ind, 1);
                        _this.tot_mem = _this.tot_mem - 1;
                        _this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
                    }
                    else if (res[0].msg == 'added') {
                        data.userId = res[0].userId;
                        _this.professionModelList.push(data);
                        _this.professionModel.splice(ind, 1);
                        _this.tot_mem = _this.tot_mem - 1;
                        _this.apiService.showNotification('top', 'right', 'Member already Added.', 'success');
                    }
                    else {
                        _this.apiService.showNotification('top', 'right', 'Error in Adding Member.', 'danger');
                    }
                });
            }
        }
    };
    DashboardComponent.prototype.verifyNumber = function (data) {
        var _this = this;
        var val = { mob: this.professionModel[data].contactNo };
        debugger;
        this.dashboardService.verifyNumber(val).subscribe(function (res) {
            debugger;
            if (res.length > 0) {
                _this.duplicateUser = res[0];
                _this.duplicateFamily = res;
                _this.duplicateUser.index = data;
                $(document).ready(function () {
                    $("#DuplicateNoModalCenter1").modal('show');
                });
            }
        });
    };
    DashboardComponent.prototype.openOTPforAddUser = function () {
        $(document).ready(function () {
            $("#DuplicateNoModalCenter").modal('show');
        });
    };
    DashboardComponent.prototype.openViewInfo = function (data) {
        this.professionViewModel = data;
        $(document).ready(function () {
            $("#editCustomerModal").modal('show');
        });
    };
    DashboardComponent.prototype.updateHaribhaktInfo = function (data) {
        if (this.professionViewModel.general == true) {
            this.professionViewModel.medium = false;
            this.professionViewModel.vip = false;
            this.professionViewModel.mvip = false;
            this.professionViewModel.politician = false;
        }
        else if (this.professionViewModel.medium == true) {
            this.professionViewModel.general = false;
            this.professionViewModel.vip = false;
            this.professionViewModel.mvip = false;
            this.professionViewModel.politician = false;
        }
        else if (this.professionViewModel.vip == true) {
            this.professionViewModel.general = false;
            this.professionViewModel.medium = false;
            this.professionViewModel.mvip = false;
            this.professionViewModel.politician = false;
        }
        else if (this.professionViewModel.mvip == true) {
            this.professionViewModel.general = false;
            this.professionViewModel.medium = false;
            this.professionViewModel.vip = false;
            this.professionViewModel.politician = false;
        }
        else if (this.professionViewModel.politician == true) {
            this.professionViewModel.general = false;
            this.professionViewModel.medium = false;
            this.professionViewModel.vip = false;
            this.professionViewModel.mvip = false;
        }
        this.dashboardService.updateHaribhakt(data).subscribe(function (res) {
        });
    };
    DashboardComponent.prototype.openTotalFamilies = function () {
        this.openFamiliesFlag = true;
        this.openHaribhaktFlag = false;
        this.openMandalFlag = false;
        this.openRedtickFlag = false;
        this.openYellowtickFlag = false;
    };
    DashboardComponent.prototype.openTotalHaribhakt = function () {
        this.openFamiliesFlag = false;
        this.openHaribhaktFlag = true;
        this.openMandalFlag = false;
        this.openRedtickFlag = false;
    };
    DashboardComponent.prototype.openTotalMandal = function () {
        this.openMandalFlag = true;
        this.openFamiliesFlag = false;
        this.openHaribhaktFlag = false;
        this.openRedtickFlag = false;
        this.openYellowtickFlag = false;
        this.openGreentickFlag = false;
    };
    DashboardComponent.prototype.opentotalRedtick = function () {
        this.openYellowtickFlag = false;
        this.openRedtickFlag = true;
        this.openMandalFlag = false;
        this.openFamiliesFlag = false;
        this.openHaribhaktFlag = false;
        this.openGreentickFlag = false;
        this.getRedTickListForAll();
    };
    DashboardComponent.prototype.openTotalYellowTick = function () {
        this.openYellowtickFlag = true;
        this.openRedtickFlag = false;
        this.openMandalFlag = false;
        this.openFamiliesFlag = false;
        this.openHaribhaktFlag = false;
        this.openGreentickFlag = false;
    };
    DashboardComponent.prototype.openTotalGreenTick = function () {
        this.openGreentickFlag = true;
        this.openYellowtickFlag = false;
        this.openRedtickFlag = false;
        this.openMandalFlag = false;
        this.openFamiliesFlag = false;
        this.openHaribhaktFlag = false;
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
/* harmony import */ var app_mandal_mandal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/mandal/mandal.module */ "VJFv");
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                app_mandal_mandal_module__WEBPACK_IMPORTED_MODULE_8__["MandalModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');\r\n.status {\r\n    margin-top: .75%;\r\n}\r\n.loopforms {\r\n    margin-top: 30px;\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n}\r\n#myForm {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    border: 4px solid rgba(13, 207, 6, 0.501);\r\n    vertical-align: middle;\r\n    line-height: 3.5;\r\n    margin-bottom: 15px;\r\n    border-radius: 8px;\r\n}\r\n#myForm1 {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    border: 4px solid #fbc658;\r\n    vertical-align: middle;\r\n    line-height: 3.5;\r\n    margin-bottom: 15px;\r\n    border-radius: 8px;\r\n}\r\n#myForm2 {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    border: 4px solid rgba(246, 12, 12, 0.852);\r\n    vertical-align: middle;\r\n    line-height: 3.5;\r\n    border-radius: 8px;\r\n}\r\n#dropdown{\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    opacity: 0.7;\r\n}\r\n.row{\r\n    margin-top: 10px;\r\n}\r\n#birthday{\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    font-size: 14px;\r\n    padding: 10px;\r\n    opacity: 0.7;\r\n}\r\n#satsang{\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n    font-size: 20px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n#detailForm{\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    opacity: 0.7;\r\n    margin-top: 10px;\r\n    margin-bottom: 25px;\r\n}\r\n.ml5{\r\n    margin-left: 10px !important;\r\n}\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n.switch input { \r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\ninput:focus + .slider {\r\n  -webkit-box-shadow: 0 0 1px #2196F3;\r\n          box-shadow: 0 0 1px #2196F3;\r\n}\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n.checked {\r\n  color: gold;\r\n}\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n/* Firefox */\r\ninput[type=number] {\r\n  -moz-appearance: textfield;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjtBQUNwRjtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDRDQUE0QztBQUNoRDtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkI7QUFDN0I7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDtBQUVBLFlBQVk7QUFDWjtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11bGlzaDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuLnN0YXR1cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAuNzUlO1xyXG59XHJcblxyXG4ubG9vcGZvcm1zIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuI215Rm9ybSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgxMywgMjA3LCA2LCAwLjUwMSk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbiNteUZvcm0xIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmJjNjU4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4jbXlGb3JtMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNDYsIDEyLCAxMiwgMC44NTIpO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbiNkcm9wZG93bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4jYmlydGhkYXl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuI3NhdHNhbmd7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG4jZGV0YWlsRm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5tbDV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7IFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjZweDtcclxuICB3aWR0aDogMjZweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5jaGVja2VkIHtcclxuICBjb2xvcjogZ29sZDtcclxufVxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map