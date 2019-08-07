import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioComponent5Component } from './scenario-component5.component';

describe('ScenarioComponent5Component', () => {
  let component: ScenarioComponent5Component;
  let fixture: ComponentFixture<ScenarioComponent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioComponent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
