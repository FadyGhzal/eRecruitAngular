import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecondidatComponent } from './profilecondidat.component';

describe('ProfilecondidatComponent', () => {
  let component: ProfilecondidatComponent;
  let fixture: ComponentFixture<ProfilecondidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilecondidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
