import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigListComponent } from './big-list.component';

describe('BigListComponent', () => {
  let component: BigListComponent;
  let fixture: ComponentFixture<BigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
