import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nelso-stock',
  templateUrl: './nelso-stock.component.html',
  styleUrls: ['./nelso-stock.component.css']
})
export class NelsoStockComponent implements OnInit {

  stockPrice: number = 400;
  constructor() { }

  ngOnInit(): void {
  }

}
