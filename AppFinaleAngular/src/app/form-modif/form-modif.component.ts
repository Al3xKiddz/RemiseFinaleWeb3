import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Wiki } from '../wiki';
import { WikiService } from '../wiki.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-form-modif',
  templateUrl: './form-modif.component.html',
  styleUrls: ['./form-modif.component.css']
})
export class FormModifComponent implements OnInit {
  wiki:Wiki;
  nouvforce: string = "";
  nouvfaib: string = "";
  nouvButin:string ="";
  nouvChance:number =0;
  constructor(private wikiService:WikiService, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { this.wiki = data.wiki;}

  ngOnInit(): void {
  }

  addForce(){
    this.wiki.forces.push(this.nouvforce.toString());
    this.nouvforce ="";
  }

  addFaiblesse(){
    this.wiki.faiblesses.push(this.nouvfaib.toString());
    this.nouvfaib="";
  }

  addLoot(){
    var newloot = {nom:this.nouvButin, chances:this.nouvChance}
    this.wiki.butinChances.push(newloot);
    this.nouvButin="";
    this.nouvChance=0;
  }
}
