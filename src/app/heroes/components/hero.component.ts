import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman';
  public age: number = 45;

  get capitalizedName():String {
    return this.name.toUpperCase();

  }

  getHeroDescription(): string{

    return `${ this.name} - ${ this.age}`;
  }

  chagenHero(): void {
    this.name =  "Alex";
  }

  changeAge(){
    this.age = 25;
  }

  resetForm(){
    this.name = "Thor";
    this.age = 45;
  }
}


