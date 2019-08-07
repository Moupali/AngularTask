import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioComponent3Component } from './scenario-component3.component';

describe('ScenarioComponent3Component', () => {
  let component: ScenarioComponent3Component;
  let fixture: ComponentFixture<ScenarioComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
