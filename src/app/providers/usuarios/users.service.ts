import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEB_SERVICE } from '../../Config/config';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public Pro_http:HttpClient) { }

  async login(data:any){

    let body = {
      user: data.email,
      pass:data.password
    }

    let url = `${WEB_SERVICE}users/goLoginPost`
    let resp=await this.Pro_http.post(url, body).toPromise();
    return resp

  }

  async pago(){

          let url1 = `${WEB_SERVICE}users/gopagoPost`
          return await this.Pro_http.post(url, body).toPromise();

  }
  //
  //  let url2 = `${WEB_SERVICE}users/goanuncioPost`
  //  return await this.Pro_http.post(url, body).toPromise();
  //
  // let url3 = `${WEB_SERVICE}users/gonotificacionPost`
  // return await this.Pro_http.post(url, body).toPromise();
  //
  // let url4 = `${WEB_SERVICE}users/gocolonia_barrioPost`
  // return await this.Pro_http.post(url, body).toPromise();
  //
  // let url5 = `${WEB_SERVICE}users/goemailPost`
  // return await this.Pro_http.post(url, body).toPromise();
  //
  // let url6 = `${WEB_SERVICE}users/gousuarioPost`
  // return await this.Pro_http.post(url, body).toPromise();
  //
  // let url7 = `${WEB_SERVICE}users/gofotoPost`
  // return await this.Pro_http.post(url, body).toPromise();



}
