import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { DashboardService } from 'app/dashboard/dashboard.service';
import { Mandal } from 'app/dashboard/mandal.model';
import Swal from 'sweetalert2';

declare const $: any;
@Component({
  selector: 'app-mandal',
  templateUrl: './mandal.component.html',
  styleUrls: ['./mandal.component.css']
})
export class MandalComponent implements OnInit {
  public MandalModel: Mandal = new Mandal;
  public updateMandalModel: Mandal = new Mandal;

  public MandalList: Mandal[];
  mandalList: any = [];
  mandalTypeList: any[];
  selectedName: any;
  allMandalList: any = [];
  search: string = '';
  tMandal: any = [];

  openMandalTypeText: boolean = false;
  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getMandalType();
    this.getAllmandal();
  }
  getMandalType() {
    this.dashboardService.getAllMandaltypeList().subscribe((data: any) => {
      this.mandalTypeList = data;
    });

  }
  selectedMandalType(mandaltype) {
    debugger
    this.mandalTypeList.forEach(element => {
      if (element.mandaltype == mandaltype) {
        this.selectedName = element.mandaltype;
      }
      this.MandalModel.mandaltype = this.selectedName;
    })

  }
  addMandalType() {
    this.openMandalTypeText = true;
  }
  saveMandalList() {
    this.dashboardService.saveMandalDetails(this.MandalModel).subscribe((data: any) => {
      this.MandalList = data;
      this.getAllmandal();
      this.apiService.showNotification('top', 'right', 'Mandal Added Successfully.', 'success');
    })
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
      text: "You want to delete! If you delete Mandal then all the offer data will be delete.",
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
        this.dashboardService.removeMandalDetails(id).subscribe((req) => {
          this.apiService.showNotification('top', 'right', 'Mandal removed Successfully.', 'success');

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
        this.getAllmandal();
      }
    })

  }
  updateMandalDetails(data) {
    this.selectedName = data.mandaltype;
    this.updateMandalModel = data;
    $(document).ready(function () {
      $("#exampleModalCenter").modal('show');
    });

  }
  updateMandalList() {
    this.updateMandalModel.mandaltype = this.selectedName;
    this.dashboardService.updateMandalList(this.updateMandalModel).subscribe((req) => {
      this.getAllmandal();
      this.apiService.showNotification('top', 'right', 'Mandal Details Successfully Updated.', 'success');

    })
  }

}
