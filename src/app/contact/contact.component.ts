import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  joinForm = new FormGroup({
    fullname: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    details: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.joinForm.value);
    // Here, you would typically send the form data to a server-side script 
    // to handle sending the email. This could be done using Angular's HttpClient.
  }
}
