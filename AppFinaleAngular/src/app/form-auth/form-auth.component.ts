import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css']
})
export class FormAuthComponent implements OnInit {
  email:string =""
  passw:string=""
  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(form:NgForm){

  }
}
