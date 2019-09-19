import { async, TestBed } from '@angular/core/testing';
import {AlertController, IonicModule,NavController} from 'ionic-angular';
import {AlertControllerMock, AlertMock, NavControllerMock} from 'ionic-mocks';


import { AboutPage} from './about';


describe('About Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;
  let navCtrl: NavController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      imports: [
        IonicModule.forRoot(AboutPage)
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock },
        {provide: NavController, useClass: NavControllerMock}
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();
    navCtrl= NavControllerMock.instance();
  });

  it('should be created', () => {
    expect(component instanceof AboutPage).toBe(true);
  });


  it ('Registration page fails if email was not entered', () => {
    let reg = new AboutPage(alertCtrl, navCtrl)
    reg.Fname='Nithin';
    reg.Lname='Dukkipati';
    reg.password='123';
    reg.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });
  it ('Registration page fails if email was not entered', () => {
    let reg = new AboutPage(alertCtrl, navCtrl)
    reg.Fname='Nithin';
    reg.Lname='Dukkipati';
    reg.email='sdyv9@mail.umkc.edu';
    reg.password='123';
    reg.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });
  it ('Registration page fails if password and email are not entered', () => {
    let reg = new AboutPage(alertCtrl, navCtrl)
    reg.Fname='Nithin';
    reg.Lname='Dukkipati';
    reg.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });



  it("sign up function", () =>{

    let fun = new AboutPage(alertCtrl, navCtrl);
    fun.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();
  });

});
