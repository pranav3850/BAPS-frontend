import { Component, OnInit, ViewChild } from '@angular/core';
import { Dashboard } from './dashboard.model';
import { Mandal } from './mandal.model'
import { Relation } from './relation.model'

import { DashboardService } from './dashboard.service';
import { ApiService } from 'app/api.service';
import { Profession } from './profession.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardModelarr: Dashboard[] = [];
  public professionModel: Profession[] = [];
  public professionViewModel: Profession = new Profession;
  public dashboardModel: Dashboard = new Dashboard;
  public mandalModel: Mandal[] = [];
  public relationModel: Relation[] = [];
  public memberlist;
  tot_mem: number = 1;

  Role: any;
  relationList;
  mandalList: any = [];
  mandalTypeList;
  addedMembers;
  public strpArray: any = [];
  basicInfo: any = [];
  selectedMandalType = 'Select Mandal Type';
  selectedRelation = 'Self';
  selectedMandal = 'Select Mandal';
  totalFamily: any = [];
  viewMembers: any = [];
  tFamily: any = [];
  totalHaribhakt: any = [];
  tHaribhakt: any = [];
  tMandal: any = [];
  tYellow: any = [];
  totalRedTick: any = [];
  tRedList: any = [];
  tGreen:any=[];
  totalYelloTick: any = [];
  totalGreenTick: any = [];
  search: string = '';
  haribhakt: any = [];
  mainMob: any;
  duplicateUser: any = {}
  otp: any;
  professionList: any = [];
  allMandalList: any = [];
  familyId: number;
  redId: any;
  oldUser: boolean = false;


  openFamiliesFlag: boolean = false;
  openHaribhaktFlag: boolean = false;
  openMandalFlag: boolean = false;
  openRedtickFlag: boolean = false;
  openYellowtickFlag: boolean = false;
  openGreentickFlag: boolean = false;
  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private avctivatedroute: ActivatedRoute
  ) {
    this.Role = localStorage.getItem('role');
    this.avctivatedroute.queryParams.subscribe((res: any) => {
      this.mainMob = res.mob;
      let obj = {
        mob: this.mainMob
      }
      this.getOldDetails(obj);


    })
    this.tot_mem = 0;
    this.professionList = [
      { name: 'Job' },
      { name: 'Business' },
      { name: 'Housewife' },
      { name: 'Student' },
      { name: 'Other' }
    ]

  }

  public ngOnInit() {

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

  }
  getOldDetails(data) {
    this.dashboardService.getOldDetails(data).subscribe((res: any) => {
      if (res != 'no family') {
        this.familyId = res[0].familyId;
        this.strpArray = res;
        this.strpArray.forEach(element => {
          if (element.status == 1) {
            element.city = '';
            this.professionModel.push(element);
          }
        });
        this.oldUser = true;
      } else {
        this.newUser()
      }
    })
  }
  newUser() {
    $(document).ready(function () {
      $("#exampleModalCenter").modal('show');
    });
  }
  openEdit(data) {
    if (data.status == 1) {
      this.dashboardModelarr.push(data);
    } else if (data.status == 2) {
      this.professionModel.push(data)
    } else {

    }
  }
  removeItem(i) {
    this.dashboardModelarr.splice(i, 1);
    this.tot_mem = this.dashboardModelarr.length;
  }
  getAllFamily() {
    this.dashboardService.getAllFamilyList().subscribe((res: any) => {
      this.totalFamily = res;
      this.tFamily = res;
      for (let i = 0; i < this.totalFamily.length; i++) {
        this.totalFamily[i].index = i + 1;
      }

    })
  }
  viewFamilyMembersDetails(id) {
    this.viewMembers = [];
    this.totalHaribhakt.forEach(element => {
      if (element.familyId == id) {
        this.viewMembers.push(element);
      }
      for (let i = 0; i < this.viewMembers.length; i++) {
        this.viewMembers[i].index = i + 1;
      }
    });
  }
  searchFamiliesList(val) {
    if (this.search == '') {
      this.totalFamily = this.tFamily;
    } else {
      this.transform(this.tFamily, val);
    }
  }
  transform(totalFamily: any[], searchValue: string) {
    this.totalFamily = [];
    totalFamily.forEach(element => {
      if (element.mobNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalFamily.push(element);
      }
      else if (element.fname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalFamily.push(element);
      }
      else if (element.lname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalFamily.push(element);
      }
    })
  }
  getHaribhakt() {
    this.dashboardService.getAllHaribhakt().subscribe((res: any) => {
      this.totalHaribhakt = res;
      this.tHaribhakt = res;
      for (let i = 0; i < this.totalHaribhakt.length; i++) {
        this.totalHaribhakt[i].index = i + 1;
      }
    });
  }
  searchHaribhaktList(val) {
    if (this.search == '') {
      this.totalHaribhakt = this.tHaribhakt;
    } else {
      this.transformHaribhakt(this.tHaribhakt, val);
    }
  }
  transformHaribhakt(totalHaribhakt: any[], searchValue: string) {
    this.totalHaribhakt = [];
    totalHaribhakt.forEach(element => {
      if (element.contactNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalHaribhakt.push(element);
      }
      else if (element.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalHaribhakt.push(element);
      }
      else if (element.mandalName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalHaribhakt.push(element);
      }
      else if (element.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalHaribhakt.push(element);
      }
    })
  }
  removeHaribhaktList(id) {
    Swal.fire({
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
    }).then((result) => {
      if (result.value == true) {
        this.dashboardService.removeHaribhaktDetails(id).subscribe((req) => {
          this.apiService.showNotification('top', 'right', 'Offer removed Successfully.', 'success');

        })
        Swal.fire(
          {
            title: 'Deleted!',
            text: 'Your Offer has been deleted.',
            icon: 'success',
            customClass: {
              confirmButton: "btn btn-success",
            },
            buttonsStyling: false
          }
        )
        this.getHaribhakt();
      }
    })

  }



  getRedTickCount() {
    this.dashboardService.getRedtickCount().subscribe((res: any) => {
      this.totalRedTick = res;
    })
  }
  getRedTickListForAll() {

    this.dashboardService.getRedtickCount().subscribe((data: any) => {
      this.tRedList = data;
      for (let i = 0; i < this.tRedList.length; i++) {
        this.tRedList[i].index = i + 1;
      }
    });
  }
  getYellowTickCount() {
    this.dashboardService.getYellowtickCount().subscribe((res: any) => {
      this.totalYelloTick = res;
      this.tYellow=res;
      for (let i = 0; i < this.totalYelloTick.length; i++) {
        this.totalYelloTick[i].index = i + 1;
      }
    })
  }
  searchYellowList(val) {
    if (this.search == '') {
      this.totalYelloTick = this.tYellow;
    } else {
      this.transformYellow(this.tYellow, val);
    }
  }
  transformYellow(totalYelloTick: any[], searchValue: string) {
    this.totalYelloTick = [];
    totalYelloTick.forEach(element => {
      if (element.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalYelloTick.push(element);
      }
      else if (element.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalYelloTick.push(element);
      }
      else if (element.mandalName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalYelloTick.push(element);
      }
      else if (element.relationship.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalYelloTick.push(element);
      }
      else if (element.contactNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalYelloTick.push(element);
      }
    })
  }
  getGreenTickCount() {
    this.dashboardService.getGreentickCount().subscribe((res: any) => {
      this.totalGreenTick = res;
      this.tGreen=res;
      for (let i = 0; i < this.totalGreenTick.length; i++) {
        this.totalGreenTick[i].index = i + 1;
      }
    })
  }
  
  searchGreenList(val) {
    if (this.search == '') {
      this.totalGreenTick = this.tGreen;
    } else {
      this.transformGreen(this.tGreen, val);
    }
  }
  transformGreen(totalGreenTick: any[], searchValue: string) {
    this.totalGreenTick = [];
    totalGreenTick.forEach(element => {
      if (element.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalGreenTick.push(element);
      }
      else if (element.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalGreenTick.push(element);
      }
      else if (element.mandalName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalGreenTick.push(element);
      }
      else if (element.relationship.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalGreenTick.push(element);
      }
      else if (element.contactNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.totalGreenTick.push(element);
      }
    })
  }
  getrelation() {
    this.dashboardService.getAllRelationList().subscribe((data: any) => {
      this.relationList = data;
    });
  }
  getMandalType() {
    this.dashboardService.getAllMandaltypeList().subscribe((data: any) => {
      this.mandalTypeList = data;
    });
  }
  getmandal(type) {
    this.mandalList = [];
    this.dashboardService.getMandalList(type).subscribe((data: any) => {
      this.mandalList = data;
    });
  }
  getAllmandal() {
    this.mandalList = [];
    this.dashboardService.getAllMandalList().subscribe((data: any) => {
      this.allMandalList = data;
      this.tMandal = data;
      for (let i = 0; i < this.allMandalList.length; i++) {
        this.allMandalList[i].index = i + 1;
      }
    });
  }
  searchManadalList(val) {
    if (this.search == '') {
      this.allMandalList = this.tMandal;
    } else {
      this.transformMandal(this.tMandal, val);
    }
  }
  transformMandal(allMandalList: any[], searchValue: string) {
    this.allMandalList = [];
    allMandalList.forEach(element => {
      if (element.mandaltype.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.allMandalList.push(element);
      }
      else if (element.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        this.allMandalList.push(element);
      }
    })
  }
  removeMandalList(id) {
    Swal.fire({
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
    }).then((result) => {
      if (result.value == true) {
        this.dashboardService.removeHaribhaktDetails(id).subscribe((req) => {
          this.apiService.showNotification('top', 'right', 'Offer removed Successfully.', 'success');

        })
        Swal.fire(
          {
            title: 'Deleted!',
            text: 'Your Offer has been deleted.',
            icon: 'success',
            customClass: {
              confirmButton: "btn btn-success",
            },
            buttonsStyling: false
          }
        )
        this.getHaribhakt();
      }
    })

  }

  selectedmandaltype(type, ind) {
    this.mandalTypeList.forEach(element => {
      if (element.mandaltype == type) {
        this.dashboardModelarr[ind].mandaltype = element.mandaltype;
        this.getmandal(element.mandaltype);
      }
    })

  }

  selectedrelation(id, ind) {
    this.relationList.forEach(element => {
      if (element.id == id) {
        this.selectedRelation = element.name;
        this.dashboardModelarr[ind].relationship = element.name;
      }
    })
  }

  saveDraft(data, ind) {
    let test = [];

    if (data.relationship == 'Father') {
      let obj = {
        nooffammem: this.tot_mem,
        mob: data.contactNo
      }
      this.dashboardService.createFamily(obj).subscribe((res: any) => {
        this.familyId = res.insertId;
        data.familyId = this.familyId;
        test.push(data);
        this.dashboardService.saveData(test).subscribe((res) => {
          if (res[0].isDuplicate) {
            this.duplicateUser = res[0];
            this.duplicateUser.index = ind;
            $(document).ready(function () {
              $("#DuplicateNoModalCenter").modal('show');
            });
          }
          else if (res.length > 0) {
            data.status = res[0].status;
            data.userId = res[0].id;
            this.strpArray.push(data);
            this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
            this.dashboardModelarr.splice(ind, 1);
            this.openProffesionalForm();
          }
        })
      })
    } else if (data.relationship == 'Self' && this.familyId == undefined) {
      let obj = {
        nooffammem: this.tot_mem,
        mob: data.contactNo
      }
      this.dashboardService.createFamily(obj).subscribe((res: any) => {
        this.familyId = res.insertId;
        data.familyId = this.familyId;
        test.push(data);
        this.dashboardService.saveData(test).subscribe((res) => {
          if (res[0].isDuplicate) {
            this.duplicateUser = res[0];
            this.duplicateUser.index = ind;
            $(document).ready(function () {
              $("#DuplicateNoModalCenter").modal('show');
            });
          }
          else if (res.length > 0) {
            data.status = res[0].status;
            data.userId = res[0].id;
            this.strpArray.push(data);
            this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
            this.dashboardModelarr.splice(ind, 1);
            this.openProffesionalForm();
          }
        })
      })
    }
    else {
      data.familyId = this.familyId;
      test.push(data);
      this.dashboardService.saveData(test).subscribe((res) => {
        if (res[0].isDuplicate) {
          this.duplicateUser = res[0];
          this.duplicateUser.index = ind;
          $(document).ready(function () {
            $("#DuplicateNoModalCenter").modal('show');
          });
        }
        else if (res.length > 0) {
          data.status = res[0].status;
          data.userId = res[0].id;
          this.strpArray.push(data);
          this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
          this.dashboardModelarr.splice(ind, 1);
          this.openProffesionalForm();
        }
      })
    }

  }
  AddExistUser() {
    this.strpArray.push(this.duplicateUser);
    this.dashboardModelarr.splice(this.duplicateUser.index, 1);
    this.openProffesionalForm();
  }
  selectedprofession(name, index) {
    this.professionModel[index].profession = name;
  }
  openProffesionalForm() {
    // this.professionModel = this.strpArray;
    this.professionModel = [];
    this.strpArray.forEach((ele: any) => {
      if (ele.status == 1) {
        this.professionModel.push(ele);
      }
    })

  }
  getSavedMembers() {
    this.dashboardService.getSavedMembersList().subscribe((data: any) => {
      this.addedMembers = data;
    })
  }



  selectedmandal(id, ind) {
    this.mandalList.forEach(element => {
      if (element.id == id) {
        this.selectedMandal = element.name;
        this.dashboardModelarr[ind].mandalName = element.name;
        this.dashboardModelarr[ind].mandalId = element.id;
      }
    })
  }

  AddMoreMember() {
    this.professionModel = [];
    this.professionModel.length = this.tot_mem;
  }
  saveProffesionInfo(data, ind) {
    let test = [];
    test.push(data);
    this.dashboardService.saveProffesionInfo(test).subscribe((res) => {
      this.strpArray[ind].status = res[0].status;
      this.professionModel.splice(1, ind);
    })
  }

  openViewInfo(data) {
    if (data.status == 2) {
      this.dashboardService.getEditDataofSecondstage(data).subscribe((res: any) => {
        this.professionViewModel = res[0];
        debugger
        this.professionViewModel.status = 2;
        $(document).ready(function () {
          $("#addCustomerModal").modal('show');
        });
      })
    } else {
      this.professionViewModel = data;
      $(document).ready(function () {
        $("#addCustomerModal").modal('show');
      });
    }
  }
  updateHaribhaktInfo(data) {
    this.dashboardService.updateHaribhakt(data).subscribe((res: any) => {

    })
  }
  openTotalFamilies() {
    this.openFamiliesFlag = true;
    this.openHaribhaktFlag = false;
    this.openMandalFlag = false;
    this.openRedtickFlag = false;
    this.openYellowtickFlag = false;
  }
  openTotalHaribhakt() {
    this.openFamiliesFlag = false;
    this.openHaribhaktFlag = true;
    this.openMandalFlag = false;
    this.openRedtickFlag = false;
  }
  openTotalMandal() {
    this.openMandalFlag = true;
    this.openFamiliesFlag = false;
    this.openHaribhaktFlag = false;
    this.openRedtickFlag = false;
    this.openYellowtickFlag = false;
    this.openGreentickFlag = false;
  }
  opentotalRedtick() {
    this.openYellowtickFlag = false;
    this.openRedtickFlag = true;
    this.openMandalFlag = false;
    this.openFamiliesFlag = false;
    this.openHaribhaktFlag = false;
    this.openGreentickFlag = false;
    this.getRedTickListForAll();
  }
  openTotalYellowTick() {
    this.openYellowtickFlag = true;
    this.openRedtickFlag = false;
    this.openMandalFlag = false;
    this.openFamiliesFlag = false;
    this.openHaribhaktFlag = false;
    this.openGreentickFlag = false;

  }
  openTotalGreenTick(){
    this.openGreentickFlag = true;
    this.openYellowtickFlag = false;
    this.openRedtickFlag = false;
    this.openMandalFlag = false;
    this.openFamiliesFlag = false;
    this.openHaribhaktFlag = false;
  }
}
