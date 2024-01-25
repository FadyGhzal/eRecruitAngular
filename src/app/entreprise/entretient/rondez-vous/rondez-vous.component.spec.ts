import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RondezVousComponent } from './rondez-vous.component';

describe('RondezVousComponent', () => {
  let component: RondezVousComponent;
  let fixture: ComponentFixture<RondezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
