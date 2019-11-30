import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HomePage } from './home.page';


describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  this.geolocation.getCurrentPosition().then((resp) => {
     resp.coords.latitude
     resp.coords.longitude
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    data.coords.latitude
    data.coords.longitude
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
