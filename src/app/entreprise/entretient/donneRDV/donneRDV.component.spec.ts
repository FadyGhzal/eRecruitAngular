import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { donneRDVComponent } from './donneRDV.component';

describe('donneRDVComponent', () => {
  let component: donneRDVComponent;
  let fixture: ComponentFixture<donneRDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ donneRDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(donneRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
