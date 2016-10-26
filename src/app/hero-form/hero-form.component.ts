import { Component, OnInit } from '@angular/core';

export class Hero {

  constructor(public name: string, public power: string, public alterEgo?: string) {

  }
}

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: [ './hero-form.component.css' ]
})
export class HeroFormComponent implements OnInit {

  powers = [ 'Really Smart', 'Super Flexible', 'Super Cold', 'Weather Changer' ];

  model = new Hero('Dr. IQ', this.powers[ 0 ], 'Chucky');

  constructor() { }

  ngOnInit() {
  }

  onSubmitted() {
    console.log('Form was submitted');
  }


  get diagnostic() { return JSON.stringify(this.model); }
}
