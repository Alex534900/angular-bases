import { NgModule } from '@angular/core'
import { CounterComponent } from './components/counter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
  imports:[
    CommonModule,
  ]
})

export class CounterModules{}
