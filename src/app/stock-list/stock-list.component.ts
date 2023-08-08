import { Component } from "@angular/core";

@Component({
    templateUrl: "stock-list.component.html",
    selector: "stock-list",
    styleUrls: ["stock-list.component.css"]
})
export default class StockListComponent {
    stockArray = [{
        stockName: "SBI",
        stockValue: 300,
        stockStatus: "UnderPriced",
        stockUrl: ""
    }, {
        stockName: "NALCO",
        stockValue: 310,
        stockStatus: "OverPriced",
        stockUrl: ""
    }, {
        stockName: "ADANI",
        stockValue: 300,
        stockStatus: "UnderPriced",
        stockUrl: ""
    }];

    filteredStockList = this.stockArray;

    filterList(stockName: string) {
        this.filteredStockList = this.stockArray.filter(function (stock) {
            return stock.stockName.indexOf(stockName) > -1
        })
    }

    deleteStockFromList(stockName: string) {
        this.stockArray = this.stockArray.filter(function (stock) {
            return !(stock.stockName == stockName)
        })
    }

    sampleTrigger() {
        alert("Button Clicked")
    }

    calculatePriceValue(stock: any) {
        if (stock.stockValue == 310) {
            return "orangeValuedStock"
        } else if (stock.stockStatus == "OverPriced") {
            return "overValuedStock";
        } else {
            return "underValuedStock";
        }
    }

    addStockToList() {
        this.stockArray.push({
            stockName: "RELIANCE",
            stockValue: 300,
            stockStatus: "OverPriced",
            stockUrl: ""
        });
    }
}