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
  public duplicateUser:Profession = new Profession;
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
  // selectedMandalType = 'Select Mandal Type';
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
  tGreen: any = [];
  totalYelloTick: any = [];
  totalGreenTick: any = [];
  search: string = '';
  haribhakt: any = [];
  mainMob: any;
  
  otp: any;
  professionList: any = [];
  allMandalList: any = [];
  familyId: number;
  redId: any;
  oldUser: boolean = false;
  selectedName: any;
  formdate: Date = new Date();

  isCountry: boolean = false;
  openFamiliesFlag: boolean = false;
  openHaribhaktFlag: boolean = false;
  openMandalFlag: boolean = false;
  openRedtickFlag: boolean = false;
  openYellowtickFlag: boolean = false;
  openGreentickFlag: boolean = false;
  bloodGroupDataList: any = [];
  maratialData:any=[];
  isOpenForm:boolean=false;

  haribhaktTagsdata: any = [];
  updateHariDetail: any = [];

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
      this.formdate
      debugger


    })
    this.tot_mem = 0;
    this.professionList = [
      { name: 'Job' },
      { name: 'Business' },
      { name: 'Housewife' },
      { name: 'Student' },
      { name: 'Other' }
    ]
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
    ]
    this.maratialData = [
      { name: 'Single' },
      { name: 'Married' },
      { name: 'Unmarried' },
      { name: 'Divorced' },
      { name: 'Widowed' }
    ]
    this.haribhaktTagsdata = [
      { name: 'General' },
      { name: 'Medium' },
      { name: 'Vip' },
      { name: 'Mvip' },
      { name: 'Politician' }
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
        this.professionModel = res;
        this.isOpenForm=false;
        debugger

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
  viewEditHaribhakatDetails(data) {
    this.professionViewModel = data;
    this.professionViewModel.general = false;
    this.professionViewModel.medium = false;
    this.professionViewModel.vip = false;
    this.professionViewModel.mvip = false;
    this.professionViewModel.politician = false;

    const str = this.professionViewModel.dob;
    const date = new Date(str);
    this.formdate = date;
    debugger
    $(document).ready(function () {
      $("#editCustomerModal").modal('show');
    });
  }
  updateHarbhakatDetailsById() {
    let data=[];
    data.push(this.professionViewModel);
    this.dashboardService.updateProffesionInfo(data).subscribe((res) => {
      this.apiService.showNotification('top', 'right', 'Haribhakt Details Successfully Updated.', 'success');
      // this.strpArray[ind].status = res[0].status;
      // this.professionModel.splice(1, ind);
    })
    debugger

  }
  removeItem(i) {
    this.dashboardModelarr.splice(i, 1);
    // this.tot_mem = this.dashboardModelarr.length;
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
    this.totalHaribhakt.forEach((element, index) => {
      if (element.familyId == id) {
        element.index = index;
        this.viewMembers.push(element);
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
  setGeneralTagbyAdmin() {
    this.professionViewModel.general;
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
      text: "You want to delete! If you delete Registerd Member then member will be removed from family.",
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
        Swal.fire({
          title: 'Are you sure?',
          text: "You want to delete! If you delete Registerd Member then member will be removed from family.",
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
      this.tYellow = res;
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
      this.tGreen = res;
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
  isForigenOpen(data, ind,type?) {
    if(type=='modal'){
      this.isCountry = true;
      this.professionViewModel.isForeignCountry = true;
    }
    else{
      this.isCountry = true;
    this.professionModel[ind].isForeignCountry = true;
    }
    
  }
  isForigenClose(data, ind,type?) {
    if(type=='modal'){
      this.isCountry = false;
      this.professionViewModel.isForeignCountry = false;
    }
    else{
      this.isCountry = false;
    this.professionModel[ind].isForeignCountry = false;
    }
    

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



  selectedMandalType(mandaltype, ind, type?) {
    if (type == 'array') {
      this.mandalTypeList.forEach(element => {
        if (element.mandaltype == mandaltype) {
          this.selectedName = element.mandaltype;
          this.professionModel[ind].mandalType = element.mandaltype;
          this.getmandal(element.mandaltype);
        }
        // this.MandalModel.mandaltype = this.selectedName;
      })
    }
    else {
      this.mandalTypeList.forEach(element => {
        if (element.mandaltype == mandaltype) {
          this.selectedName = element.mandaltype;
          this.professionViewModel.mandalType = element.mandaltype;
          this.getmandal(element.mandaltype);
        }
        // this.MandalModel.mandaltype = this.selectedName;
      })
    }


  }

  selectedrelation(id, ind, type) {
    if (type == 'modal') {
      this.relationList.forEach(element => {
        if (element.id == id) {
          this.selectedRelation = element.name;
          this.professionViewModel.relationship = element.name;
        }
      })
    }
    else {
      this.relationList.forEach(element => {
        if (element.id == id) {
          this.selectedRelation = element.name;
          this.professionModel[ind].relationship = element.name;
        }
      })
    }
  }

 
  AddExistUser() {
    this.professionModel[this.duplicateUser.index]=this.duplicateUser;
  }
  selectedprofession(name, index, type?) {
    if (type == 'modal') {
      this.professionViewModel.profession = name;
    }
    else {
      this.professionModel[index].profession = name;
    }
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



  selectedmandal(id, ind, type?) {
    if (type == 'modal') {
      this.mandalList.forEach(element => {
        if (element.id == id) {
          this.selectedMandal = element.name;
          this.professionViewModel.mandalName = element.name;
          this.professionViewModel.mandalId = element.id;

        }
      })
    }
    else {
      this.mandalList.forEach(element => {
        if (element.id == id) {
          this.selectedMandal = element.name;
          this.professionModel[ind].mandalName = element.name;
          this.professionModel[ind].mandalId = element.id;

        }
      })
    }

  }

  AddMoreMember() {
    for (let i = 0; i < this.tot_mem; i++) {
      
      let data = {
        contactNo: 0,
        firstName: '',
        middleName: '',
        lastName: '',
        mandalName: '',
        mandaltype: '',
        relationship: '',
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
      }
      this.isOpenForm=true;
      this.professionModel.push(data);

    }
    // this.professionModel.length = this.tot_mem;
  }
  saveProffesionInfo(data, ind) {
    
    let test = [];
    test.push(data);
    this.dashboardService.saveProffesionInfo(test).subscribe((res) => {
      this.strpArray[ind].status = res[0].status;
      this.professionModel.splice(1, ind);
    })
  }
  selectChangeHandlerForMarital(name, index, type?) {
    if (type == 'modal') {
      this.professionViewModel.maritalStatus = name;
    }
    else {
      this.professionModel[index].maritalStatus = name;
    }
  }

  selectedBloodData(name, index, type?) {
    if (type == 'modal') {
      this.professionViewModel.bloodGrp = name;
    }
    else {
      this.professionModel[index].bloodGrp = name;
    }
  }
  selectedHaribhaktTags(name, index, type?) {
    if (type == 'modal') {
      this.professionViewModel.tag = name;
    }
    else {
      this.professionModel[index].tag = name;
    }
  }
  savePersonalInfo(data, ind) {
    let test = [];
    data.status = 1;
    data.tag = 'General';
    data.prepareIelts = false;

    if (data.relationship == 'Father') {
      let obj = {
        nooffammem: this.tot_mem,
        mob: data.contactNo
      }
      this.dashboardService.createFamily(obj).subscribe((res: any) => {
        this.familyId = res.insertId;
        data.familyId = this.familyId;
        test.push(data);
        this.dashboardService.savePersonalInfo(test).subscribe((res: any) => {
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
        this.dashboardService.savePersonalInfo(test).subscribe((res: any) => {
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
      this.dashboardService.savePersonalInfo(test).subscribe((res: any) => {
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
  verifyNumber(data) {
    debugger
    let val = { mob: this.professionModel[data].contactNo }
    this.dashboardService.verifyNumber(val).subscribe((res: any) => {
      this.duplicateUser = res[0];
      this.duplicateUser.index = data;
      $(document).ready(function () {
        $("#DuplicateNoModalCenter1").modal('show');
      });
    })
  }
  openOTPforAddUser(){
    $(document).ready(function () {
      $("#DuplicateNoModalCenter").modal('show');
    });
  }

  openViewInfo(data) {
  
      this.professionViewModel = data;
      $(document).ready(function () {
        $("#editCustomerModal").modal('show');
      });
    
  }
  updateHaribhaktInfo(data) {
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
  openTotalGreenTick() {
    this.openGreentickFlag = true;
    this.openYellowtickFlag = false;
    this.openRedtickFlag = false;
    this.openMandalFlag = false;
    this.openFamiliesFlag = false;
    this.openHaribhaktFlag = false;
  }
}
