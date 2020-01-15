import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonSlides, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})

export class WalkthroughPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  logueado = false;
  showSkip = true;
  slideOpts = {
    effect: 'flip',
    speed: 1000
  };
  dir: String = 'ltr';

  slideList: Array<any> = [
    {
      title: 'What is ion<strong>Booking</strong>?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
      image: 'assets/img/hotel-sp01.png',
    },
    {
      title: 'Why ionBooking?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
      image: 'assets/img/hotel-sp02.png',
    },
    {
      title: 'Your Vacation is coming!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
      image: 'assets/img/hotel-sp03.png',
    }
  ];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public router: Router,
    public storage: Storage
  ) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  onSlideNext() {
    this.slides.slideNext(1000, false);
  }

  onSlidePrev() {
    this.slides.slidePrev(300);
  }

  // onLastSlide() {
  // 	this.slides.slideTo(3, 300)
  // }

  openHomePage() {
   this.storage.set('logueado', false);

    this.navCtrl.navigateRoot('/home');
    // this.router.navigateByUrl('/tabs/(home:home)');
  }

  openLoginPage() {
    this.storage.set('logueado', true);
    this.navCtrl.navigateForward('/login');
  }

}
