import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioComponent2Component } from './scenario-component2.component';

describe('ScenarioComponent2Component', () => {
  let component: ScenarioComponent2Component;
  let fixture: ComponentFixture<ScenarioComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
