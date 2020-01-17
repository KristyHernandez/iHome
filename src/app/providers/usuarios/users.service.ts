import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEB_SERVICE, Header } from '../../Config/config';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(public Pro_http: HttpClient) { }

    async login(data: any) {
        const headers = new HttpHeaders(Header)
        let body = {
            user: data.email,
            pass: data.password
        }

        let url = `${WEB_SERVICE}users/goLoginPost`
        let resp = await this.Pro_http.post(url, body, { headers }).toPromise();
        return resp

    }
    async registro(data: any) {
        const headers = new HttpHeaders(Header)
        let body = data
        let url = `${WEB_SERVICE}users/registrar`
        let resp = await this.Pro_http.post(url, body, { headers }).toPromise();
        return resp

    }

    async gps(data) {
        const headers = new HttpHeaders(Header)
        let body = data
        console.log(body)
        let url = `${WEB_SERVICE}gps/direccionGps`
        return await this.Pro_http.post(url, body, { headers }).toPromise();

    }
    async buscar(data) {
        const headers = new HttpHeaders(Header)
        let body = data
        let url = `${WEB_SERVICE}apartamentos/buscarApartamento`
        return await this.Pro_http.post(url, body, { headers }).toPromise();

    }
    async apartamentoById(data: any) {
        const headers = new HttpHeaders(Header)
        let body = {
            id: data
        }
        let url = `${WEB_SERVICE}apartamentos/apartamentoById`
        return await this.Pro_http.post(url, body, { headers }).toPromise();

    }
    async miLista(data: any) {
        const headers = new HttpHeaders(Header)
        let body = {
            id: data
        }
        let url = `${WEB_SERVICE}apartamentos/miLista`
        return await this.Pro_http.post(url, body, { headers }).toPromise();

    }
    async ultimos() {
        const headers = new HttpHeaders(Header)
        let body = {}
        let url = `${WEB_SERVICE}apartamentos/ultimos`
        return await this.Pro_http.post(url, body, { headers }).toPromise();

    }

    async genera(data: any) {
        const headers = new HttpHeaders(Header)
        let body = data
        let url = `${WEB_SERVICE}apartamentos/genera`
        return await this.Pro_http.post(url, body, { headers }).toPromise();
    }

    async update(data: any) {
        const headers = new HttpHeaders(Header)
        let body = data
        let url = `${WEB_SERVICE}apartamentos/update`
        return await this.Pro_http.post(url, body, { headers }).toPromise();
    }

    async img_upload(item, id) {
        const headers = new HttpHeaders(Header)
        const fd = new FormData();
        fd.append('image', item, item.name)
        fd.append('id', `${id}`)
        const url = `${WEB_SERVICE}apartamentos/uplFoto`;

        return await this.Pro_http.post(url, fd, { headers }).toPromise();
    }

    async validaPago() {
        const headers = new HttpHeaders(Header)
        let body = { id: await JSON.parse(sessionStorage.getItem("user")).id_user }
        let url = `${WEB_SERVICE}users/validaPago`
        console.log(body)
        return await this.Pro_http.post(url, body, { headers }).toPromise();

    }
    async historial() {
        const headers = new HttpHeaders(Header)
        let body = { id: await JSON.parse(sessionStorage.getItem("user")).id_user }
        let url = `${WEB_SERVICE}users/historialPago`
        console.log(body)
        return await this.Pro_http.post(url, body, { headers }).toPromise();

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
