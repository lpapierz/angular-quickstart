import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './../templates/hero-details.html',
})
export class AppComponent {
  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1, name: 'WindStorm'
  };
}

class Hero {
  id: number;
  name: string;
}
