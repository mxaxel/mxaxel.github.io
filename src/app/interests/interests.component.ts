import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interest : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let interest1 = {
      interes:"Ingenieria de Software"
    };
  
    let interest2 = {
      interes:"Video juegos"
    };
  
    let interest3 = {
      interes:"Musica"
    };

    let interest4 = {
      interes:"Lectura"
    };

    let interest5 = {
      interes:"Automovilismo"
    };
    
    this.interest.push(interest1);
    this.interest.push(interest2);
    this.interest.push(interest3);
    this.interest.push(interest4);
    this.interest.push(interest5);
    //this.workExperience.push(work4);
  }

}
