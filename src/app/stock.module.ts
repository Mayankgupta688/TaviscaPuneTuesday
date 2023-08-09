import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StockComponent } from "./hello-world/hello-world.component";
import { NelsoStockComponent } from './nelso-stock/nelso-stock.component';
import StockListComponent from "./stock-list/stock-list.component";
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { FilterStockComponent } from './filter-stock/filter-stock.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SiblingOneComponent } from './sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './sibling-two/sibling-two.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [StockComponent, NelsoStockComponent, StockListComponent, StockDetailsComponent, FilterStockComponent, SiblingOneComponent, SiblingTwoComponent],
    bootstrap: [SiblingOneComponent, SiblingTwoComponent]
})
export default class StockModule { }

export const userName = "Mayank";
export const userAge = "10";
export const userDesignation = "Mayank";