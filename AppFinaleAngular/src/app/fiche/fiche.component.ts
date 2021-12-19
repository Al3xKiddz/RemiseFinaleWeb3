import { Component, Input, OnInit } from '@angular/core';
import { Wiki } from '../wiki';
import { WikiService } from '../wiki.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormModifComponent } from '../form-modif/form-modif.component';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {
  updatedWiki = false
  @Input() wiki:Wiki = {_id: "ajjsjsh",nom:"geatan bedard", jeuOrigine:"le jeu de la vie", vie:69, battu:true, faiblesses:["fourchette"], forces:["l'azimut"],butinChances:[{nom:"",chances:0}]} 
  constructor(private wikiService:WikiService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  updateWiki(){
    console.log(this.wiki)
    const dialogRef = this.dialog.open(FormModifComponent, {
      width: '450px',
      data: {wiki: this.wiki},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result)  this.wikiService.updateWiki(result).subscribe();
    });
  }

  deleteWiki(){
    this.wikiService.deletewiki(this.wiki._id!!).subscribe()
  }

  getWikiParId(){
    // tu ma dit qu'avec mon update de la facon qu'il est faite je suis pas obliger de le faire
  }

}
