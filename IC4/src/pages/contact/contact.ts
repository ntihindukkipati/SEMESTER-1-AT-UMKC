import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  todos: string[] = [];
  todo: string;
search: string;
public searchList: any;

  constructor(private http: HttpClient, public navCtrl: NavController) {

  }

  add() {
    // @ts-ignore
    this.todos.push(this.todo);
    this.todo = "";

  }
  add1() {
    if (this.search !== null) {
      this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.search + '&key=AIzaSyAsf6zo7naM8pD2Rkkma4_FWSk10ieRFwM&limit=1&indent=True')
        .subscribe((data: any) => {

            this.searchList=data;


        });

    }
  }







  delete(item) {
    // @ts-ignore
    var index = this.todos.indexOf(item);
    if (index > -1) {
      // @ts-ignore
      this.todos.splice(index, 1);
    }
  }
}
