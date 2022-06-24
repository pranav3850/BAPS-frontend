
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard.model';
import { Mandal } from './mandal.model';
import { Relation } from './relation.model';
@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(
        private httpClient: HttpClient
    ) { }
    getAllMandalList(type): Observable<Mandal[]> {
        return this.httpClient.get<any>(ApiService.getAllMandalListURL + type);
    }
    getAllMandaltypeList(): Observable<Mandal[]> {
        return this.httpClient.get<any>(ApiService.getAllMandalTypeListURL);
    }
    getAllRelationList(): Observable<Relation[]> {
        return this.httpClient.get<any>(ApiService.getAllRelationListURL);
    }
    saveData(admin):Observable<any>{
        return this.httpClient.post<any>(ApiService.saveMemberListURL,admin)
    }
    getSavedMembersList(): Observable<Dashboard[]> {
        return this.httpClient.get<any>(ApiService.getAllSavedMembersListURL);
    }
}