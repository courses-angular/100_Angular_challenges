import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaditCardInputComponent } from './creadit-card-input.component';

describe('CreaditCardInputComponent', () => {
  let component: CreaditCardInputComponent;
  let fixture: ComponentFixture<CreaditCardInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaditCardInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaditCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
