import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { DashboardService } from 'app/dashboard/dashboard.service';
import { Mandal } from 'app/dashboard/mandal.model';
import { Relation } from 'app/dashboard/relation.model';
import { Profession } from './profession-information.model';
@Component({
  selector: 'app-profession-information',
  templateUrl: './profession-information.component.html',
  styleUrls: ['./profession-information.component.css']
})
export class ProfessionInformationComponent implements OnInit {
  // public professionModel: Profession = new Profession;
  //   data: any=[];
  //   public mandalModel:Mandal[] = [];
  //   public relationModel:Relation[] = [];
  //   relationList;
  //   mandalList;
  //   mandalTypeList;
  //   constructor(
  //     public dashboardComponent : DashboardComponent,
  //     public dashboardService:DashboardService
  //     ) { 
  //     this.professionModel = this.dashboardComponent.strpArray;
  //     debugger
  //   }

  ngOnInit(): void {
  // this.getdrafteddata()
 
  
  }
//   getrelation(){
//     this.dashboardService.getAllRelationList().subscribe((data: any) =>{  
//       this.relationList = data;
//     });
//   }
//  getMandalType(){
//   this.dashboardService.getAllMandaltypeList().subscribe((data: any) =>{  
//     this.mandalTypeList = data;
//   });
//  }
//  getmandal(type){
//   this.mandalList=[];
//    this.dashboardService.getAllMandalList(type).subscribe((data: any) =>{  
//      this.mandalList = data;
//    });
//  }
  // getdrafteddata(){
  //  console.log(this.dashboardComponent.strpArray)
  //   debugger
  //  console.log(this.professionModel) 
  // }

}
