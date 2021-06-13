import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css'],
})
export class HighlightsComponent implements OnInit {
  categories = [
    'supermarket',
    'health & beauty',
    'home & office',
    'phones & tablets',
    'computing',
    'electronics',
    'fashion',
    'gaming',
    'baby products',
    'sporting-goods',
    'garden & outdoors',
    'other categories',
  ];

  quickLinks = [
    {
      title: 'help center',
      phrase: 'guide to customer care',
    },
    { title: 'easy return', phrase: 'quick refund' },
    { title: 'sell on store', phrase: 'millions of visitors' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
