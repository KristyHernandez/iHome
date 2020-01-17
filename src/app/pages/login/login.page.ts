import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { UsersService } from '../../providers/usuarios/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public onLoginForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private translate: TranslateProvider,
        private formBuilder: FormBuilder,
        private _api: UsersService
    ) { }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
        if (String(sessionStorage.getItem("user")) != 'null' || String(sessionStorage.getItem("user")) != 'undefined') {
            // console.log("#-")
            // this._rute.navigate(['/home']);
            this.navCtrl.navigateRoot('/home');
        } else {
        }
    }

    ngOnInit() {
        document.querySelector('video').play();

        this.onLoginForm = this.formBuilder.group({
            'email': [null, Validators.compose([
                Validators.required
            ])],
            'password': [null, Validators.compose([
                Validators.required
            ])]
        });
    }

    async forgotPass() {
        const alert = await this.alertCtrl.create({
            header: this.translate.get('app.pages.login.label.forgot'),
            message: 'OLvidaste tu clave',//this.translate.get('app.pages.login.text.forgot'),
            inputs: [
                {
                    name: 'email',
                    type: 'email',
                    placeholder: this.translate.get('app.label.email')
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Confirm',
                    handler: async () => {
                        const loader = await this.loadingCtrl.create({
                            duration: 2000
                        });

                        loader.present();
                        loader.onWillDismiss().then(async l => {
                            const toast = await this.toastCtrl.create({
                                showCloseButton: true,
                                message: this.translate.get('app.pages.login.text.sended'),
                                duration: 3000,
                                position: 'bottom'
                            });

                            toast.present();
                        });
                    }
                }
            ]
        });

        await alert.present();
    }

    // // //
    goToRegister() {
        this.navCtrl.navigateRoot('/register');
    }

    goToHome() {
        this.navCtrl.navigateRoot('/home');
    }

    async loginUser() {
        console.log(this.onLoginForm.value)
        let resp: any = await this._api.login(this.onLoginForm.value)
        if (resp.email == this.onLoginForm.value.email) {
            sessionStorage.setItem("user", JSON.stringify(resp))
            this.navCtrl.navigateRoot('/home');
        }

    }

}
