import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const _ApiCart = '';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems: any[] = [];
    constructor(private http: HttpClient) { }

    private apiUrl = 'http://localhost:2002/detail-user';


    createDetailUser(detailUser: any): Observable<any> {
        return this.http.post(this.apiUrl, detailUser);
    }



}
