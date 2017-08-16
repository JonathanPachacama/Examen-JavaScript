import {Component, Input, OnInit} from '@angular/core';
import {NoticiasInterfaz} from "../../Interfaces/NoticiasInterfaz";

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  @Input() noticias:NoticiasInterfaz;
  constructor() { }

  ngOnInit() {
  }

}
