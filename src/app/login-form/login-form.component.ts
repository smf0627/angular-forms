import { Component, OnInit } from '@angular/core';

export class Login {

  constructor(public name: string, public password?: string) {

  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  model = new Login('Dr. IQ', 'Chucky');

  ngOnInit() {
  }

  onSubmitted() {
    console.log('Form was submitted');
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
