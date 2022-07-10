import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // public static HOST_URL: string = "http://localhost:8090";
  public static HOST_URL: string = "http://31.220.111.153:8090";
 

  constructor(

    private http: HttpClient,
  ) { }
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public static getUserLoginURL: string = ApiService.HOST_URL + '/admin/GetUsersLogin';
  public static updateLogoutDetailsURL: string = ApiService.HOST_URL + '/admin/UpdateLogoutDetails'
  public static getMandalListURL: string = ApiService.HOST_URL + '/admin/GetMandalList/'
  public static getAllMandalListURL: string = ApiService.HOST_URL + '/admin/GetAllMandalList/'
  public static getAllMandalTypeListURL: string = ApiService.HOST_URL + '/admin/GetAllMandalTypeList'
  public static getAllRelationListURL: string = ApiService.HOST_URL + '/admin/GetAllRelationList'
  public static saveMemberListURL: string = ApiService.HOST_URL + '/admin/SaveMemberList'
  public static getAllSavedMembersListURL: string = ApiService.HOST_URL + '/admin/GetAllSavedMembersList';
  public static SaveProffesionInfoURL: string = ApiService.HOST_URL + '/admin/SaveProffesionInfo';
  public static updateProffesionInfoURL: string = ApiService.HOST_URL + '/admin/updateProffesionInfoURL';
  public static createFamilyURL: string = ApiService.HOST_URL + '/admin/createFamily';
  public static getOldDetailsURL: string = ApiService.HOST_URL + '/admin/getOldDetails';
  public static getAllFamilyListURL: string = ApiService.HOST_URL + '/admin/getAllFamilyForData';
  public static removeHaribhaktDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveHaribhaktDetails/';
  public static removeMandalDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveMandalDetails/';
  public static saveMandalListURL: string = ApiService.HOST_URL + '/admin/SaveMandalList';
  public static updateMandalListURL: string = ApiService.HOST_URL + '/admin/UpdateMandalList';
  public static getRedtickCountURL: string = ApiService.HOST_URL + '/admin/getRedtickCount'
  public static getYellowtickCountURL: string = ApiService.HOST_URL + '/admin/getYellowtickCount'
  public static getGreentickCountURL: string = ApiService.HOST_URL + '/admin/getGreentickCount'
  public static getEditDataforSecondStageURL: string = ApiService.HOST_URL + '/admin/getEditDataforSecondStage'
  public static updateHaribhaktURL: string = ApiService.HOST_URL + '/admin/updateHaribhakt'
  public static savePersonalInfoURL: string = ApiService.HOST_URL + '/admin/savePersonalInfo'
  public static verifyNumberURL: string = ApiService.HOST_URL + '/admin/vetifyNumber'
  public static updatePersonalInfoURL: string = ApiService.HOST_URL + '/admin/updatePersonalInfo'
  public static addFamilytoNewURL: string = ApiService.HOST_URL + '/admin/addFamilytoNew'
  public static saveSanchalakListURL: string = ApiService.HOST_URL + '/admin/SaveSanchalakDetails'
  public static getAllSanchalakURL: string = ApiService.HOST_URL + '/admin/GetAllSanchalakDetails'
  public static removeSanchalakURL: string = ApiService.HOST_URL + '/admin/RemoveSanchalakDetails/'
  public static updateSanchalakListURL: string = ApiService.HOST_URL + '/admin/UpdateSanchalakDetails/'
  public static getAllHaribhaktURL: string = ApiService.HOST_URL + '/admin/getAllHaribhakt';
  public static SaveAndSendOTPURL: string = ApiService.HOST_URL + '/admin/sendAndSaveUserOTP';
  public static removeLastInsertedOTPURL: string = ApiService.HOST_URL + '/admin/removeLastInsertedOTP';
  public static getUserOTPVerifyURL: string = ApiService.HOST_URL + '/admin/getUserOTPVerify';
  showNotification(from, align, msg, color) {
    var color = color;
    $.notify({
      icon: "",
      message: msg
    }, {
      type: color,
      timer: 2000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    });
  }
}
