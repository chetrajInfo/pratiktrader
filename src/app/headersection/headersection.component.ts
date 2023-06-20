import { Component } from '@angular/core';

@Component({
  selector: 'app-headersection',
  templateUrl: './headersection.component.html',
  styleUrls: ['./headersection.component.css']
})
export class HeadersectionComponent {
  navIsActive = false;

  toggleNav() {
    this.navIsActive = !this.navIsActive;
  }
}
