import { Directive, ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[delayRendering]"
})
export default class DelayRenderingDirective {
    constructor(private template: TemplateRef<any>, private container: ViewContainerRef, private element: ElementRef) {
        setTimeout(() => {
            //  this.template.elementRef.nativeElement.style.color = "red";
            this.container.createEmbeddedView(this.template);

        }, 5000)
    }
}