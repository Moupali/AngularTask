import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-scenario-component3',
  templateUrl: './scenario-component3.component.html',
  styleUrls: []
})
export class ScenarioComponent3Component implements OnInit {

  @Input('parentData') public name;
 // @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  

}
