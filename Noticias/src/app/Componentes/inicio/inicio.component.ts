import { Component, OnInit } from '@angular/core';
import {NoticiasInterfaz} from "../../Interfaces/NoticiasInterfaz";
import {Http} from "@angular/http";
import {NoticiaClass} from "../../Clases/ClaseNoticia";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  series: NoticiasInterfaz[] = [];
  nuevoDiario: NoticiaClass = new NoticiaClass("");
  noticias: NoticiaClass[] = [];

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this._http
      .get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=0597a49b5d614431be829d8d0a2def81")
      .subscribe(
        (response) => {
          console.log("Response:", response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.series = respuesta.articles;
        },
        (error) => {
          console.log("Error:", error);
        },
        () => {
          console.log("Finally");
        }
      )
  }

  crearNoticia(noticias: NoticiaClass) {
    let datosAEnviar = {
      author: noticias.author,
      title: noticias.title,
      urlToImage: noticias.urlToImage

    };
    this._http.post("https://twj-lq.mybluemix.net/noticias", datosAEnviar).subscribe(respuesta => {
        let respuestaJson = respuesta.json();
        this.noticias.push(respuestaJson);
        this.nuevoDiario = new NoticiaClass();
        console.log('respuestaJson: ', respuestaJson);
      },
      error => {
        console.log("Error ", error)
      }
    )

  }

}
