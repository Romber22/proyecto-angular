import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  public title: String;
  public subtitle: String;
  public email: String;

  constructor() {
    this.title = "Andrea Romero";
    this.subtitle = "Desarrolladora web";
    this.email = "andrearomber@gmail.com";
  }
}
