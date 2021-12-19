import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-stats-note',
  templateUrl: './stats-note.component.html',
  styleUrls: ['./stats-note.component.css']
})
export class StatsNoteComponent implements OnInit {

  constructor(private wikiService:WikiService) { }

  
  tabNote!:[{_id:String,nbNote:Number}]

  ngOnInit(): void {
    this.genererStats()
  }

  genererStats(){
    this.wikiService.getwikisStatNbNote().subscribe(res => this.tabNote = res);
  }

}
