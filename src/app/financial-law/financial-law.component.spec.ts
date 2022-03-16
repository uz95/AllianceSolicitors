import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialLawComponent } from './financial-law.component';

describe('FinancialLawComponent', () => {
  let component: FinancialLawComponent;
  let fixture: ComponentFixture<FinancialLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
