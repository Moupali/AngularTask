import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario-component5',
  templateUrl: './scenario-component5.component.html',
  styleUrls: ['./scenario-component5.component.css']
})
export class ScenarioComponent5Component implements OnInit {

  constructor() { }

  @Output() public childEvent=new EventEmitter();

  sendEventToParent(value)
  {
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
