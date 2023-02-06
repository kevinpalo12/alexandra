import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mal-poema',
  templateUrl: './mal-poema.component.html',
  styleUrls: ['./mal-poema.component.scss']
})
export class MalPoemaComponent {

  constructor(private router: Router) {


  }
  navegacion() {
    this.router.navigate(['/' ]);

  }
}
