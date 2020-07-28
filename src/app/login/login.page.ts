import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public toastController: ToastController,
    private router: Router,
    private storage: Storage,
    private browser: InAppBrowser,
    public menuCtrl: MenuController
  ) { 
    // this.openInAppBrowser();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
 }
 ionViewDidLeave() {
    this.menuCtrl.enable(true);
 } 
 
  ngOnInit() {
    // this.openInAppBrowser();
  }

  openInAppBrowser(){
    var url = "https://ccbst.ccbst.co/student/payments";
    this.browser.create(url,'_blank')
  }

  loginBtnClicked(){
    // this.storage.set('isLogin', true);
    // this.router.navigate(['/', 'dashboard']);
    // this.storage.get('isLogin').then((val) => {
    //   console.log('Are u logged in?', val);
    // });
  
    this.randomNumber();
  }

  randomNumber(){
    var i = 1;
        for(i=i; i>0 && i<100; i++){
          // for( i in 1..100 ){

         //i in 1..100 {
            var myText = ""
            if ((i % 3 == 0) || (i%10 == 3) || ((i/10)%10 == 3)){
                myText = " snap"
            }
            if ((i % 7 == 0) || (i%10 == 7) || ((i/10)%10 == 7)){
                myText += " crackle"
            }
            console.log(i + myText);
        }

  }

}
