import { Component } from "@angular/core";

@Component({
    templateUrl: "hello-world.component.html",
    selector: "stock-component",
    styleUrls: ["hello-world-other.component.css", "hello-world.component.css"]
})
export class StockComponent {
    userName = "Mayank Gupta";
}