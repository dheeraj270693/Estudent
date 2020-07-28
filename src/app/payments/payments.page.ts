import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  constructor(
    private browser: InAppBrowser,

  ) { }

  ngOnInit() {

    this.openInAppBrowser();
  }

  openInAppBrowser(){
    var url = "https://ccbst.ccbst.co/student/payments";
    // var options = InAppBrowserOptions={
    //   zoom:'yes'
    // }

    this.browser.create(url,'_self');
  }

}
