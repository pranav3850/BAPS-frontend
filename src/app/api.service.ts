import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static HOST_URL: string = "http://localhost:8090";
  // public static HOST_URL: string = "http://31.220.59.174:4500";

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

  public static getAllMandalListURL: string = ApiService.HOST_URL + '/admin/GetAllMandalList/'
  public static getAllMandalTypeListURL: string = ApiService.HOST_URL + '/admin/GetAllMandalTypeList'
  public static getAllRelationListURL: string = ApiService.HOST_URL + '/admin/GetAllRelationList'
  public static saveMemberListURL: string = ApiService.HOST_URL + '/admin/SaveMemberList'
  public static getAllSavedMembersListURL: string = ApiService.HOST_URL + '/admin/GetAllSavedMembersList'
  
  public static saveSanchalakListURL: string = ApiService.HOST_URL + '/admin/SaveSanchalakDetails'
  public static getAllSanchalakURL: string = ApiService.HOST_URL + '/admin/GetAllSanchalakDetails'
  public static removeSanchalakURL: string = ApiService.HOST_URL + '/admin/RemoveSanchalakDetails/'
  public static updateSanchalakListURL: string = ApiService.HOST_URL + '/admin/UpdateSanchalakDetails/'
  
  public static saveServicesListURL: string = ApiService.HOST_URL + '/admin/SaveServicesList';
  public static getAllServicesURL: string = ApiService.HOST_URL + '/admin/GetAllServices';
  public static updateServicesListURL: string = ApiService.HOST_URL + '/admin/UpdateServicesList/';
  public static saveEmployeeListURL: string = ApiService.HOST_URL + '/admin/SaveEmployeeList';
  public static getAllEmployeeURL: string = ApiService.HOST_URL + '/admin/GetAllEmployee';
  public static removeEmployeeListURL: string = ApiService.HOST_URL + '/admin/RemoveEmployeeList/';
  public static saveCustomerListURL: string = ApiService.HOST_URL + '/admin/SaveCustomerList';
  public static saveLoginUserURL: string = ApiService.HOST_URL + '/authenticate/UserLogin';



  public static getDailyTotalURL: string = ApiService.HOST_URL + '/admin/GetDailyTotal';
  public static getMonthlyTotalURL: string = ApiService.HOST_URL + '/admin/GetMonthlyTotal';


  public static forgotPasswordURL: string = ApiService.HOST_URL + '/admin/ForgotPassword';
  public static getOneTimePasswordURL: string = ApiService.HOST_URL + '/admin/GetOneTimePassword';
  public static updatePasswordURL: string = ApiService.HOST_URL + '/admin/updatePasswordAccordingRole';
  public static updateActiveStatusURL: string = ApiService.HOST_URL + '/admin/UpdateActiveStatus';





  public static saveAdminLoginURL: string = ApiService.HOST_URL + '/admin/login';
  public static ChackForPasswordURL: string = ApiService.HOST_URL + '/admin/ChackForPassword';









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
