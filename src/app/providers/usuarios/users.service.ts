import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEB_SERVICE } from '../../Config/config';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public Pro_http:HttpClient) { }

  async login(){

    //Preparacion de body
    let body = {
      user: 'pruebas',
      pass:'1234'
    }

    let url = `${WEB_SERVICE}users/goLoginPost`
    return await this.Pro_http.post(url, body).toPromise();

     let url = `${WEB_SERVICE}users/gopagoPost`
     return await this.Pro_http.post(url, body).toPromise();

     let url = `${WEB_SERVICE}users/goanuncioPost`
     return await this.Pro_http.post(url, body).toPromise();

    let url = `${WEB_SERVICE}users/gonotificacionPost`
     return await this.Pro_http.post(url, body).toPromise();

    let url = `${WEB_SERVICE}users/gocolonia_barrioPost`
     return await this.Pro_http.post(url, body).toPromise();

    // let url = `${WEB_SERVICE}users/goemailPost`
    // return await this.Pro_http.post(url, body).toPromise();

    // let url = `${WEB_SERVICE}users/gousuarioPost`
    // return await this.Pro_http.post(url, body).toPromise();

    // let url = `${WEB_SERVICE}users/gofotoPost`
    // return await this.Pro_http.post(url, body).toPromise();
  }



}
