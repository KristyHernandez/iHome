import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, WeatherService } from '../../providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.page.html',
  styleUrls: ['./local-weather.page.scss'],
})
export class LocalWeatherPage implements OnInit {
  weather: any;
  location: {
    state: string,
    city: string
  }

  public locationList: Array<any> = [
    { city: 'Los Angeles', state: 'US' },
    { city: 'Miami', state: 'US' },
    { city: 'New York', state: 'US' },
    { city: 'Seattle', state: 'US' },
    { city: 'São Paulo', state: 'BR' }
  ];

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    private weatherService: WeatherService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('location').then((val) => {
      if (val !== null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          state: 'US',
          city: 'New York'
        }
      }

      this.getWeather(this.location)

    });
  }

  getWeather(location) {
    if (typeof location === 'string') {
      this.location = JSON.parse(location);
    } else {
      this.location = location;
    }

    this.storage.set('location', JSON.stringify(this.location));

    this.weatherService.getWeather(this.location.state, this.location.city).subscribe((weather: any) => {
      this.weather = weather;
    });
  }

}
