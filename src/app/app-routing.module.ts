import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { AnimalesComponent } from './componente/animales/animales.component';
import { DisminucionComponent } from './componente/disminucion/disminucion.component';
import { AyudaComponent } from './componente/ayuda/ayuda.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'animales', component:AnimalesComponent},
  {path:'disminucion', component:DisminucionComponent},
  {path:'ayuda', component:AyudaComponent},
  {path:'', component:InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
