import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Observable } from 'rxjs';
import { ForgotPwd } from '../forgot-pwd/forgotpwd.model';
import { Loginuser } from './login.model';


@Injectable({
    providedIn: 'root'
})
export class LoginService {


    constructor(
        private httpClient: HttpClient
    ) { }
   
    userLogin(credentials: Loginuser): Observable<any> {
        const data = {
            email: credentials.email,
            password: credentials.password,
        };

        return this.httpClient.post<any>(ApiService.getUserLoginURL, data);
    }
   
 

}
