import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/all.service';

@Component({
  selector: 'app-top-player',
  templateUrl: './top-player.component.html',
  styleUrls: ['./top-player.component.css']
})
export class TopPlayerComponent implements OnInit {

  constructor(private service: ServiceService) { }
  data: any[] = [];

  ngOnInit(): void {
    this.service.getDatatop().subscribe(
      (result) => {
        this.data = result;
        //đổi chỗ cho 2 phần tử trong mảng
        if (this.data.length >= 2) {
          let temp: any = this.data[0];
          this.data[0] = this.data[1];
          this.data[1] = temp;
        }
      }
    );
  }

}
