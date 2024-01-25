import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesEComponent } from './demandes.component';

describe('DemandesEComponent', () => {
  let component: DemandesEComponent;
  let fixture: ComponentFixture<DemandesEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
