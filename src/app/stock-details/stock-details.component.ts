import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stock-detail',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
  @Input() stock: any = {};
  @Output() triggerDelete = new EventEmitter<string>()
  @Output() triggerSampleUpdate = new EventEmitter<void>()

  constructor() { }

  deleteEmployee(stockName: string): void {
    debugger;
    this.triggerDelete.emit(stockName);
  }

  triggerUpdate(): void {
    this.triggerSampleUpdate.emit();
  }

}
