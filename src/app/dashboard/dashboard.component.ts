import { Component, OnInit } from '@angular/core';
import { Dashboard } from './dashboard.model';
import {Mandal} from './mandal.model'
import {Relation} from './relation.model'
import { DashboardService } from './dashboard.service';
declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardModelarr :Dashboard[] = [];
  public dashboardModel: Dashboard = new Dashboard;
  public mandalModel:Mandal[] = [];
  public relationModel:Relation[] = [];

  public tot_mem = 1; 
  public ngOnInit() {
    this.getrelation();
    this.getMandalType();
  }  
  Role: any;
  relationList;
  mandalList;
  mandalTypeList;
  selectedMandalType = 'Select Mandal Type';
  selectedRelation = 'Select Relation';
  selectedMandal = 'Select Mandal';
  totalFamily:number=0;
  totalHaribhakt:number=0;
  totalRedTick:number=0;
  totalYelloTick:number=0;
  totalGreenTick:number=0;
  constructor(
    private dashboardService: DashboardService,
   ) {
    this.Role='Admin';
   }
  familyinc(){
    this.tot_mem++
    this.dashboardModelarr.length = this.tot_mem
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

  selectedrelation(id) {
    this.relationList.forEach(element => {
      if (element.id == id) {
        this.selectedRelation = element.name;
      }
    })
  }

  selectedmandaltype(type) {
    this.mandalTypeList.forEach(element => {
      if (element.mandaltype == type) {
        this.selectedMandalType = element.mandaltype;
      }
    })
    this.getmandal(this.selectedMandalType);
  }
  getmandal(type){
    console.log(type)
    debugger
    this.dashboardService.getAllMandalList(type).subscribe((data: any) =>{  
      this.mandalList = data;
      console.log(this.mandalList)
    
    });
  }

  selectedmandal(id) {
    this.mandalList.forEach(element => {
      if (element.id == id) {
        this.selectedMandal = element.name;
      }
    })
  }
}
