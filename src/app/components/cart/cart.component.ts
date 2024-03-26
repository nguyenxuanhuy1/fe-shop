import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/all.service';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  link: string = 'http://localhost:2002/files/';

  detailUserForm!: FormGroup;
  cartItems: any[] = [];
  typeResults: string[] = [];
  productId!: number;
  typeString = 'Đang Lỗi';



  constructor(
    private cartService: CartService,
    private service: ServiceService,
    private location: Location,
    private fb: FormBuilder,
    private http: HttpClient,

  ) {
    this.detailUserForm = this.fb.group({
      userId: ['', Validators.required],
      productData: this.fb.array([
        // this.fb.group({
        //   id: [],
        //   price: [],
        //   type: [],
        //   quantity: [],
        // }),
        // this.fb.group({
        //   id: [],
        //   price: [],
        //   type: [],
        //   quantity: [],
        // }),
      ]),
      totalPrice: ['', Validators.required],
      totalQuantity: [''],
      date: [new Date()]
    });
    this.calculateTotalPrice();
  }

  confirm() {


    if (this.service.check) {

      const body = this.detailUserForm.value;

      body.date = new Date();
      console.log(this.detailUserForm.value)
      body.productData = JSON.parse(localStorage.getItem("cartItems") || '[]');
      // this.detailUserForm.setControl('productData', this.fb.array(body.productData.map((p: any) => ({
      //   id: [p.id],
      //   price: [p.price],
      //   type: [p.type],
      //   quantity: [p.quantity],
      // }))));
      // const detailUser = this.detailUserForm.value;
      this.cartService.createDetailUser(body).subscribe(
        response => {
          alert('thanh toán thành công')

        });
    }
    else {
      alert('đăng nhập đi');
      return;
    }
  }


  ngOnInit(): void {

    this.loadCartItems();
    if (this.service.check) {
      this.getinfo();
    }


    var data = localStorage.getItem("cartItems");

    if (data) {
      var parsedData = JSON.parse(data);


      var typeMapping: Record<number, string> = {
        1: 'Acc Tổng Hợp',
        2: 'Acc Reg',
        3: 'Acc Clone',
        4: 'Acc Random'
      };

      this.typeResults = [];

      for (var key in parsedData) {
        if (parsedData.hasOwnProperty(key)) {
          var typeValue = parsedData[key]["type"];
          if (typeMapping.hasOwnProperty(typeValue)) {
            this.typeResults.push(typeMapping[typeValue]);
          }
        }
      }
    }
  }

  goBack() {
    this.location.back();
  }

  loadCartItems() {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      this.cartItems = Object.values(JSON.parse(cartItemsString));
    }
  }

  Deleteitem(productId: string) {
    const data = localStorage.getItem("cartItems");
    if (data) {
      const parsedData = JSON.parse(data);
      const indexToRemove = parsedData.findIndex((item: any) => item.id === productId);
      if (indexToRemove !== -1) {
        parsedData.splice(indexToRemove, 1)
        localStorage.setItem("cartItems", JSON.stringify(parsedData));
        this.loadCartItems();
      }
    }
  }
  calculateTotalPrice() {
    const cartsString = localStorage.getItem("cartItems");

    if (cartsString) {
      const carts = JSON.parse(cartsString);
      let total: number = 0;

      for (const key in carts) {
        if (carts.hasOwnProperty(key)) {
          const item = carts[key];
          total += item.quantity * item.price;
        }
      }
      this.detailUserForm.patchValue({
        totalPrice: total
      });

      return total;
    }

    return 0;
  }


  calculateTotalQuantity() {
    const cartsString = localStorage.getItem("cartItems");

    if (cartsString) {
      const carts = JSON.parse(cartsString);
      let totalQuantity = 0;

      for (const key in carts) {
        if (carts.hasOwnProperty(key)) {
          const item = carts[key];
          totalQuantity += item.quantity;
        }
      }
      this.detailUserForm.patchValue({
        totalQuantity: totalQuantity
      });

      return totalQuantity;
    }

    return 0;
  }


  getinfo() {
    this.http.get('http://localhost:2002/auth/user', { withCredentials: true }).subscribe(
      (res: any) => {
        const userData = res;
        const userIdFromServer = userData.id;
        this.detailUserForm.patchValue({
          userId: userIdFromServer
        });
      }
    )
  }
}



