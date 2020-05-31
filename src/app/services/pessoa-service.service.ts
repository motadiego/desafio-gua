import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { PESSOA } from '../urls/config';
import {Pessoa} from '../model/Pessoa.model';
import { Raca } from '../model/Raca.model';

@Injectable({
  providedIn: 'root',
})

export class PessoaService {
  constructor(private service: GenericService) { }

  getPessoas(): Observable<any> {
    return this.service.get<any>(PESSOA);
  }

  getObjectByUrl(url){
    return  this.service.getFullUrl<any>(url);
  }


  getPessoaById(id): Observable<Pessoa[]> {
    const ENDPOINT = `/${id}`;
    return this.service.get<Pessoa[]>(PESSOA + ENDPOINT);
  }
}
