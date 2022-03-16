import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAttorneysComponent } from './our-attorneys.component';

describe('OurAttorneysComponent', () => {
  let component: OurAttorneysComponent;
  let fixture: ComponentFixture<OurAttorneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAttorneysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAttorneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
