import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishprofileComponent } from './finishprofile.component';

describe('FinishprofileComponent', () => {
  let component: FinishprofileComponent;
  let fixture: ComponentFixture<FinishprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
