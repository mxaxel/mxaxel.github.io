import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let skill1 = {
      competencia:"Resilicencia",
      porcentaje:"80%"
    };
  
    let skill2 = {
      competencia:"Creatividad",
      porcentaje:"60%"
    };
  
    let skill3 = {
      competencia:"Pensamiento crítico",
      porcentaje:"%70"
    };

    let skill4 = {
      competencia:"Comunicación verbal",
      porcentaje:"70%"
    };

    let skill5 = {
      competencia:"Liderazgo",
      porcentaje:"90%"
    };
    
    this.skill.push(skill1);
    this.skill.push(skill2);
    this.skill.push(skill3);
    this.skill.push(skill4);
    this.skill.push(skill5);
    //this.workExperience.push(work4);
  }

}
