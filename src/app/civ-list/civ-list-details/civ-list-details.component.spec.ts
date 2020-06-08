import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivListDetailsComponent } from './civ-list-details.component';

describe('CivListDetailsComponent', () => {
  let component: CivListDetailsComponent;
  let fixture: ComponentFixture<CivListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
