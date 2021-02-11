import {Component, OnInit} from '@angular/core';
import {fadeInOutAnimation} from '../animations/fade-in-out/fade-in-out.animation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IFormDirty} from '../guards/form-dirty';

@Component({
  selector: 'yl-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOutAnimation]
})
export class OtherDocumentationComponent implements OnInit, IFormDirty {
  isInDOM: boolean = true;
  form: FormGroup;

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
