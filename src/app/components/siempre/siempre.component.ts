import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siempre',
  templateUrl: './siempre.component.html',
  styleUrls: ['./siempre.component.scss']
})
export class SiempreComponent {
  constructor(private router: Router) {


  }
  navegacion() {
    this.router.navigate(['/' ]);

  }
}
