import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[applyColor]"
})
export default class ApplyColorDirective {
    constructor(private element: ElementRef) {
        this.element.nativeElement.style.color = "green";
        this.element.nativeElement.onmouseenter = function () {
            alert("Mouse Over")
        }
    }
}