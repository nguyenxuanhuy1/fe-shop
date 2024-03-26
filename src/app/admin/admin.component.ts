import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/all.service';
import { pig } from '../pig/pig';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // isAdmin: number = 0;

  // constructor(
  //   private http: HttpClient,
  //   private service: ServiceService
  // ) { }

  // ngOnInit(): void {
  //   this.http.get('http://localhost:2002/auth/user', { withCredentials: true }).subscribe(
  //     (res: any) => {
  //       if (res && res.isAdmin) {
  //         this.isAdmin = 1;
  //       } else {
  //         this.isAdmin = 0;
  //       }
  //     },
  //   );
  // }
}
