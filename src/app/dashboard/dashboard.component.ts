import { Component, OnInit, ViewChild } from '@angular/core';
import { Dashboard } from './dashboard.model';
import {Mandal} from './mandal.model'
import {Relation} from './relation.model'

import { DashboardService } from './dashboard.service';
import { ApiService } from 'app/api.service';
import { Profession } from './profession.model';
import { ActivatedRoute } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardModelarr :Dashboard[] = [];
  public professionModel : Profession[] = [];
  public professionViewModel : Profession = new Profession;
  public dashboardModel: Dashboard = new Dashboard;
  public mandalModel:Mandal[] = [];
  public relationModel:Relation[] = [];
  public memberlist;
  tot_mem :number= 1; 

  Role: any;
  relationList;
  mandalList:any=[];
  mandalTypeList;
  addedMembers;
 public  strpArray:any=[];
  basicInfo:any=[];
  selectedMandalType = 'Select Mandal Type';
  selectedRelation = 'Self';
  selectedMandal = 'Select Mandal';
  totalFamily:any=[];
  totalHaribhakt:any=[];
  totalRedTick:any=[];
  totalYelloTick:any=[];
  totalGreenTick:any=[];
  haribhakt:any=[];
  mainMob:any;
  duplicateUser:any={}
  otp:any;
  professionList:any=[];
  allMandalList:any=[];
  familyId:number;
  oldUser:boolean=false;
  constructor(
    private dashboardService: DashboardService,
    private apiService:ApiService,
    private avctivatedroute:ActivatedRoute
   ) {
    this.Role=localStorage.getItem('role');
    this.avctivatedroute.queryParams.subscribe((res: any) => {
      this.mainMob = res.mob;
      let obj={
        mob:this.mainMob
      }
      this.getOldDetails(obj);
      debugger
      
    })
    this.tot_mem=0;
    this.professionList=[
      {name:'Job'},
      {name:'Business'},
      {name:'Housewife'},
      {name:'Student'},
      {name:'Other'}
    ]
    
   }
   
  public ngOnInit() {
    
    this.tot_mem=0;
    if(this.Role !=undefined ){
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
  getOldDetails(data){
    this.dashboardService.getOldDetails(data).subscribe((res:any)=>{
      if(res != 'no family'){
        this.strpArray=res;
        this.strpArray.forEach(element => {
          if(element.status==1){
            this.professionModel.push(element);
          }
        });
        this.oldUser = true;
      }else{
        this.newUser()
      }
    })
  }
  newUser(){
    $(document).ready(function(){
      $("#exampleModalCenter").modal('show');
    });
  }
  openEdit(data){
    if(data.status ==1){
      this.dashboardModelarr.push(data);
    }else if(data.status ==2){
      this.professionModel.push(data)
    }else{

    }
  }
  getAllFamily(){
    this.dashboardService.getAllFamilyList().subscribe((res:any)=>{
      this.totalFamily=res;
    })
  }
  getRedTickCount(){
    this.dashboardService.getRedtickCount().subscribe((res:any)=>{
      this.totalRedTick = res;
    })
  }
  getYellowTickCount(){
    this.dashboardService.getYellowtickCount().subscribe((res:any)=>{
      this.totalYelloTick = res;
    })
  }
  getGreenTickCount(){
    this.dashboardService.getGreentickCount().subscribe((res:any)=>{
      this.totalGreenTick = res;
    })
  }
 getrelation(){
    this.dashboardService.getAllRelationList().subscribe((data: any) =>{  
      this.relationList = data;
    });
  }
 getMandalType(){
  this.dashboardService.getAllMandaltypeList().subscribe((data: any) =>{  
    this.mandalTypeList = data;
  });
 }
 getmandal(type){
  this.mandalList=[];
   this.dashboardService.getMandalList(type).subscribe((data: any) =>{  
     this.mandalList = data;
   });
 }
 getAllmandal(){
  this.mandalList=[];
   this.dashboardService.getAllMandalList().subscribe((data: any) =>{  
     this.allMandalList = data;
   });
 }

 getHaribhakt(){
    this.dashboardService.getAllHaribhakt().subscribe((res:any)=>{
      this.totalHaribhakt = res;
    });
 }
 selectedmandaltype(type,ind) {
  this.mandalTypeList.forEach(element => {
    if (element.mandaltype == type) {
      this.dashboardModelarr[ind].mandaltype = element.mandaltype;
      this.getmandal(element.mandaltype);
    }
  })
 
}

  selectedrelation(id,ind) {
    this.relationList.forEach(element => {
      if (element.id == id) {
        this.selectedRelation = element.name;
        this.dashboardModelarr[ind].relationship = element.name;
      }
    })
  }

  saveDraft(data,ind){
    let test=[];
    
    if(data.relationship =='Father'){
      let obj={
        nooffammem:this.tot_mem,
        mob:data.contactNo
      }
      this.dashboardService.createFamily(obj).subscribe((res:any)=>{
        this.familyId = res.insertId;
        data.familyId = this.familyId;
        test.push(data);
        this.dashboardService.saveData(test).subscribe((res) =>{
          if(res[0].isDuplicate ){
            this.duplicateUser = res[0];
            this.duplicateUser.index = ind;
            $(document).ready(function(){
              $("#DuplicateNoModalCenter").modal('show');
            });
          }
          else if(res.length >0){
            data.status=res[0].status;
            data.userId=res[0].id;
            this.strpArray.push(data);
            this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
            this.dashboardModelarr.splice(ind,1);
            this.openProffesionalForm();
          }
         })
      })
    }else if(data.relationship =='Self' && this.familyId ==undefined){
      let obj={
        nooffammem:this.tot_mem,
        mob:data.contactNo
      }
      this.dashboardService.createFamily(obj).subscribe((res:any)=>{
        this.familyId = res.insertId;
        data.familyId = this.familyId;
        test.push(data);
        this.dashboardService.saveData(test).subscribe((res) =>{
          if(res[0].isDuplicate ){
            this.duplicateUser = res[0];
            this.duplicateUser.index = ind;
            $(document).ready(function(){
              $("#DuplicateNoModalCenter").modal('show');
            });
          }
          else if(res.length >0){
            data.status=res[0].status;
            data.userId=res[0].id;
            this.strpArray.push(data);
            this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
            this.dashboardModelarr.splice(ind,1);
            this.openProffesionalForm();
          }
         })
      })
    }
    else{
      data.familyId = this.familyId;
      test.push(data);
      this.dashboardService.saveData(test).subscribe((res) =>{
        if(res[0].isDuplicate ){
          this.duplicateUser = res[0];
          debugger
          this.duplicateUser.index = ind;
          $(document).ready(function(){
            $("#DuplicateNoModalCenter").modal('show');
          });
        }
        else if(res.length >0){
          data.status=res[0].status;
          data.userId=res[0].id;
          this.strpArray.push(data);
          this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
          this.dashboardModelarr.splice(ind,1);
          this.openProffesionalForm();
        }
       })
    }
    
  }
  AddExistUser(){
    this.strpArray.push(this.duplicateUser);
    this.dashboardModelarr.splice(this.duplicateUser.index,1);
    this.openProffesionalForm();
  }
  selectedprofession(name,index){
    this.professionModel[index].profession = name;
  }
  openProffesionalForm(){
   this.professionModel=this.strpArray;
  }
  getSavedMembers(){
    this.dashboardService.getSavedMembersList().subscribe((data:any) =>{
      this.addedMembers = data;
    })
  }
  
  

  selectedmandal(id,ind) {
    this.mandalList.forEach(element => {
      if (element.id == id) {
        this.selectedMandal = element.name;
        this.dashboardModelarr[ind].mandalName = element.name;
        this.dashboardModelarr[ind].mandalId = element.id;
      }
    })
  }

  AddMoreMember(){
    this.dashboardModelarr=[];
    for(let i=0;i<this.tot_mem;i++){
      let data:any={
        mandalName: this.selectedMandal,
        mandaltype: this.selectedMandalType,
        relationship : this.selectedRelation,
         contactNo:'',
         firstName:'',
         middleName :'',
         lastName :''  
      }
      this.dashboardModelarr.push(data);
      this.dashboardModelarr[0].contactNo = this.mainMob;
    }
  }
  saveProffesionInfo(data,ind){
    let test=[];
    test.push(data);
    this.dashboardService.saveProffesionInfo(test).subscribe((res) =>{
      this.strpArray[ind].status = res[0].status;
      this.professionModel.splice(1,ind);
     })
  }
  
  openViewInfo(data){
    debugger
    this.professionViewModel=data;
    if(data.status ==2){

    }
    debugger
    $(document).ready(function(){
      $("#addCustomerModal").modal('show');
    });
  }
}
