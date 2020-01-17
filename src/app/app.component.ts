import { Component, OnInit } from '@angular/core';
import { PagosPage } from './pages/pagos/pagos.page';

import { Platform, NavController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateProvider } from './providers/translate/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router'
import { Pages } from './interfaces/pages';
/**
 * Main Wrap App Component with starting methods
 *
 * @export
 * @class AppComponent
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    /**
     * Creates an Array instance with <Pages> interface that receives all menu list.
     *
     * @type {Array<Pages>}
     * @memberof AppComponent
     */
    public appPages: Array<Pages>;
    /**
     * Creates an instance of AppComponent.
     * @param {Platform} platform
     * @param {SplashScreen} splashScreen
     * @param {StatusBar} statusBar
     * @param {TranslateProvider} translate
     * @param {TranslateService} translateService
     * @param {NavController} navCtrl
     * @memberof AppComponent
     */
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translate: TranslateProvider,
        private translateService: TranslateService,
        public navCtrl: NavController,
        private _rute: Router,
        private _modal: ModalController
    ) {
        this.appPages = [
            {
                title: 'Inicio',
                url: '/home',
                direct: 'root',
                icon: 'home'
            },
            {
                title: 'Mi lista',
                url: 'hotel-list',
                direct: 'forward',
                icon: 'list-box'
            },
            {
                title: 'Informacion',
                url: '/about',
                direct: 'forward',
                icon: 'information-circle-outline'
            },
            {
                title: 'Pagos',
                url: '/rentcar',
                direct: 'forward',
                icon: 'cash'
            }
            ,
            {
                title: 'Soporte',
                url: '/support',
                direct: 'forward',
                icon: 'help-buoy'
            }
        ];

        this.initializeApp();
    }

    async ngOnInit() {
        // if (String(sessionStorage.getItem("user")) != 'null' || String(sessionStorage.getItem("user")) != 'undefined') {
        //     // console.log("#-")
        //     this._rute.navigate(['/home']);
        // } else {
        //     this._rute.navigate(['/login']);
        // }
    }

    /**
     * Method that starts all Cordova and Factories
     *
     * @memberof AppComponent
     */
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            setTimeout(() => {
                this.splashScreen.hide();
            }, 1000);
            // Set language of the app.
            this.translateService.setDefaultLang(environment.language);
            this.translateService.use(environment.language);
            this.translateService.getTranslation(environment.language).subscribe(translations => {
                this.translate.setTranslations(translations);
            });
        }).catch(() => {
            // Set language of the app.
            this.translateService.setDefaultLang(environment.language);
            this.translateService.use(environment.language);
            this.translateService.getTranslation(environment.language).subscribe(translations => {
                this.translate.setTranslations(translations);
            });
        });
    }
    /**
     * Navigate to Edit Profile Page
     *
     * @memberof AppComponent
     */
    goToEditProgile() {
        this.navCtrl.navigateForward('edit-profile');
    }
    /**
     * Logout Method
     *
     * @memberof AppComponent
     */
    logout() {
        this.navCtrl.navigateRoot('login');
    }

    async modal() {
        const modal = await this._modal.create({ component: PagosPage });
        console.log(modal)
        console.log("·40000")
        modal.onDidDismiss().then(async (data: any) => {
        });
        return await modal.present();
    }
}
