import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDocumentationComponent } from './components-documentation.component';

describe('ComponentsDocumentationComponent', () => {
  let component: ComponentsDocumentationComponent;
  let fixture: ComponentFixture<ComponentsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
