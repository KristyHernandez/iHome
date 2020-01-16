import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { UsersService } from '../../providers/usuarios/users.service';
import { environment } from '../../../environments/environment';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    openMenu: Boolean = false;
    searchQuery: String = '';
    items: string[];
    showItems: Boolean = false;

    children: number;
    hotellocation: string;
    miPosicion = {
        latitud: null,
        longitud: null
    }
    data: any = {
        garaje: null,
        rooms: null,
        children: null,
        mascotas: null,
        sala: null,
        cocina: null,
        lavanderia: null,
        amueblado: null,
        direccion: null
    }


    login: boolean = false

    agmStyles: any[] = environment.agmStyles;

    apartamentos: any = []

    // search conditions
    public checkin = {
        name: this.translate.get('app.pages.home.label.checkin'),
        date: new Date().toISOString()
    };

    public checkout = {
        name: this.translate.get('app.pages.home.label.checkout'),
        date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()
    };

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public loadingCtrl: LoadingController,
        private translate: TranslateProvider,
        public hotels: HotelProvider,
        private _api: UsersService,
        private Geolocation: Geolocation
    ) {

        this.hotels = hotels.getAll();
    }

    ngAfterViewInit() {

    }

    async ionViewWillEnter() {
        this.menuCtrl.enable(true);

        await this.Geolocation.getCurrentPosition().then((resp) => {
            this.miPosicion.latitud = resp.coords.latitude
            this.miPosicion.longitud = resp.coords.longitude
            console.log(this.miPosicion);

        }).catch((error) => {
            console.log('Error getting location', error);
        });

        if (String(sessionStorage.getItem("user")) != 'null' || String(sessionStorage.getItem("user")) != 'undefined') {
            this.login = true
        } else {
            this.login = false
        }

    }


    itemSelected(item: string) {
        this.hotellocation = item;
        this.showItems = false;
    }


    async viewHotels() {
        let resp: any = await this._api.gps(this.miPosicion)
        // this.data.direccion = await resp.direccion

        let busqueda: any = await this._api.buscar(this.data)
        this.apartamentos = busqueda.busqueda_inteligente
        console.log(JSON.stringify(this.apartamentos))

    }

    editprofile() {
        this.navCtrl.navigateForward('edit-profile');
    }

    settings() {
        this.navCtrl.navigateForward('settings');
    }

    goToWalk() {
        this.navCtrl.navigateRoot('walkthrough');
    }

    logout() {
        this.navCtrl.navigateRoot('login');
    }

    register() {
        this.navCtrl.navigateForward('register');
    }

    messages() {
        this.navCtrl.navigateForward('messages');
    }
    uploadImg() {
        // this.navCtrl.navigateForward('upload');
        let resp: boolean = true
        if (resp == true) {

        } else {

        }
    }
}
