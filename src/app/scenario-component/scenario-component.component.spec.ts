import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioComponentComponent } from './scenario-component.component';

describe('ScenarioComponentComponent', () => {
  let component: ScenarioComponentComponent;
  let fixture: ComponentFixture<ScenarioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
