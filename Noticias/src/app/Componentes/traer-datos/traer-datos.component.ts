import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {NoticiasInterfaz} from "../../Interfaces/NoticiasInterfaz";

@Component({
  selector: 'app-traer-datos',
  templateUrl: './traer-datos.component.html',
  styleUrls: ['./traer-datos.component.css']
})
export class TraerDatosComponent implements OnInit {

  series: NoticiasInterfaz[] = [];
  constructor(private _http: Http) { }

  ngOnInit() {
    this._http
      .get("https://twj-lq.mybluemix.net/noticias")
      .subscribe(
        respuesta=>{
          let rjson:NoticiasInterfaz[] = respuesta.json();

          this.series = rjson;

          console.log("Noticias: ",this.series);
        },
        error=>{
          console.log("Error: ",error)

        }
      )
  }

}
