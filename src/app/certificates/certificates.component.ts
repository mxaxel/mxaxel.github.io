import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificate : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let certificate1 = {
      certificado:"Nota laudatoria 1er Semestre",
      anio:"2020"
    };
  
    let certificate2 = {
      certificado:"Nota laudatoria 3er Semestre",
      anio:"2022"
    };
  
    let certificate3 = {
      certificado:"Nota laudatoria 4to Semestre",
      anio:"2022"
    };
    
    this.certificate.push(certificate1);
    this.certificate.push(certificate2);
    this.certificate.push(certificate3);
    //this.workExperience.push(work4);
  }

}
