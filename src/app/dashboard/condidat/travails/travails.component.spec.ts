import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailsComponent } from './travails.component';

describe('TravailsComponent', () => {
  let component: TravailsComponent;
  let fixture: ComponentFixture<TravailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
