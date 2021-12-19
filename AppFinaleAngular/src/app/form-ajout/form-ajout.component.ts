import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Wiki } from '../wiki';
import { WikiService } from '../wiki.service';


@Component({
  selector: 'app-form-ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css']
})
export class FormAjoutComponent implements OnInit {
  wiki:Wiki = {nom:"",lienPhoto:"", jeuOrigine:"", vie:0, battu:true, faiblesses:[], forces:[], butinChances:[{nom:"",chances:0}]}; 
  forces: string[] = [];
  faiblesses: string[] = [];
  nouvforce: string = "";
  nouvfaib: string = "";
  nouvButin:string ="";
  nouvChance:number =0;
  constructor(private WikiService:WikiService) { }

  ngOnInit(): void {
    if(this.wiki.butinChances[0].nom === "" && this.wiki.butinChances[0].chances === 0){
      this.wiki.butinChances.pop()
    }
  }

  addForce(){
    this.forces.push(this.nouvforce.toString());
    this.nouvforce ="";
  }

  addFaiblesse(){
    this.faiblesses.push(this.nouvfaib.toString());
    this.nouvfaib="";
  }

  addLoot(){
    var newloot = {nom:this.nouvButin, chances:this.nouvChance}
    this.wiki.butinChances.push(newloot);
    this.nouvButin="";
    this.nouvChance=0;
  }

  onClickSubmit(form:NgForm){
      if (form.valid){
        this.wiki.faiblesses = this.faiblesses
        this.wiki.forces = this.forces
        this.WikiService.addwiki(this.wiki).subscribe(wiki => form.resetForm())
      }
  }
}
