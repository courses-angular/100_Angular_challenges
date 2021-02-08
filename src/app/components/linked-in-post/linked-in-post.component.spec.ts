import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInPostComponent } from './linked-in-post.component';

describe('LinkedInPostComponent', () => {
  let component: LinkedInPostComponent;
  let fixture: ComponentFixture<LinkedInPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedInPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
