import { Component, OnInit } from '@angular/core';
import StockService from '../services/stock.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent implements OnInit {

  dataFromTwo: string = "";
  constructor(private _dataService: StockService) {
    debugger;

    this._dataService.emitAlert();

    this._dataService.eventFromOne.subscribe((data) => {
      alert("From the Same Componet: " + data)
    })
  }

  ngOnInit(): void {
    this._dataService.eventFromTwo.subscribe((data: string) => {
      this.dataFromTwo = data;
      alert("Message from Two")
    })
  }

  raiseEvent() {
    this._dataService.eventFromOne.emit("TechnoFunnel");
  }

}
