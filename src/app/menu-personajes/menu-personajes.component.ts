import { Component } from '@angular/core';

import {DragonBServiceService} from '../dragon-bservice.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-personajes',
  standalone: false,

  templateUrl: './menu-personajes.component.html',
  styleUrl: './menu-personajes.component.css'
})
export class MenuPersonajesComponent {


  personajes: any[] = [];

  constructor(private dragonBService: DragonBServiceService) {
  }


  ngOnInit(): void {
    this.dragonBService.obtenerPersonajes().subscribe(
      (data) => {
        this.personajes = data.items; // Guardar los datos obtenidos en el array comidas
      },
      (error) => {
        console.error('Error al obtener las comidas:', error);
      }
    );
  }

  buscarPersonaje(personaje: any) {

  }

}
