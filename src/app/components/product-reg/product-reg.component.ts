
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/all.service';

@Component({
  selector: 'app-product-reg',
  templateUrl: './product-reg.component.html',
  styleUrls: ['./product-reg.component.css']
})
export class ProductRegComponent implements OnInit {
  link = 'http://localhost:2002/files/';
  items: any[] = [];
  page: number = 1;
  pageSize: number = 4;
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
    this.service.getProductsreg(this.page, this.pageSize).subscribe(
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
