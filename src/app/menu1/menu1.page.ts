import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})
export class Menu1Page implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router,

  ) { }

  ngOnInit() {

    this.storage.get('isLogin').then((val) => {
      console.log('check if logged in?', val);
      if (val == true){
        this.router.navigate(['/', 'dashboard']);
      }else{
        this.router.navigate(['/', 'login']);
      }
    });

  }


}
