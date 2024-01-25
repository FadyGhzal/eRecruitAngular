import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesFormationComponent } from './demandes_formation.component';

describe('DemandesFormationComponent', () => {
  let component: DemandesFormationComponent;
  let fixture: ComponentFixture<DemandesFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
