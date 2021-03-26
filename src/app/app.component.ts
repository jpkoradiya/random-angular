import { Component } from '@angular/core';

function log(){
  console.log("Hi there");
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-intro';

  constructor(){
    console.log("Method from the constructor");
  }

  aSimpleMethod(){
    console.log("Hi from Simple Method!");
  }
}
