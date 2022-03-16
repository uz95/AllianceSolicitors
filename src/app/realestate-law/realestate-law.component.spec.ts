import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateLawComponent } from './realestate-law.component';

describe('RealestateLawComponent', () => {
  let component: RealestateLawComponent;
  let fixture: ComponentFixture<RealestateLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestateLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
