import { Offert } from './shared/offert.model'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()
export class OffertsService{

    constructor(private http: Http){

    }

    public getOfferts(): Promise<Array<Offert>>{
       return this.http.get('http://localhost:3000/ofertas')
                .toPromise()
                    .then((response: any) => response.json())
    }
}