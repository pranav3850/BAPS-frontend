import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { data } from 'jquery';
import { Sanchalak } from './sanchalak.model';
import { SanchalakService } from './sanchalak.service';
import { NgModel,NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sanchalak',
  templateUrl: './sanchalak.component.html',
  styleUrls: ['./sanchalak.component.css']
})
export class SanchalakComponent implements OnInit {
  public sanchalakModel : Sanchalak = new Sanchalak;
  public sanchalak : Sanchalak[] = []
  
  updateButton: Boolean = false;
  submitButton: Boolean = true;
  constructor(
    private sanchalakService: SanchalakService,
    private apiService  : ApiService  
  ){}
  ngOnInit(): void {
    this.getSanchalakDetails();
  }
  
  saveSanchalakDetail(){
   this.sanchalakService.saveSanchalakList(this.sanchalakModel).subscribe((data:any)=>{
    
    this.sanchalak = data 
    Swal.fire(
      {
        title: 'Added!',
        text: 'Your Sanchalak has been added.',
        icon: 'success',
        customClass: {
          confirmButton: "btn btn-success",
        },
        buttonsStyling: false
      }
    );

    this.getSanchalakDetails();
   })
  }
  getSanchalakDetails() {
    this.sanchalakService.getAllSanchalakList().subscribe((data: any) => {
      this.sanchalak = data;
      for (let i = 0; i < this.sanchalak.length; i++) {
        this.sanchalak[i].index = i + 1;
      }
    });
  }
  removeItem(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete! If you delete Sanchalak then all the sanchalak data will be delete.",
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
        this.sanchalakService.removeSanchalakDetails(id).subscribe((res) => {
          if(res =='success'){
            Swal.fire(
              {
                title: 'Deleted!',
                text: 'Your Sanchalak has been deleted.',
                icon: 'success',
                customClass: {
                  confirmButton: "btn btn-success",
                },
                buttonsStyling: false
              }
            );
            this.getSanchalakDetails();
          }
        })
      }
    })
  }
  updateItem(item){
    this.updateButton = true;
    this.submitButton = false;
   this.sanchalakModel = item;
  }
  updateSanchalakDetails(){
    this.sanchalakService.updateSanchalakList(this.sanchalakModel).subscribe((data) =>{
        Swal.fire(
          {
            title: 'Updated!',
            text: 'Your Sanchalak has been Updated.',
            icon: 'success',
            customClass: {
              confirmButton: "btn btn-success",
            },
            buttonsStyling: false
          }
        );
        this.getSanchalakDetails();
    })
  }
}
