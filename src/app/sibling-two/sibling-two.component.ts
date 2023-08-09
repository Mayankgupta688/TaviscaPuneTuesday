import { Component, OnInit } from '@angular/core';
import StockService from '../services/stock.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css']
})
export class SiblingTwoComponent {
  dataFromOne: string = "";
  constructor(private _dataService: StockService) {
    debugger;
    this._dataService.eventFromOne.subscribe((data: string) => {
      debugger;
      this.dataFromOne = data;
      alert(data)
    })
  }

  raiseEvent(): void {
    this._dataService.eventFromTwo.emit("Mayank");
  }

}
