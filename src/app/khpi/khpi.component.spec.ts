import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhpiComponent } from './khpi.component';

describe('KhpiComponent', () => {
  let component: KhpiComponent;
  let fixture: ComponentFixture<KhpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
