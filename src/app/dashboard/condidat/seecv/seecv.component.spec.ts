import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { seeCVComponent } from './seecv.component';

describe('seeCVComponent', () => {
  let component: seeCVComponent;
  let fixture: ComponentFixture<seeCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ seeCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(seeCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
