import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appPriorityStatus]",
})
export class PriorityStatusDirective implements OnInit {
  @Input("appPriorityStatus") appPriorityStatus: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appPriorityStatus == 1) {
      this.renderer.setStyle(this.el.nativeElement, "color", "red");
      this.renderer.setProperty(this.el.nativeElement, "innerHTML", "High");
    } else if (this.appPriorityStatus == 2) {
      this.renderer.setStyle(this.el.nativeElement, "color", "orange");
      this.renderer.setProperty(this.el.nativeElement, "innerHTML", "Medium");
    } else if (this.appPriorityStatus == 3) {
      this.renderer.setStyle(this.el.nativeElement, "color", "green");
      this.renderer.setProperty(this.el.nativeElement, "innerHTML", "Low");
    }
  }
}
