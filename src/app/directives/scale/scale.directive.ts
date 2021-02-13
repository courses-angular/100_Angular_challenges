import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[ylScale]'
})
export class ScaleDirective {

  constructor(private el: ElementRef, private render: Renderer2) {
  }

  @HostListener('mouseover')
  moiseOver(): void {
    this.render.setStyle(this.el.nativeElement, 'transition', 'all 0.3s');
    this.render.setStyle(this.el.nativeElement, 'transform', 'scale(1.2)');
    // Another way
    // this.el.nativeElement.style.transition = 'all 0.3s';
    // this.el.nativeElement.style.transform = 'scale(1.2)';
  }

  @HostListener('mouseout')
  moiseOut(): void {
    this.render.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)');
    // Another way
    // this.el.nativeElement.style.transform = 'scale(1)';
  }

}
