import { Component, Input, OnInit } from '@angular/core';
import { Wiki } from '../wiki';

@Component({
  selector: 'app-liste-fiche',
  templateUrl: './liste-fiche.component.html',
  styleUrls: ['./liste-fiche.component.css']
})
export class ListeFicheComponent implements OnInit {
  @Input() wikis:Wiki[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
