import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneUnitTableComponent } from './one-unit-table.component';

describe('OneUnitTableComponent', () => {
  let component: OneUnitTableComponent;
  let fixture: ComponentFixture<OneUnitTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneUnitTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneUnitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
