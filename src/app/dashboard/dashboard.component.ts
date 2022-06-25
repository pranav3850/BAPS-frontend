import { Component, OnInit, ViewChild } from '@angular/core';
import { Dashboard } from './dashboard.model';
import {Mandal} from './mandal.model'
import {Relation} from './relation.model'

import { DashboardService } from './dashboard.service';
import { ApiService } from 'app/api.service';
import { Profession } from './profession.model';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardModelarr :Dashboard[] = [];
  public professionModel : Profession[] = [];
  public dashboardModel: Dashboard = new Dashboard;
  public mandalModel:Mandal[] = [];
  public relationModel:Relation[] = [];
  public memberlist;
  tot_mem :number= 1; 

  public ngOnInit() {
    $(document).ready(function(){
      $("#exampleModalCenter").modal('show');
  });
    this.getrelation();
    this.dashboardModel.contact = 9574315756
    this.getMandalType();
  }  
  Role: any;
  relationList;
  mandalList;
  mandalTypeList;
  addedMembers;
 public  strpArray:any=[];
  basicInfo:any=[];
  selectedMandalType = 'Select Mandal Type';
  selectedRelation = 'Self';
  selectedMandal = 'Select Mandal';
  totalFamily:number=0;
  totalHaribhakt:number=0;
  totalRedTick:number=0;
  totalYelloTick:number=0;
  totalGreenTick:number=0;
  constructor(
    private dashboardService: DashboardService,
    private apiService:ApiService
   ) {
    this.Role='Admin';
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
   this.dashboardService.getAllMandalList(type).subscribe((data: any) =>{  
     this.mandalList = data;
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
        this.dashboardModelarr[ind].relation = element.name;
      }
    })
  }

  saveDraft(data,ind){
    let test=[];
    test.push(data);
     // //  this.dashboardModel.index = 
     this.dashboardService.saveData(test).subscribe((res) =>{
      debugger
      if(res == 'Contactno is not unique'){
        this.apiService.showNotification('top', 'right', 'Contact Number is not Unique.', 'danger');
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
  openProffesionalForm(){
   this.professionModel=this.strpArray;
   this.professionModel
    debugger
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
        this.dashboardModelarr[ind].mandalname = element.name;
        this.dashboardModelarr[ind].mandalid = element.id;
      }
    })
  }

  AddMoreMember(){
    for(let i=0;i<this.tot_mem;i++){
      let data:any={
        mandalname: this.selectedMandal,
        mandaltype: this.selectedMandalType,
        relation : this.selectedRelation,
         contact:'',
         fname:'',
         mname :'',
         lname :''  
      }
      this.dashboardModelarr.push(data);
    }
    
    // //  this.dashboardModel.index = 
    //  this.dashboardService.saveData(this.dashboardModel).subscribe((res) =>{
    //   if(res == 'success'){
    //     this.apiService.showNotification('top', 'right', 'Member Added Successfully.', 'success');
    //   }
    //  })
  }
}
