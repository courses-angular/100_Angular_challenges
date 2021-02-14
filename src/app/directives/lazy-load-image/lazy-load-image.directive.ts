import {AfterViewInit, Directive, ElementRef, HostBinding, Inject, Input, OnDestroy, OnInit} from '@angular/core';

@Directive({
  selector: 'img[ylLazyLoadImage]'
})
export class LazyLoadImageDirective implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('attr.src') private srcAttribute = null;
  @Input() src: string;
  observer: IntersectionObserver;


  ngOnInit(): void {

  }

  constructor(private elementRef: ElementRef, @Inject('Window') private window: Window) {
  }

  ngAfterViewInit(): void {
    if (this.canLazyLoad()) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(({isIntersecting}) => {
          if (isIntersecting) {
            this.loadImageRegular();
            this.observer.unobserve(this.elementRef.nativeElement);
          }
        });
      });
      this.observer.observe(this.elementRef.nativeElement);
    } else {
      this.loadImageRegular();
    }
  }

  loadImageRegular(): void {
    this.srcAttribute = this.src;
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  canLazyLoad(): boolean {
    return this.window && this.window.hasOwnProperty('IntersectionObserver');
  }

}
