import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1> {{counter}}</h1>

  <button (click)="incrementar(1)" >+1</button>
  <button (click)="resetnumber()">Reset</button>
  <button (click)="restar(1)">-1</button>


  `
})

export class CounterComponent {

  public counter: number = 10;

  incrementar(value: number) :void{
    this.counter += value;
  }
  restar(value: number) :void{
    this.counter -=value;
  }

  resetnumber() :void{
    this.counter = 10;
  }


}
