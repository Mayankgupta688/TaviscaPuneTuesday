import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-stock',
  templateUrl: './filter-stock.component.html',
  styleUrls: ['./filter-stock.component.css']
})
export class FilterStockComponent {

  filterStock: string = "Mayank";
  @Output() notifyFilterChange = new EventEmitter<string>();
  constructor() { }

  updateFilterValue(data: any): void {
    debugger;
    this.notifyFilterChange.emit(data)
  }

}
