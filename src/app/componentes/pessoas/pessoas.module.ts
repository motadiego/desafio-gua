import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas.component';
import { PessoaService } from 'src/app/services/pessoa-service.service';
import { GenericService } from 'src/app/services/generic-service.service';



@NgModule({
  declarations: [PessoasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PessoasComponent
  ],
  providers: [
    GenericService,
    PessoaService
  ]
})
export class PessoasModule { }
