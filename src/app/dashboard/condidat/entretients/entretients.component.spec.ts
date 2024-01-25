import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretientsComponent } from './entretients.component';

describe('EntretientsComponent', () => {
  let component: EntretientsComponent;
  let fixture: ComponentFixture<EntretientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntretientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
