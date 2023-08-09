import { Component } from "@angular/core";
import { retry } from "rxjs";

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

    filteredStockList = this.stockArray;

    filterList(stockName: string) {
        this.filteredStockList = this.stockArray.filter(function (stock) {
            return stock.stockName.indexOf(stockName) > -1
        })
    }

    updatePrice(updatedStockData: any) {
        var updateIndex = -1;
        debugger;
        this.stockArray.forEach((stock, index) => {
            if (stock.stockName == updatedStockData.stockName) {
                updateIndex = index
            }
        })
        this.stockArray[updateIndex].stockValue = updatedStockData.updatedPrice;
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
            stockUrl: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI"
        });
    }
}