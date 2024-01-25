import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesStageComponent } from './demandes_stage.component';

describe('DemandesStageComponent', () => {
  let component: DemandesStageComponent;
  let fixture: ComponentFixture<DemandesStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
