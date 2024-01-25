import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionoffresComponent } from './gestionoffres.component';

describe('GestionoffresComponent', () => {
  let component: GestionoffresComponent;
  let fixture: ComponentFixture<GestionoffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionoffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
