import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { UsersService } from '../../providers/usuarios/users.service';
import { user1 } from '../../models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'nombre': [null, Validators.compose([
        Validators.required
      ])],
      'apellido': [null, Validators.compose([
        Validators.required
      ])],
      'usuario': [null, Validators.compose([
        Validators.required
      ])],

      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/home');
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
}
