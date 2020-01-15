import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {


 logueado: boolean;


constructor(
  public navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public toastCtrl: ToastController,
  private translate: TranslateProvider,
  public storage: Storage
  ) {
  this.esta_logueado();
  }
  ngOnInit() {
  }

  esta_logueado(){
  this.storage.get('logueado').then((val: boolean) => {
   this.logueado = val;
  console.log('Your age is', val);
    });
  };
  async sendData() {
    // send booking info
    const loader = await this.loadingCtrl.create({
      duration: 2000
    })

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home');
    });
    // end
  }

}
