import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { WebService} from '../services/web.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.page.html',
  styleUrls: ['./marksheet.page.scss'],
})
export class MarksheetPage implements OnInit {
  authenticated = false;
  message = '';
  marksheetData: Observable<any>;

  GET_MARKSHEET_URL = 'https://ccbst.org/CCBST-LIVE/api/v1/marksheet'

  constructor(
    private storage: Storage,
    private WebService: WebService,
    private http: HttpClient, 
    public toastController: ToastController,
    private zone: NgZone
  ) { 
    // this.getMarksheet();

  }

  refresh() {
    this.zone.run(() => {
      console.log('force update the screen');
    });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ionViewWillEnter() {
    this.getMarksheet();
}
  ngOnInit() {
    // this.getMarksheet();
  }

  getMarksheet(){
    var authToken = "";
    // var marksheetData = [{}];
    this.storage.get('AUTH_TOKEN').then((token) => {
      console.log('Raw Auth token?', token);

      authToken = "Bearer " + token;
      // this.http.get(this.GET_MARKSHEET_URL).subscribe(res => {
      //   this.message = res['results'][0].name;
      // });
  
      this.WebService.getMarksheetData(authToken).subscribe((data)=>{

        console.log("WebService.getMarksheetData");
        console.log("response::",data);
        let result = data['result'];
        let marksheet_list = result['marksheet_list'];
        
        // this.zone.run(() => {
          console.log('force update the screen');
          this.marksheetData = marksheet_list['data'];
          console.log("marksheetData::",this.marksheetData);
        // });

        // temp = marksheetData[0];
        // tempModule = temp["name"];
        this.presentToast(data["message"]);
        });
      }, error => {
          console.log(error);
          console.log("WebService.getMarksheetData error");
          this.presentToast(error);
      });
    }
  }

