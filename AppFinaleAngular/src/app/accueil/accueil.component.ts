import { Component, OnInit } from '@angular/core';
import { Wiki } from '../wiki';
import { WikiService } from '../wiki.service';
import { TABMOCK } from '../TABMOCK';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private wikiService:WikiService) { }
  wikis:Wiki[] = []
  jeu = ""
  battu = false
  ngOnInit(): void {
    this.getWikis()
    
  }

  getWikis(){
    this.wikiService.getwikis().subscribe(resultat => this.wikis = resultat);
      if(this.wikis.length == 0){
        this.wikis=TABMOCK;
      }
  }

  onClickJeu(form:NgForm){
    this.wikiService.getwikisJeu(this.jeu).subscribe(res => this.wikis = res);
  }

  toggleBattu(){
    if(this.battu){
      this.wikiService.getwikisBattu(true).subscribe(res => this.wikis = res);
      this.battu = false;
    }else{
      this.wikiService.getwikisBattu(false).subscribe(res => this.wikis = res);
      this.battu = true;
    }
  }

}
