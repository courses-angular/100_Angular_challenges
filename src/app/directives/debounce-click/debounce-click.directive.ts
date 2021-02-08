import {Directive, HostListener, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[ylDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  private click$ = new Subject();
  public subscription: Subscription;
  @Output() public debounceClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() {

  }

  ngOnInit(): void {
    const debounceTimeInMs = 500;

    this.subscription = this.click$.pipe(
      debounceTime(debounceTimeInMs)
    ).subscribe((value) => this.debounceClick.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event']) clickOnButton(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.click$.next();
  }


}
