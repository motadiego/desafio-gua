import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoasModule } from './componentes/pessoas/pessoas.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { FilmesModule } from './componentes/filmes/filmes.module';
import { AppRoutingModule } from './app-routing.module';
import { Routing } from './app.routing';
import { Routes, RouterModule } from '@angular/router';

const appRoutingMain: Routes =  [
  {
    path: '**',
    redirectTo: 'pessoas'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    PessoasModule,
    FilmesModule,
    AppRoutingModule,
    Routing,
    RouterModule.forRoot(appRoutingMain)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
