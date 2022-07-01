import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { LoginService } from '../login/login.service';
import { ForgotPwd } from './forgotpwd.model';
declare const $: any;
@Component({
    selector: 'app-forgot-pwd',
    templateUrl: './forgot-pwd.component.html',
    styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
    loginForm: FormGroup;
    public loginModel: ForgotPwd[] = [];
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
        private loginService: LoginService,
        private apiService: ApiService,
        private router: Router
    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
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
    login(data){
        this.loginService.userLogin(data).subscribe((res:any)=>{
            if(res==1){
                this.apiService.showNotification('top', 'right', 'Wrong Email.', 'danger');
            }else if(res ==2){
                this.apiService.showNotification('top', 'right', 'Incorrect Password.', 'danger');
            }else{
                this.apiService.showNotification('top', 'right', 'Login successfully', 'sucess');
                localStorage.setItem('role', 'Admin');
                this.router.navigate(['dashboard']);
            }
        })
    }

}
