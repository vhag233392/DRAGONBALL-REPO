import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuTranformacionesComponent} from './menu-tranformaciones/menu-tranformaciones.component';
import {MenuPersonajesComponent} from './menu-personajes/menu-personajes.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: MenuPersonajesComponent},
  {path: 'transformaciones/:id', component: MenuTranformacionesComponent},
  { path: 'login', component: LoginComponent },
  {path: 'personajes', component: MenuPersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
