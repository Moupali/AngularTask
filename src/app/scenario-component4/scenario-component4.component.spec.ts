import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioComponent4Component } from './scenario-component4.component';

describe('ScenarioComponent4Component', () => {
  let component: ScenarioComponent4Component;
  let fixture: ComponentFixture<ScenarioComponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioComponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
