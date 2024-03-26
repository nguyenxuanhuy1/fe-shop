import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/all.service';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css']
})
export class SpinComponent {
  text: string = 'Chúc mừng bạn nhận được:';
  prizes = [
    '+0',
    'violet',
    'arthur',
    '+10000'];
  spinResult: string | null = null;
  spinHistory: string[] = [];
  isSpinning: boolean = false;



  constructor(
    private service: ServiceService,
    private http: HttpClient,) {
    this.rotateSegments = this.rotateSegments.bind(this);
  }

  spinWheel() {
    if (this.service.check) {
      this.http.get('http://localhost:2002/auth/user', { withCredentials: true }).subscribe(
        (res: any) => {
          const userData = res;
          if (userData.coin >= 9000) {

            // tách
            if (this.isSpinning) {
              return;
            }

            this.isSpinning = true;
            this.spinResult = null;
            this.rotateSegments();
            const parentElement = document.querySelector('.parent');
            parentElement?.classList.add('spinning');
            //hết

            const coinDifference = 9000;
            const spentDifference = 9000;
            const id = userData.id
            // Đẩy thông tin spent, coin, và id sang API
            this.http.patch('http://localhost:2002/auth/update-spent/' + id, {
              spentDifference: spentDifference,
              coinDifference: coinDifference
            }).subscribe(
              (res: any) => {
              },
            );
          } else {
            alert("có đủ tiền đâu !")
            return;
          }
        })
    } else {
      alert('bạn chưa đăng nhập')
    }
  }

  rotateSegments() {
    if (!this.isSpinning) {
      return;
    }

    const segments = document.querySelectorAll('.segment');
    const maxRotation = 260 + Math.floor(Math.random() * 120);
    let currentRotation = 0;
    let rotationSpeed = 1;

    const rotate = () => {
      currentRotation += rotationSpeed;
      segments.forEach((segment) => {
        const element = segment as HTMLElement;
        element.style.transform = `rotate(${currentRotation}deg)`;
      });

      if (currentRotation >= maxRotation) {
        clearInterval(rotationInterval);
        this.stopSpin();
      }
    };

    const rotationInterval = setInterval(rotate, 100 / 60);
  }

  stopSpin() {
    if (!this.isSpinning) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.prizes.length);
    this.spinResult = this.prizes[randomIndex];
    if (this.spinResult !== null) {
      this.spinHistory.push(this.spinResult);

      if (this.spinHistory.length > 10) {
        this.spinHistory.shift();
      }
      const spinHistoryDisplay = document.getElementById('spinHistoryDisplay');
      if (spinHistoryDisplay) {
        spinHistoryDisplay.innerHTML = this.spinHistory.join('<br>');
      }
    }
    this.isSpinning = false;

    const parentElement = document.querySelector('.parent');
    parentElement?.classList.remove('spinning');

    const segments = document.querySelectorAll('.segment');
    segments.forEach((segment) => {
      const element = segment as HTMLElement;
      element.style.transition = 'none';
      element.style.transform = 'rotate(0deg)';
    });
  }
}