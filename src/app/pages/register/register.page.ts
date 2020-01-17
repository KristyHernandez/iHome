import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';

import { user1 } from '../../models/usuario';
import { UsersService } from '../../providers/usuarios/users.service';

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
        private formBuilder: FormBuilder,
        private _api: UsersService
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
        console.log(this.onRegisterForm.value)

        const loader = await this.loadingCtrl.create({
            duration: 2000
        });
        let d: any = await this._api.registro(this.onRegisterForm.value)
        console.log(d[0])
        if (d[0].id_user) {

            await sessionStorage.setItem("user", JSON.stringify(d[0]))
            this.navCtrl.navigateRoot('/home');
        }


        loader.present();

    }

    // // //
    goToLogin() {
        this.navCtrl.navigateRoot('/login');
    }
}
