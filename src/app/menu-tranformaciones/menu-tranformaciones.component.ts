import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {DragonBServiceService} from '../dragon-bservice.service';
import {Input} from "@angular/core";
@Component({
  selector: 'app-menu-tranformaciones',
  standalone: false,

  templateUrl: './menu-tranformaciones.component.html',
  styleUrl: './menu-tranformaciones.component.css'
})
export class MenuTranformacionesComponent implements OnInit{

  personajeId: number | null = null;
  @Input() transformaciones: any[] = [];
  personajeName: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Obtener el ID del personaje de la URL
    this.personajeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.personajeId) {
      // Llamar a la API para obtener los datos del personaje
      this.http
        .get(`https://dragonball-api.com/api/characters/${this.personajeId}`)
        .subscribe((data: any) => {
          this.transformaciones = data.transformations;
          this.personajeName = data.name;
        });


    }


  }

  onKiChange(transformacion: any): void {
    console.log(`El nuevo valor de Ki de ${transformacion.name} es: ${transformacion.ki}`);
    // Aquí puedes hacer algo con el nuevo valor de ki, como actualizarlo en la API si es necesario
    // this.dragonBService.actualizarKi(transformacion.id, transformacion.ki).subscribe(...);
  }
}
