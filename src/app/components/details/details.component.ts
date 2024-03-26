import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/all.service';
import { CartService } from '../cart/cart.service';
import { Products } from '../models/products';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @ViewChild('idElement') idElement!: ElementRef;
  @ViewChild('priceElement') priceElement!: ElementRef;

  constructor(private service: ServiceService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  product!: Products;
  items: any[] = [];
  id: any;
  link = 'http://localhost:2002/files/';
  carts: any[] = [];


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { this.id = params.get('id'); });
    this.getbyid(this.id)
  }
  getbyid(id: any) {
    this.service.details(id).subscribe((res) => {
      this.items = [res];
    })
  }
  AddToCart() {

    if (this.service.check) {

      const selectedItem = this.items[0];
      const selectedType = selectedItem.type;

      const idText = this.idElement.nativeElement.textContent;
      const priceText = this.priceElement.nativeElement.textContent;
      const cartItem = {
        id: idText,
        price: priceText,
        type: selectedType,
        quantity: 1,

      };

      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const item = cartItems.find((e: any) => e.id === cartItem.id);
      if (item) {
        item.quantity += 1;
      } else {
        cartItems.push(cartItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert('da mua')

    } else {
      alert('yeu cầu bạn đăng nhập')
    }
  }
}
