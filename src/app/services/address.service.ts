import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AddressService {

  constructor(private http: Http) { }

  getAddresses(id: string, token: string){
  	//fetch addresses in relation to the current user
  	let headers = new Headers();
  	headers.append('Authorization', token);
    headers.append('Content-Type','application/json');
  	return this.http.get('address/'+id, {headers:headers}).map(res => res.json());
  }

  addAddress(address: Object, token: string){
  	let headers = new Headers();
  	headers.append('Authorization',token);
  	headers.append('Content-Type','application/json');
    return this.http.post('address', address, {headers:headers}).map(res => res.json());
  }

  removeAddress(address_id: string, token: string){
    let headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Content-Type','application/json');
    return this.http.put('address/removeAddress/'+address_id, {headers:headers}).map(res => res.json());
  }
}
