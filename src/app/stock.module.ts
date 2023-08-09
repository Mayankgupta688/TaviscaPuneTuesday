import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StockComponent } from "./hello-world/hello-world.component";
import { NelsoStockComponent } from './nelso-stock/nelso-stock.component';
import StockListComponent from "./stock-list/stock-list.component";
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { FilterStockComponent } from './filter-stock/filter-stock.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SiblingOneComponent } from './sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './sibling-two/sibling-two.component';

import { RouterModule } from "@angular/router"
import { EmployeeListComponent } from "./routing/employee-list/employee.list.component";
import { EmployeeDetailsComponent } from "./routing/employee-details/employee-details.component";
import { AppComponent } from "./routing/app-component/app.component";
import EmployeeGuard from "./routing/guards/employee.guard";
import ApplyColorDirective from "./directive/color.directive";
import DelayRenderingDirective from "./directive/delay.directive";
import UserFormComponent from "./user-form/user-form.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: "", component: EmployeeListComponent },
            { path: "list", component: EmployeeListComponent },
            {
                path: "details/:userName/:userAge",
                component: EmployeeDetailsComponent,
                canActivate: [EmployeeGuard]
            }
        ])
    ],
    declarations: [UserFormComponent, DelayRenderingDirective, ApplyColorDirective, EmployeeListComponent, EmployeeDetailsComponent, AppComponent, StockComponent, NelsoStockComponent, StockListComponent, StockDetailsComponent, FilterStockComponent, SiblingOneComponent, SiblingTwoComponent],
    bootstrap: [UserFormComponent]
})
export default class StockModule { }
