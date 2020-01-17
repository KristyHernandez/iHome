import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Header, WEB_SERVICE, isApp } from '../Config/config';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PagosService {

    constructor(private Pro_http: HttpClient,
        private storage: Storage,
        private router: Router) { }

    async insertPago(p_response, p_id, p_monto) {
        //Preparacion de header
        const headers = new HttpHeaders(Header);

        //Preparacion de body
        let body = {
            token: await this.storage.get('token'),
            id: p_id,
            monto: p_monto,
            response: p_response
        };
        let url = `${WEB_SERVICE}api/pagos/insertPago`

        return await this.Pro_http.post(url, body, { headers }).toPromise()
    }

    getPagos(p_token) {
        //Preparacion de header
        const headers = new HttpHeaders(Header);

        //Preparacion de body
        let body = {
            token: p_token
        };
        let url = `${WEB_SERVICE}api/pagos/getPagos`

        return this.Pro_http.post(url, body, { headers }).pipe(map((result: any) => {
            return result;
        }));
    }

    async getFactura(p_id) {
        //Preparacion de header
        const headers = new HttpHeaders(Header);

        //Preparacion de body
        let body = {
            id_pago: p_id
        };
        let url = `${WEB_SERVICE}api/pagos/getFactura`

        return await this.Pro_http.post(url, body, { headers }).toPromise()
    }

    pago(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            let token = await this.storage.get('token')

            //Preparacion de header
            const headers = new HttpHeaders(Header);

            //Preparacion de body
            let body = {
                token: token
            }
            let url = `${WEB_SERVICE}api/pagos/validaPago`

            this.Pro_http.post(url, body, { headers }).subscribe((data: boolean) => {
                // console.log(data)
                if (data == false) {
                    this.router.navigate(['pagos'])
                }
                resolve(data)
            }, err => {
                this.router.navigate(['pagos'])
                resolve(false)
            })
        })
    }
}
