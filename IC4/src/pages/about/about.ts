import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  Fname: any;
  Lname:any;
  email: any;
  password: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }

  Signup() {
    var alert = this.alertCtrl.create({
      title: "Registered Successfully",
      subTitle: "Account is Created",
      buttons: ['ok']
    });
    alert.present();
  }
}
