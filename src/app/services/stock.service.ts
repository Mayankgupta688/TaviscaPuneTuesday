import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export default class StockService {

    eventFromOne = new EventEmitter<string>();
    eventFromTwo = new EventEmitter<string>();

    emitAlert() {
        alert("Hi")
    }

    stockList: any = [{
        stockName: "SBI",
        stockValue: 300,
        stockStatus: "UnderPriced",
        stockUrl: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI"
    }, {
        stockName: "NALCO",
        stockValue: 310,
        stockStatus: "OverPriced",
        stockUrl: "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NAC"
    }, {
        stockName: "ADANI",
        stockValue: 300,
        stockStatus: "UnderPriced",
        stockUrl: "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NAC"
    }];
}