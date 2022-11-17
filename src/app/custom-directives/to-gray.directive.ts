import { Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appToGray]'
})
export class ToGrayDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.filter = 'grayscale(1)'
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.filter = 'grayscale(0)'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.filter = 'grayscale(1)'
  }
}
