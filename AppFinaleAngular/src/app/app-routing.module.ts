import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { FormModifComponent } from './form-modif/form-modif.component';
import { ListeFicheComponent } from './liste-fiche/liste-fiche.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { FicheComponent } from './fiche/fiche.component';
import { EnteteComponent } from './entete/entete.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StatsNoteComponent } from './stats-note/stats-note.component';
import { StatsVieComponent } from './stats-vie/stats-vie.component';

const routes: Routes = [
  { path: 'formAjout', component: FormAjoutComponent },
  { path: 'formAuth', component: FormAuthComponent },
  { path: 'formModif', component: FormModifComponent },
  { path: 'listeFiche', component: ListeFicheComponent },
  { path: 'ficheComp', component: FicheComponent },
  { path: 'accComp', component: AccueilComponent },
  { path: 'enteteComp', component: EnteteComponent },
  { path: 'piedPage', component: PiedPageComponent },
  { path: 'statsNote', component: StatsNoteComponent },
  { path: 'statsVie', component: StatsVieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
