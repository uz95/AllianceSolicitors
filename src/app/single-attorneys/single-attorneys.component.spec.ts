import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAttorneysComponent } from './single-attorneys.component';

describe('SingleAttorneysComponent', () => {
  let component: SingleAttorneysComponent;
  let fixture: ComponentFixture<SingleAttorneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAttorneysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAttorneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
