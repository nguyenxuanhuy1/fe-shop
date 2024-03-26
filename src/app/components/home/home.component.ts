import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  file = 'file-1690026191879-222143135-logo.png';
  baseUrl = `http://localhost:2002/upload/`;

  getPath(file: string) {
    return `${this.baseUrl}${file}`
  }
}
