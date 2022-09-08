import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  language : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let language1 = {
      lenguaje:"Español",
    };
  
    let language2 = {
      lenguaje:"Inglés",
    };

    this.language.push(language1);
    this.language.push(language2);
  }
}
