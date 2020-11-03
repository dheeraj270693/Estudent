import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


// import { HTTP } from '@ionic-native/http/ngx';

// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WebService {

  message = '';

  constructor(
    public httpClient: HttpClient,
    // private http: HTTP,
    ) { }

    GET_MARKSHEET_URL = 'https://ccbst.org/CCBST-LIVE/api/v1/marksheet'
    POST_LOGIN_URL = 'https://ccbst.org/CCBST-LIVE/api/v1/login'
    POST_REFERRAL_URL = 'https://ccbst.org/CCBST-LIVE/api/v1/referral-student'
  // API_KEY = '5449e7eb0bfe4288a576acf1413326cf'
  // password:'BC136012019141'


  loginPostData(loginParams){

    // let urlSearchParams  = {
    //   'password': 'BC136012019141'  'SD1603202002'
    // };
    
      var headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('content-type','application/json');
  
      // let url='https://ccbst.org/CCBST-LIVE/api/v1/login';
      // console.log("httpHeaders::11",headers);

      return this.httpClient.post(this.POST_LOGIN_URL,loginParams,{headers:headers})  
    }

    getMarksheetData(authToken){
      // ND8707201901
      const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin' , '*')
      // .set('Access-Control-Allow-Origin' , 'http://localhost:8105')
      // .set('Access-Control-Allow-Origin' , 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
      // .set('Access-Control-Max-Age', '3600')
      .set('Accept','application/json')
      .set('content-type', 'application/json')
      .set('Authorization', authToken)
      // console.log("httpauthToken::",authToken);
    
      return this.httpClient.get(this.GET_MARKSHEET_URL, {headers: headers })    
    }


    // FOR BACK UP +++++++++++++++++++
  postReferralData(referralParams){

  // let urlSearchParams  = {
  //   'password': 'BC136012019141'
  // };
  console.log("referralParams::",referralParams);
    // var headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin' , '*');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // headers.append('Accept','application/json');
    // headers.append('content-type','application/json');
    // headers.append('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzMTQ0LCJpc3MiOiJodHRwczovL2NjYnN0Lm9yZy9DQ0JTVC1MSVZFL2FwaS92MS9sb2dpbiIsImlhdCI6MTYwMjg0NTAzMywiZXhwIjoxNjM0MzgxMDMzLCJuYmYiOjE2MDI4NDUwMzMsImp0aSI6IktFa1ZYcHpkMzlMektScmcifQ.WjfMRg6LrT16UV-iaaPPOLgPu7nsvZVhYtL-G4PgGzE')

    const headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin' , '*')
    // .set('Access-Control-Allow-Origin' , 'http://localhost:8105')
    .set('Access-Control-Allow-Origin' , 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization')
    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
    .set('Access-Control-Max-Age', '3600')
    .set('Accept','application/json')
    .set('content-type', 'application/json')
    .set('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzMTQ0LCJpc3MiOiJodHRwczovL2NjYnN0Lm9yZy9DQ0JTVC1MSVZFL2FwaS92MS9sb2dpbiIsImlhdCI6MTYwMjg0NTAzMywiZXhwIjoxNjM0MzgxMDMzLCJuYmYiOjE2MDI4NDUwMzMsImp0aSI6IktFa1ZYcHpkMzlMektScmcifQ.WjfMRg6LrT16UV-iaaPPOLgPu7nsvZVhYtL-G4PgGzE')
    console.log("httpHeaders::",headers);

    return this.httpClient.post(this.POST_REFERRAL_URL, referralParams, {headers:headers})

  }

  
}