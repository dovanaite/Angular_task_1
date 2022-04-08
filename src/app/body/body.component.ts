import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public talpa?:number;
  public greitis?:number;
  public laikas?:number;
  public uzpildyta:number=0;
  public info:string='';

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti(){
    if (this.talpa!=null && this.laikas!=null&& this.greitis!=null){
      this.uzpildyta = Math.round((this.laikas * this.greitis)/this.talpa*100) ;
      console.log( this.uzpildyta);
    }  

    if (this.uzpildyta < 80){
      this.info="Rezervuare dar yra vietos";
    }
    if (this.uzpildyta >=80){
      this.info="Rezervuaro talpa kritiškai pripildyta";
    }
    if (this.uzpildyta >=100){
      this.info="Rezervuaro talpa yra perpildyta";
    }

  }



}
