import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';

import { environment } from '../../../environments/environment';
import { UsersService } from '../../providers/usuarios/users.service';
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
    latitud:null,
    longitud:null
  }
  data:any={
    garaje:null,
    rooms: null,
    children:null,
    mascotas:null,
    sala:null,
    cocina:null,
    lavanderia:null,
    amueblado:null,
  }


  login:boolean=false

  agmStyles: any[] = environment.agmStyles;

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
    private users: UsersService,
    private Geolocation: Geolocation
  ) {

    this.hotels = hotels.getAll();

    setTimeout(async () => {
      let data = await this.users.login();
    console.log(data);
    }, 500);


  }

    ngAfterViewInit(){

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

     if(String(sessionStorage.getItem("user"))!='null' || String(sessionStorage.getItem("user"))!='undefined'){
       this.login=true
     }else{
       this.login=false
     }

  }

  initializeItems() {
    this.items = [
      'La Belle Place - Rio de Janeiro',
      'Marshall Hotel - Marshall Islands',
      'Maksoud Plaza - São Paulo',
      'Hotel Copacabana - Rio de Janeiro',
      'Pousada Marés do amanhã - Maragogi'
    ];
  }

  itemSelected(item: string) {
    this.hotellocation = item;
    this.showItems = false;
  }

  childrenArr(chil) {
    const child = Number(chil);
    this.childs = Array(child).fill(0).map((v, i) => i);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.showItems = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.showItems = false;
    }
  }

  // togglePopupMenu() {
  //   return this.openMenu = !this.openMenu;
  // }
  // // //
  async viewHotels() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateForward('hotel-list');
    });
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
    let resp:boolean=true
    if(resp==true){

    }else{

    }
  }
}
