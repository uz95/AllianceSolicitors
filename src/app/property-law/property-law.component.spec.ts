import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLawComponent } from './property-law.component';

describe('PropertyLawComponent', () => {
  let component: PropertyLawComponent;
  let fixture: ComponentFixture<PropertyLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
