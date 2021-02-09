import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[ylRipple]'
})
export class RippleDirective {
  @Input() appRipple = 'ripple';

  constructor(private element: ElementRef, private render: Renderer2) {
  }

  @HostListener('mouseenter') onHover(): void {
    this.render.addClass(this.element.nativeElement, this.appRipple);
  }
}
