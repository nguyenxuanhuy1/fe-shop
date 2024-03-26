import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/all.service';

@Component({
  selector: 'app-accrandom',
  templateUrl: './accrandom.component.html',
  styleUrls: ['./accrandom.component.css']
})
export class AccrandomComponent {
  link = 'http://localhost:2002/files/';
  items: any[] = [];
  page: number = 1;
  pageSize: number = 2;
  totalItems: number = 0;

  constructor(private router: Router,
    private service: ServiceService,) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
      this.loadProducts();
    });
  }

  loadProducts() {
    this.service.producttype4(this.page, this.pageSize).subscribe(
      (data: any) => {
        this.items = data.items;
        this.totalItems = data.total;
      }
    );
  }

  pageChanged(event: number) {
    this.page = event;
    this.loadProducts();
  }
}
