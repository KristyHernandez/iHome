import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEB_SERVICE } from '../../Config/config';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(public Pro_http: HttpClient) { }

    async login(data: any) {

        let body = {
            user: data.email,
            pass: data.password
        }

        let url = `${WEB_SERVICE}users/goLoginPost`
        let resp = await this.Pro_http.post(url, body).toPromise();
        return resp

    }

    async gps(data) {
        let body = data
        console.log(body)
        let url = `${WEB_SERVICE}gps/direccionGps`
        return await this.Pro_http.post(url, body).toPromise();

    }
    async buscar(data) {
        let body = data
        let url = `${WEB_SERVICE}apartamentos/buscarApartamento`
        return await this.Pro_http.post(url, body).toPromise();

    }
    async apartamentoById(data: any) {
        let body = {
            id: data
        }
        let url = `${WEB_SERVICE}apartamentos/apartamentoById`
        return await this.Pro_http.post(url, body).toPromise();

    }
    async miLista(data: any) {
        let body = {
            id: data
        }
        let url = `${WEB_SERVICE}apartamentos/miLista`
        return await this.Pro_http.post(url, body).toPromise();

    }

    async genera(data: any) {
        let body = data
        let url = `${WEB_SERVICE}apartamentos/genera`
        return await this.Pro_http.post(url, body).toPromise();

    }

    async img_upload(item, id) {
        const fd = new FormData();
        fd.append('image', item, item.name)
        fd.append('id', `${id}`)
        const url = `${WEB_SERVICE}apartamentos/uplFoto`;

        return await this.Pro_http.post(url, fd).toPromise();
    }


    // let url = `${WEB_SERVICE}users/gopagoPost`
    // return await this.Pro_http.post(url, body).toPromise();
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
