import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/all.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  link = 'http://localhost:2002/files/';
  items: any[] = [];
  page: number = 1;
  pageSize: number = 8;
  totalItems: number = 0;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.loadProducts();

  }
  loadProducts() {
    this.service.getProducts(this.page, this.pageSize).subscribe(
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

  ondelete(id: number) {
    this.service.delete(id).subscribe(response => {
      this.loadProducts();
    });
  }
}



