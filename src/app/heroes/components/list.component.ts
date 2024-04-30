import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Sipiderman', 'Iroman', 'She Hulk', 'Thor'];
  public deletedHero: string = '';

  removeLastHero():void{
    const deletedHero = this.heroNames.pop();
    console.log({deletedHero})
  }
}

