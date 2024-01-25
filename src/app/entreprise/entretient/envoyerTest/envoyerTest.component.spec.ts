import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { envoyerTestComponent } from './envoyerTest.component';

describe('envoyerTestComponent', () => {
  let component: envoyerTestComponent;
  let fixture: ComponentFixture<envoyerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ envoyerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(envoyerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
