import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  

  let work1 = {
    fecha:"2018-2022",
    ubicacion:"Ixtac, Ver.",
    puesto:"CEO",
    empresa:"Waves Lab",
    logros: [
      {descripcion:"Construccion de un ERP en la nube de google"},
      {descripcion: "Creacion de una api"}
    ]
  };

  let work2 = {
    fecha:"2020-2022",
    ubicacion:"Ixtac, Ver.",
    puesto:"Junior",
    empresa:"PayPal",
    logros: [
      {descripcion:"Construccion de un servicio en la nube"},
      {descripcion: "Creacion de una api"}
    ]

  };

  let work3 = {
    fecha:"2021-2022",
    ubicacion:"Córdoba, Ver.",
    puesto:"Junior",
    empresa:"Spotify",
    logros: [
      {descripcion:"Construccion de una conexion a dispositivos"},
      {descripcion: "Creacion de una api"}
    ]
  };
  

  this.workExperience.push(work1);
  this.workExperience.push(work2);
  this.workExperience.push(work3);
  //this.workExperience.push(work4);
  }
}
