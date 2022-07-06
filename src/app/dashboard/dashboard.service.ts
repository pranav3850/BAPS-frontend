
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
    getMandalList(type): Observable<Mandal[]> {
        return this.httpClient.get<any>(ApiService.getMandalListURL + type);
    }
    getAllMandalList(): Observable<Mandal[]> {
        return this.httpClient.get<any>(ApiService.getAllMandalListURL);
    }
    getAllFamilyList() {
        return this.httpClient.get<any>(ApiService.getAllFamilyListURL);
    }
    getAllMandaltypeList(): Observable<Mandal[]> {
        return this.httpClient.get<any>(ApiService.getAllMandalTypeListURL);
    }
    getAllRelationList(): Observable<Relation[]> {
        return this.httpClient.get<any>(ApiService.getAllRelationListURL);
    }
    saveData(admin): Observable<any> {
        return this.httpClient.post<any>(ApiService.saveMemberListURL, admin)
    }
    getSavedMembersList(): Observable<Dashboard[]> {
        return this.httpClient.get<any>(ApiService.getAllSavedMembersListURL);
    }
    getAllHaribhakt() {
        
        return this.httpClient.get(ApiService.getAllHaribhaktURL);
    }
    saveProffesionInfo(data) {
        return this.httpClient.post(ApiService.SaveProffesionInfoURL, data);
    }
    updateProffesionInfo(data) {
        return this.httpClient.post(ApiService.updateProffesionInfoURL, data);
    }
    updatePersonalInfo(data) {
        return this.httpClient.post(ApiService.updatePersonalInfoURL, data);
    }
    getRedtickCount() {
        return this.httpClient.get(ApiService.getRedtickCountURL);
    }
    getYellowtickCount() {
        return this.httpClient.get(ApiService.getYellowtickCountURL);
    }
    getGreentickCount() {
        return this.httpClient.get(ApiService.getGreentickCountURL);
    }
    createFamily(data) {
        return this.httpClient.post(ApiService.createFamilyURL, data);
    }
    getOldDetails(data) {
        return this.httpClient.post(ApiService.getOldDetailsURL, data);
    }
   
    removeHaribhaktDetails(id) {
        return this.httpClient.get<any>(ApiService.removeHaribhaktDetailsURL + id);
    }
    removeMandalDetails(id) {
        return this.httpClient.get<any>(ApiService.removeMandalDetailsURL + id);
    }
    getEditDataofSecondstage(data){
        return this.httpClient.post(ApiService.getEditDataforSecondStageURL,data);
    }
    updateHaribhakt(data){
        return this.httpClient.post(ApiService.updateHaribhaktURL,data);
    }
    saveMandalDetails(admin: Mandal): Observable<any> {
        return this.httpClient.post<any>(ApiService.saveMandalListURL, admin);
    }
    updateMandalList(admin: Mandal): Observable<any[]> {
        return this.httpClient.post<any>(ApiService.updateMandalListURL, admin);
    }
    savePersonalInfo(data:any){
        return this.httpClient.post(ApiService.savePersonalInfoURL,data);
    }
    verifyNumber(data){
        return this.httpClient.post(ApiService.verifyNumberURL,data);
    }
    addFamilytoNew(data){
        return this.httpClient.post(ApiService.addFamilytoNewURL,data)
    }
    
}