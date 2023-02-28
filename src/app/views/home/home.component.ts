import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  options: any;

  constructor() {}

  ngOnInit(): void {
    this.options = {
      center: { lat: -3.1303, lng:  -60.0234 },
      zoom: 15,
    };
  }
}
