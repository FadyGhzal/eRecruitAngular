import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonncesComponent } from './anonnces.component';

describe('AnonncesComponent', () => {
  let component: AnonncesComponent;
  let fixture: ComponentFixture<AnonncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
