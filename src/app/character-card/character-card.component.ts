import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: false,

  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  constructor(private router: Router) {
  }
  @Input() personaje: any;
}
