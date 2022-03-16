import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilLigitationComponent } from './civil-ligitation.component';

describe('CivilLigitationComponent', () => {
  let component: CivilLigitationComponent;
  let fixture: ComponentFixture<CivilLigitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilLigitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilLigitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
