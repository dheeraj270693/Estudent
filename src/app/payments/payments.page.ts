import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  
  PAYMENT_URL = 'https://ccbst.org/CCBST-LIVE/student/payments';
  constructor(
    private browser: InAppBrowser,

  ) { }

  ngOnInit() {

    this.openInAppBrowser();
  }

  openInAppBrowser(){
    // var url = "";
    // var options = InAppBrowserOptions={
    //   zoom:'yes'
    // }

    this.browser.create(this.PAYMENT_URL,'_self');
  }

}
