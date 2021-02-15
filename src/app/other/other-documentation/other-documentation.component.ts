import {Component, OnInit} from '@angular/core';
import {fadeInOutAnimation} from '../animations/fade-in-out/fade-in-out.animation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IFormDirty} from '../guards/form-dirty';
import {slideRightAnimation} from '../animations/slide-right/slide-right.animation';

@Component({
  selector: 'yl-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOutAnimation, slideRightAnimation]
})
export class OtherDocumentationComponent implements OnInit, IFormDirty {
  isInDOM: boolean = true;
  form: FormGroup;
  tabs: { title: string, active: boolean }[] = [
    {title: 'Tab 1', active: true},
    {title: 'Tab 2', active: false},
  ];
  selectedTab = 0;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit(): void {
    console.log('Form', this.form.value);
    this.form.reset(this.form.value);
  }
}
