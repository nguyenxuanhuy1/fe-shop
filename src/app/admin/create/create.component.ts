import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  postform: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {

    this.postform = this.fb.group({
      // idaccount: [null, [Validators.required]],
      gem: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      skin: [null, Validators.required],
      price: [null, [Validators.required]],
      generals: [null, [Validators.required]],
      rank: ['', Validators.required],
      status: ['', Validators.required],
      img: ['', Validators.required],
      type: [null, [Validators.required]],
      add: [null, [Validators.required]],
    });
  }
  file: any;

  getFile(event: any) {
    this.file = event.target.files[0];
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      this.http.post<any>("http://localhost:2002/files", formData).subscribe(res => {

        const fileName = res.filename;

        this.postform.get('img')?.setValue(fileName);
      });
    }
  }

  submit() {
    if (this.postform.invalid) {
      alert('chưa điền đủ');
      return;
    }
    this.submittwo();


    let formData = new FormData();
    formData.set('file', this.file);
    this.http.post('http://localhost:2002/files', formData).subscribe((res) => {
    });

  }
  submittwo() {
    this.http.post('http://localhost:2002/acc-reg', this.postform.value).subscribe((res) => {
      alert("thành công")
    });
  }

}
