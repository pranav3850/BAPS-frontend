import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { Sanchalak } from './sanchalak.model';

@Injectable({
    providedIn: 'root'
})
export class SanchalakService{
    
    constructor(
        private httpClient: HttpClient
    ) { }

    saveSanchalakList(admin: Sanchalak): Observable<any> {
        return this.httpClient.post<any>(ApiService.saveSanchalakListURL, admin);
    }
    getAllSanchalakList(): Observable<Sanchalak[]> {
        return this.httpClient.get<any>(ApiService.getAllSanchalakURL);
    }
    removeSanchalakDetails(id) {
        return this.httpClient.get<any>(ApiService.removeSanchalakURL + id);
    }
    updateSanchalakList(admin: Sanchalak): Observable<Sanchalak[]>{
        return this.httpClient.post<any>(ApiService.updateSanchalakListURL, admin);
    }
}