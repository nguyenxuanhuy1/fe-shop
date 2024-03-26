import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pig } from 'src/app/pig/pig';
import { LoginComponent } from '../login/login.component';
import { ServiceService } from 'src/app/service/all.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private service: ServiceService
  ) { }

  authenticated = false;
  Apiauth = 'http://localhost:2002/auth/';
  message = '';
  coin: number = 1;
  ngOnInit() {

    if (this.service.check) {
      this.http.get('http://localhost:2002/auth/user', { withCredentials: true }).subscribe(
        (res: any) => {
          this.message = `chào ${res.name}`;
          this.coin = res.coin;
          pig.authpig.emit(true);
        },
      )
    } else {
      return;
    }

    pig.authpig.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }
  logout(): void {
    this.http.post('http://localhost:2002/auth/out', {}, { withCredentials: true })
      .subscribe(
        (response: any) => {
          if (response && response.message === "Đăng xuất thành công") {
            this.service.check = false;
          } else {
            console.error('Lỗi trong quá trình đăng xuất hoặc phiên đăng nhập đã hết hạn.');
          }
        },
      );
  }
}
