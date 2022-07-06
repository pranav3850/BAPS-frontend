import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { LoginService } from 'app/pages/login/login.service';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    roles: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
 {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'nc-icon nc-bank',
    roles: "Admin",
},
{
    path: '/mandal',
    title: 'Manage mandal',
    type: 'link',
    icontype: 'fa fa-tasks',
    roles: "Admin",
},





// {


];
export const Employee: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank',
        roles: "Admin",
    },
    

];


    /*


    */
    

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    public subAdminMenuItems: any;

    public Rolees = localStorage.getItem("role");
    public userName = localStorage.getItem("UserName");
    Roles:any ;
    datetime: any;
    in_time: any;
    out_time: any;
    visit: '';
    loginTotalTime: number;
    uid:any;
    isNotMobileMenu() {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    }
    constructor(
        private router: Router,
        private loginService:LoginService,
        private apiService: ApiService,
        
    ) {

    }
    ngOnInit() {
        this.in_time = localStorage.getItem("lastInTime");
        this.out_time = localStorage.getItem("lastInTime");
        this.Roles = localStorage.getItem("role");
        this.uid=localStorage.getItem("UserId");
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if(localStorage.getItem('role') == undefined){
            this.userName='Haribhakt';
        }else{
            this.userName='Admin';
        }

        
    }
    ngAfterViewInit() {
    }
    logout() {
       localStorage.clear();
       this.router.navigate(['pages/login']);
        // this.loginTimeCalculation();
        // let data = {
        //   userid: this.uid ,
        //   loginMinute: this.loginTotalTime
        // };
        // debugger
        // this.loginService.UpdateLogout(data).subscribe((res) => {
        //   this.apiService.showNotification('top', 'right', 'Logout Successfully.', 'success');
        //   localStorage.clear();
        //   this.router.navigate(['pages/login']);
        // });
    }
    loginTimeCalculation() {
        var intime = typeof datetime !== 'undefined' ? datetime : this.in_time;
        var datetime: any = new Date(intime).getTime();
        var now = new Date().getTime();
        if (isNaN(datetime)) {
          return "";
        }
        var milisec_diff: number = 0;
        if (datetime < now) {
          milisec_diff = now - datetime;
        } else {
          milisec_diff = datetime - now;
        }
        var minutes: number = 0;
        minutes = (milisec_diff / 60000);
        var minutesRound = Math.round(minutes);
        this.loginTotalTime = minutesRound;
    
      }
}
