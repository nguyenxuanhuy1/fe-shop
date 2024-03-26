import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const _Apiaccount = "http://localhost:2002/acc-reg";
const _ApiaccountALL = "http://localhost:2002/acc-reg/ALL";
const _Api = "http://localhost:2002/acc-reg";
const apiUrl = 'http://localhost:2002/auth';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  check: boolean = false;
  setCheckValue(value: boolean): void {
    this.check = value;
  }



  getAll() {
    return this.http.get<any[]>(_Apiaccount);
  }

  getAllAccount() {
    return this.http.get<any[]>(_ApiaccountALL);
  }

  delete(idaccount: number): Observable<any> {
    return this.http.delete<any[]>(`${_Apiaccount}/${idaccount}`);
  }

  details(id: number) {
    return this.http.get<any>(`${_Apiaccount}/${id}`)
  }

  getProducts(page: number, pageSize: number) {
    const url = `${_ApiaccountALL}/?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }
  getProductsreg(page: number, pageSize: number) {
    const url = `${_Apiaccount}/?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  producttype1(page: number, pageSize: number) {
    const url = `${_Apiaccount}/type1?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  producttype3(page: number, pageSize: number) {
    const url = `${_Apiaccount}/type3?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  producttype4(page: number, pageSize: number) {
    const url = `${_Apiaccount}/type4?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }


  search(id: number) {
    const url = `${_Apiaccount}/${id}`;
    return this.http.get(url);
  }

  searchData(minPrice: number, maxPrice: number): Observable<any> {
    const params = new HttpParams()
      .set('minPrice', minPrice.toString())
      .set('maxPrice', maxPrice.toString());
    return this.http.get(`${_Api}/search?`, { params });
  }

  getUserData(): Observable<any> {
    const url = `${apiUrl}/user`;
    return this.http.get(url);
  }

  getDatatop(): Observable<any> {
    return this.http.get(`${apiUrl}/topspent`);
  }
}
