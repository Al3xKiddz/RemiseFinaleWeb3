import { Component, OnInit } from '@angular/core';
import { Wiki } from '../wiki';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-stats-vie',
  templateUrl: './stats-vie.component.html',
  styleUrls: ['./stats-vie.component.css']
})
export class StatsVieComponent implements OnInit {

  constructor(private wikiService:WikiService) { }

  vieMoy = 0
  resVieMoy:any

  ngOnInit(): void {
    this.getVie()
  }

  getVie(){
    this.wikiService.getwikisStatVie().subscribe(res => this.vieMoy = res[0].moyenneVie);
  }

}
