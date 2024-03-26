import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ServiceService } from 'src/app/service/all.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private service: ServiceService,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }
  goBack() {
    this.location.back();
  }

  submit(): void {

    this.http.post('http://localhost:2002/auth/login', this.form.getRawValue()).subscribe(
      (response: any) => {
        if (response && response.message === "Đăng nhập thành công ^_^") {
          this.http.post('http://localhost:2002/auth/login', this.form.getRawValue(),
            { withCredentials: true })
            .subscribe(() => { this.service.setCheckValue(true); this.goBack() });
        } else {
          return;
        }
      },
    );
  }
}
