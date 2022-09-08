import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let edu1 = {
      fecha:"2013-2016",
      grado:"Secundaria",
      institucion:"General #3"
    };
  
    let edu2 = {
      fecha:"2016-2019",
      grado:"Preparatoria",
      institucion:"Cobaev 12"
    };
  
    let edu3 = {
      fecha:"2020-2022",
      grado:"Licenciatura",
      institucion:"Universidad Veracruzana"
    };
    
    this.education.push(edu1);
    this.education.push(edu2);
    this.education.push(edu3);
    //this.workExperience.push(work4);
  }
}
