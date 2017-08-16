import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Http} from "@angular/http";
import {NoticiasInterfaz} from "../../Interfaces/NoticiasInterfaz";

@Component({
  selector: 'app-traer-datos',
  templateUrl: './traer-datos.component.html',
  styleUrls: ['./traer-datos.component.css']
})
export class TraerDatosComponent implements OnInit {

  noticias: NoticiasInterfaz[] = [];
  @Output() NooticiasNodeOutput= new EventEmitter();
  constructor(private _http: Http) { }


  ngOnInit() {
    this._http
      .get("https://twj-lq.mybluemix.net/noticias")
      .subscribe(
        respuesta=>{
          let rjson:NoticiasInterfaz[] = respuesta.json();
          this.noticias = rjson;
          console.log("Noticias: ",this.noticias);
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }
  eliminarNoticiaNodeBackend(noticia: NoticiasInterfaz) {

    this._http.delete("https://twj-lq.mybluemix.net/noticias?id="+noticia._id)
      .subscribe(
        respuesta=>{
          this.NooticiasNodeOutput.emit(noticia);
        },
        error=>{
          console.log("Error",error);
        }
      )

  }
  eliminarNoticiaFrontEnd(noticia: NoticiasInterfaz) {

    let indice = this.noticias.indexOf(noticia);

    this.noticias.splice(indice,1);

  }

}
