import { Component, OnInit } from '@angular/core';
import {NoticiasInterfaz} from "../../Interfaces/NoticiasInterfaz";
import {Http} from "@angular/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  series: NoticiasInterfaz[] = [];

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this._http
      .get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=0597a49b5d614431be829d8d0a2def81")
      .subscribe(
        (response)=>{
          console.log("Response:",response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.series = respuesta.articles;
        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
  }

}
