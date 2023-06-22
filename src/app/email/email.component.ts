import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  emailForm: FormGroup | any;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  sendEmail(): void {
    this.http.post('/api/send-email', this.emailForm.value).subscribe();
  }
}
