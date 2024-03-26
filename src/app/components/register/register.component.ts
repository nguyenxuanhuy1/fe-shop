import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  submit(): void {
    this.http.post('http://localhost:2002/auth/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }
}
