import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { config } from '../urls/config';


@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(protected httpClient: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${config.urlApi}${url}`).pipe(retry(3));
  }

  getFullUrl<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${url}`).pipe(retry(3));
  }

}
