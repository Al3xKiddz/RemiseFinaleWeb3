import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wiki } from './wiki';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http:HttpClient) { }

  wikiUrl = 'http://localhost:3000/wikis';
  getwikis(): Observable<Wiki[]> {
    return this.http.get<Wiki[]>(this.wikiUrl + '/');  
  }
  getwikisId(id:Number): Observable<Wiki> {
    return this.http.get<Wiki>(this.wikiUrl + '/' + id);  
  }
  getwikisJeu(jeu:String): Observable<Wiki[]> {
    return this.http.get<Wiki[]>(this.wikiUrl + '/jeu/' + jeu);  
  }
  getwikisBattu(battu:Boolean): Observable<Wiki[]> {
    return this.http.get<Wiki[]>(this.wikiUrl + '/battu/' + battu);  
  }
  getwikisStatNbNote(): Observable<any> {
    return this.http.get<any>(this.wikiUrl + '/noteJeu');  
  }
  getwikisStatVie(): Observable<any> {
    return this.http.get<any>(this.wikiUrl + '/vie');  
  }
  addwiki(wiki: Wiki): Observable<Wiki> {
    return this.http.post<Wiki>(this.wikiUrl + '/', wiki, httpOptions);
  }
  deletewiki(id: String): Observable<any> {
    return this.http.delete<any>(this.wikiUrl + '/' + id, httpOptions);
  }
  updateWiki(wiki: Wiki): Observable<any> {
    const id = wiki._id;
    return this.http.put<Wiki>(this.wikiUrl + '/' + id, wiki, httpOptions);
  }
}