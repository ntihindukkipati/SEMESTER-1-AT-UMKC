import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname: String;
  password: String;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  signIn() {
    if (this.uname == "admin" && this.password == "admin") {
      var alert = this.alertCtrl.create({
        title: "Login Successfull!",
        subTitle: "Welcome" + " " + this.uname,
        buttons: ['ok']

      });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title:"Login Failed",
        subTitle: "Please Enter Valid Credentials",
        buttons:['ok']
      });
      alert.present();
    }
  }
  register(){
    this.navCtrl.push(AboutPage);
  }

}
