import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, ToastController, ModalController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../providers/usuarios/users.service';

import { ImagePage } from './../modal/image/image.page';
import { HotelCheckoutPage } from '../hotel-checkout/hotel-checkout.page'

import { environment } from '../../../environments/environment'

import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';

@Component({
    selector: 'app-hotel-detail',
    templateUrl: './hotel-detail.page.html',
    styleUrls: ['./hotel-detail.page.scss'],
    animations: [
        trigger('staggerIn', [
            transition('* => *', [
                query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
            ])
        ])
    ]
})
export class HotelDetailPage implements OnInit {
    hotel: any = {};
    hotelID: any = this.route.snapshot.paramMap.get('id');
    agmStyles: any[] = environment.agmStyles;
    hotelSegment: string = 'details';

    constructor(
        public navCtrl: NavController,
        public asCtrl: ActionSheetController,
        public toastCtrl: ToastController,
        public modalCtrl: ModalController,
        private translate: TranslateProvider,
        public hotels: HotelProvider,
        public route: ActivatedRoute,
        public router: Router,
        private _api: UsersService
    ) {
    }

    async ngOnInit() {

        // this.hotel = await this.hotels.getItem(this.hotelID);
        this.hotel = await this._api.apartamentoById(this.hotelID)
        console.log(this.hotel)
    }

    checkout(hotelID: number, roomID: number) {
        this.navCtrl.navigateForward(`hotel-checkout/${hotelID}/${roomID}`);
        // this.router.navigate(['../../hotel-checkout', { hotelID: hotelID, roomID: roomID }], { relativeTo: this.route });
        // return await modal.present();
    }

    async presentImage(image: any) {
        const modal = await this.modalCtrl.create({
            component: ImagePage,
            componentProps: { value: image }
        });
        return await modal.present();
    }

    async favorite(hotel) {

        this.hotels.favorite(hotel)
            .then(async property => {
                const toast = await this.toastCtrl.create({
                    showCloseButton: true,
                    message: 'Se agrego a tu lista de favoritos.',
                    duration: 2000,
                    position: 'bottom'
                });

                toast.present();
            });
    }

}
