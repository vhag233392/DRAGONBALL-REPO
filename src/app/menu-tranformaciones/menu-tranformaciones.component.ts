import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-tranformaciones',
  standalone: false,

  templateUrl: './menu-tranformaciones.component.html',
  styleUrl: './menu-tranformaciones.component.css'
})
export class MenuTranformacionesComponent {

  constructor(private router: Router) {}
}
