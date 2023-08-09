import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface StockUpdate {
  stockName: string;
  updatedPrice: string
}
@Component({
  selector: 'stock-detail',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  @Input() stock: any = {};
  @Output() triggerDelete = new EventEmitter<string>()
  @Output() triggerSampleUpdate = new EventEmitter<void>();
  @Output() triggerPriceUpdate = new EventEmitter<StockUpdate>()

  constructor(private _httpClient: HttpClient) {
    console.log(this.stock)
  }

  ngOnInit() {
    setInterval(() => {
      var stockUrl = this.stock.stockUrl;

      this._httpClient.get(stockUrl).subscribe((response: any) => {
        var newPrice = response.data.pricecurrent;
        this.triggerPriceUpdate.emit({
          stockName: this.stock.stockName,
          updatedPrice: newPrice
        })
      })
    }, 1000)
  }

  deleteEmployee(stockName: string): void {
    this.triggerDelete.emit(stockName);
  }

  triggerUpdate(): void {
    this.triggerSampleUpdate.emit();
  }

}
