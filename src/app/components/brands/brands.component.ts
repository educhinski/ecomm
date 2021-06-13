import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands = [
    { name: 'official stores', color: '#f94229' },
    { name: 'global', color: '#8480f7' },
    { name: 'airtime & bills', color: '#67cf3c' },
    { name: 'food', color: '#f9462a' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
