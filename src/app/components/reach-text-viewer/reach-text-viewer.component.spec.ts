import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachTextViewerComponent } from './reach-text-viewer.component';

describe('ReachTextViewerComponent', () => {
  let component: ReachTextViewerComponent;
  let fixture: ComponentFixture<ReachTextViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachTextViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachTextViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
