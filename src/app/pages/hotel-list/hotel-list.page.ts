import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { UsersService } from '../../providers/usuarios/users.service';
import { NewPostPage } from '../new-post/new-post.page';

import { environment } from '../../../environments/environment';

import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.page.html',
    styleUrls: ['./hotel-list.page.scss'],
    animations: [
        trigger('staggerIn', [
            transition('* => *', [
                query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
            ])
        ])
    ]
})
export class HotelListPage implements OnInit {
    hotelLists: String = 'cardlist';
    agmStyles: any[] = environment.agmStyles;
    hotels: any = [];

    constructor(
        public navCtrl: NavController,
        private translate: TranslateProvider,
        public hotelService: HotelProvider,
        private _api: UsersService,
        private _modal: ModalController,
        public toastController: ToastController
    ) {
        // this.hotels = this.hotelService.getAll();
    }

    async ngOnInit() {
        this.carga()
    }

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }
    async carga() {
        let resp = await this._api.miLista(await JSON.parse(sessionStorage.getItem("user")).id_user)
        this.hotels = await resp
    }


    async registrarNuevo() {
        let pago: any = await this._api.validaPago()

        if (pago[0].valida_pago <= 0) {
            const toast = await this.toastController.create({
                message: 'Tu fecha de pago ha vencido, por favor realiza el pago de la subcripcion',
                duration: 2000
            });
            toast.present();

            this.navCtrl.navigateRoot('/rentcar')

            return
        }

        const modal = await this._modal.create({ component: NewPostPage });
        modal.onDidDismiss().then(async (data: any) => {
            await this.carga()
        });

        await modal.present();
    }



}
