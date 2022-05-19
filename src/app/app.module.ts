import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { DisminucionComponent } from './componente/disminucion/disminucion.component';
import { AnimalesComponent } from './componente/animales/animales.component';
import { AyudaComponent } from './componente/ayuda/ayuda.component';
import { FooterComponent } from './componente/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    DisminucionComponent,
    AnimalesComponent,
    AyudaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
