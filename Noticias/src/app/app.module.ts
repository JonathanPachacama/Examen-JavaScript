import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {NoticiasComponent} from "./Componentes/noticias/noticias.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RoutesAppModules} from "./Routes";
import { TraerDatosComponent } from './Componentes/traer-datos/traer-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoticiasComponent,
    TraerDatosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutesAppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
