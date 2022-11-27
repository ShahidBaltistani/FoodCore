import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Shahid Hussain'; // string interpolation
  Isdisabled = false; // property binding

  myFunc(): string {
    return 'shhaid'
  }

  save(){
    alert('hello hi')
  }

  //class binding
}
