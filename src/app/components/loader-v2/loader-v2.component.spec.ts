import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderV2Component } from './loader-v2.component';

describe('LoaderV2Component', () => {
  let component: LoaderV2Component;
  let fixture: ComponentFixture<LoaderV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
