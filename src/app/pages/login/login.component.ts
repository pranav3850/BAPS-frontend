import { Component, OnInit, ElementRef } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { DashboardService } from 'app/dashboard/dashboard.service';
import { Loginuser } from './login.model';

declare var $: any;

@Component({

    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    focus;
    focus1;
    focus2;
    test: Date = new Date();
    loginForm: FormGroup;
    public loginModel: Loginuser = new Loginuser;
    public otp: any;
    public OTPSent: boolean = false;
    public submitButton: boolean = true;
    public timeLeft: number = 120;
    interval: any;
    account_validation_messages = {
        'email': [
            { type: 'required', message: 'Email is required' },
            { type: 'pattern', message: 'Enter a valid email' }
        ],
    }
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    constructor(
        private element: ElementRef,
        private router: Router,
        private dashboardService: DashboardService,
        private apiService: ApiService
    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        localStorage.clear();
    }
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit() {
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    verifybox() {
        this.submitButton = false
        this.startTimer();
        this.OTPSent = true;

        let data = {
            contactno: this.loginModel.pno,
        };
        this.dashboardService.saveAndSendOtp(data).subscribe((data: any) => {
            this.apiService.showNotification('top', 'right', 'OTP Sent Successfully.', 'success');
        })
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft == 0) {
                clearInterval(this.interval);
            } else {
                this.timeLeft--;
            }
        }, 1000)
    }
    resendOTP() {
        let data = {
            contactno: this.loginModel.pno,
        };
        this.dashboardService.removeLastInsertedOTP(data).subscribe((data: any) => {
             this.verifybox();
        })
    }
    gotodashboard() {
        localStorage.setItem('mob', this.loginModel.pno);
        this.router.navigate(['dashboard']);
    }
    verifyOTPFromUser(){
        let data = {
            contactno: this.loginModel.pno,
            otp:this.loginModel.otp
        };
        this.dashboardService.verifyUserOTP(data).subscribe((data:any)=>{
           
            if(data.length==1){
                this.apiService.showNotification('top', 'right', 'OTP Verified Successfully.', 'success');
                this.gotodashboard();
            }
            else{
                this.apiService.showNotification('top', 'right', 'OTP and Number is does not Match Please resend OTP.', 'danger');

            }
        })
    }


}
