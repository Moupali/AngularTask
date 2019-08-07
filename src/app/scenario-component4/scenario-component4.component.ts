import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scenario-component4',
  templateUrl: './scenario-component4.component.html',
  styleUrls: ['./scenario-component4.component.css']
})
export class ScenarioComponent4Component implements OnInit {

  @Input('parentData')public name;
  @Output() public childEvent =new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hey Stakeroute');
  }
}
