import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { seeCriteresComponent } from './seecriteres.component';

describe('seeCriteresComponent', () => {
  let component: seeCriteresComponent;
  let fixture: ComponentFixture<seeCriteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ seeCriteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(seeCriteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
