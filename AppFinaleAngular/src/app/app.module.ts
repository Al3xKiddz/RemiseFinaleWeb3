import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { WikiService } from './wiki.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnteteComponent } from './entete/entete.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { ListeFicheComponent } from './liste-fiche/liste-fiche.component';
import { FicheComponent } from './fiche/fiche.component';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormModifComponent } from './form-modif/form-modif.component';
import { StatsNoteComponent } from './stats-note/stats-note.component';
import { StatsVieComponent } from './stats-vie/stats-vie.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    ListeFicheComponent,
    FicheComponent,
    FormAjoutComponent,
    FormAuthComponent,
    AccueilComponent,
    FormModifComponent,
    StatsNoteComponent,
    StatsVieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
  ],

  providers: [WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
