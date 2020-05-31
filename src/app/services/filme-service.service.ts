import { Injectable } from '@angular/core';
import { GenericService } from './generic-service.service';
import { Observable } from 'rxjs';
import { PESSOA, FILME } from '../urls/config';

@Injectable({
  providedIn: 'root',
})

export class FilmeService {
  constructor(private service: GenericService) { }

  getFilmes(): Observable<any> {
    return this.service.get<any>(FILME);
  }

  getObjectByUrl(url){
    return  this.service.getFullUrl<any>(url);
  }
}
