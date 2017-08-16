import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {NoticiasComponent} from "./Componentes/noticias/noticias.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
