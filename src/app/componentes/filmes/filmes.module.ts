import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericService } from 'src/app/services/generic-service.service';
import { FilmesComponent } from './filmes.component';
import { FilmeService } from 'src/app/services/filme-service.service';



@NgModule({
  declarations: [FilmesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilmesComponent
  ],
  providers: [
    FilmeService
  ]
})
export class FilmesModule { }
