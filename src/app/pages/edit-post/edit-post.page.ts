import { Component, OnInit, ViewChild, Input, NgZone } from '@angular/core';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { environment } from '../../../environments/environment';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { UsersService } from '../../providers/usuarios/users.service';
@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.page.html',
    styleUrls: ['./edit-post.page.scss'],
    animations: [
        trigger('staggerIn', [
            transition('* => *', [
                query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
            ])
        ])
    ]
})

export class EditPostPage implements OnInit {
    hotellocation: string;
    miPosicion = {
        latitud: null,
        longitud: null
    }
    nuevo: boolean = false
    @Input() data: any = {
    }

    cover_patch: File = null
    imagenes_list: File[] = []
    imagenes: any = []

    slideOpts = {
        slidesPerView: 3,
        initialSlide: 0,
        autoplay: false,
        freeMode: false
    }
    agmStyles: any[] = environment.agmStyles;
    // @ViewChild('slides') slides: IonSlides;
    @ViewChild("slides", { static: false }) slides: IonSlides;

    constructor(public _alerta: AlertController,
        private Geolocation: Geolocation,
        private _api: UsersService,
        private _modal: ModalController,
        private _ngZone: NgZone

    ) { }



    async ngOnInit() {
        console.log(JSON.stringify(this.data))
        setTimeout(() => {
            this._ngZone.runOutsideAngular(() => {
                this._ngZone.run(() => { console.log('Outside Done!'); });
            });

            this.miPosicion = {
                latitud: this.data.latitud,
                longitud: this.data.longitud
            }

            for (let i = 0; i < this.data.images.length; i++) {
                this.imagenes.push({
                    img: this.data.images[i].url_foto,
                    ver: 'true',
                })
                // console.log(this.data.images[i].url_foto)
            }

            console.log(this.imagenes)
        }, 1000)
    }


    async ionViewWillEnter() {

        // await this.Geolocation.getCurrentPosition().then(async (resp) => {
        //     this.miPosicion.latitud = resp.coords.latitude
        //     this.miPosicion.longitud = resp.coords.longitude
        //     // console.log(this.miPosicion);
        //     await this.miGps(this.miPosicion)
        //
        // }).catch((error) => {
        //     console.log('Error getting location', error);
        // });
    }

    async miGps(data) {
        let resp: any = await this._api.gps(data)
        this.data.direccion = await resp.direccion
        this.data.ciudad = await resp.ciudad
    }

    async newPos(evt) {
        await this.miGps({ latitud: evt.coords.lat, longitud: evt.coords.lng })
    }

    next() {
        this.slides.slideNext();
    }

    prev() {
        this.slides.slidePrev();
    }



    async upload_imagen(event, id = 0) {
        // console.log(event)
        let name = ''
        if (event.target.files && event.target.files[0]) {
            var imagen = new FileReader();
            imagen.readAsDataURL(event.target.files[0]);
            if (this.imagenes_list.length == 0) {
                this.imagenes_list[0] = event.target.files[0]
                name = event.target.files[0].name
            } else {
                this.imagenes_list[this.imagenes_list.length] = event.target.files[0]
                name = event.target.files[0].name
            }
            imagen.onload = (event) => {
                if (String(this.imagenes) == 'null') {
                    this.imagenes = []
                }
                this.imagenes.push({
                    img: event.target["result"],
                    ver: 'true',
                    name: name
                })
            }

        }
        await this.validadorImg()
    }

    async validadorImg() {
        for (let i = 0; i < this.imagenes_list.length; i++) {
            if (this.imagenes_list[i]["ver"] == undefined) {
                this.imagenes_list[i]["ver"] = await 'true'
            }
        }
    }

    async clickImg(id) {

        const alert = await this._alerta.create({
            header: '',
            message: 'Por favor selecciona una accion',
            buttons: [
                {
                    text: 'Ver',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Eliminar',
                    cssClass: 'danger',
                    handler: async () => {
                        if (this.nuevo == true) {
                            this.imagenes[id].ver = 'false'
                            this.imagenes_list[id]["ver"] = 'false'
                        } else {
                            if (String(this.imagenes[id].name) == 'undefined') {
                                this.imagenes[id].ver = false
                            } else {
                                for (let i = 0; i < this.imagenes_list.length; i++) {
                                    if (this.imagenes_list[i].name == this.imagenes[id].name) {
                                        this.imagenes_list[i]["ver"] = 'false'
                                    }
                                }
                                this.imagenes[id].ver = 'false'
                            }
                        }
                        await this.filtraImg()
                    }
                }
            ]
        });

        await alert.present();

    }

    async filtraImg() {
        let d = await this.imagenes.filter(item => item.ver == 'true')
        this.imagenes = await d
    }

    async publicar() {
        if (String(this.data.titulo) == 'null' || String(this.data.descripcion) == 'null') return
        this.data["pos"] = await this.miPosicion
        this.data["id"] = await JSON.parse(sessionStorage.getItem("user")).id_user

        if (String(this.data.garaje) == 'null') {
            this.data.garaje = false
        }
        if (String(this.data.rooms) == 'null') {
            this.data.rooms = false
        }
        if (String(this.data.children) == 'null') {
            this.data.children = false
        }
        if (String(this.data.mascotas) == 'null') {
            this.data.mascotas = false
        }
        if (String(this.data.sala) == 'null') {
            this.data.sala = false
        }
        if (String(this.data.cocina) == 'null') {
            this.data.cocina = false
        }
        if (String(this.data.lavanderia) == 'null') {
            this.data.lavanderia = false
        }
        if (String(this.data.amueblado) == 'null') {
            this.data.amueblado = false
        }
        if (String(this.data.amueblado) == 'null') {
            this.data.amueblado = false
        }

        let resp: any = await this._api.update(this.data)
        // console.log(resp)
        if (resp.id) {
            for (let i = 0; i < this.imagenes_list.length; i++) {
                let media = await this._api.img_upload(this.imagenes_list[i], resp.id)
            }
            this._modal.dismiss()
        }
    }


    async close() {
        console.log("#")
        this._modal.dismiss()
        console.log("#2")
    }



}
