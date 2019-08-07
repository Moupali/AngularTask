import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario-component',
  templateUrl: './scenario-component.component.html',
  styleUrls: ['./scenario-component.component.css']
})
export class ScenarioComponentComponent implements OnInit {
  logMessage(value)
  {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
