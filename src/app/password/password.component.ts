import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';

import { LoginService } from 'app/pages/login/login.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  oldpass: boolean = false;
  constructor(
    private loginService: LoginService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
 

}
