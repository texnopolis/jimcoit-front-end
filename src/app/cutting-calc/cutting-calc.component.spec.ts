import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingCalcComponent } from './cutting-calc.component';

describe('CuttingCalcComponent', () => {
  let component: CuttingCalcComponent;
  let fixture: ComponentFixture<CuttingCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttingCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
