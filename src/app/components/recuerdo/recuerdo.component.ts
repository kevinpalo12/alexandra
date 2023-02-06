import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuerdo',
  templateUrl: './recuerdo.component.html',
  styleUrls: ['./recuerdo.component.scss']
})
export class RecuerdoComponent {
  constructor(private router: Router) {


  }
  navegacion() {
    this.router.navigate(['/' ]);

  }
}
