import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateLawComponent } from './corporate-law.component';

describe('CorporateLawComponent', () => {
  let component: CorporateLawComponent;
  let fixture: ComponentFixture<CorporateLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
