import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scenario-child',
  templateUrl: './scenario-child.component.html',
  styleUrls: ['./scenario-child.component.css']
})
export class ScenarioChildComponent implements OnInit {
  public message;

  constructor() { }
  @Output() public childEvent=new EventEmitter();

  public forward(value)
  {
    // this.message=value.ToString();
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
