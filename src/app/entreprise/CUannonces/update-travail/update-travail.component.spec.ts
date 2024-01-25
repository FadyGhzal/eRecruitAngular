import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTravailComponent } from './update-travail.component';

describe('UpdateTravailComponent', () => {
  let component: UpdateTravailComponent;
  let fixture: ComponentFixture<UpdateTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
