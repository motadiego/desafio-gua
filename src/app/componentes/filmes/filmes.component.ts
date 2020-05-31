import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/Filme.model';
import { FilmeService } from 'src/app/services/filme-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  filmes: Filme[];

  constructor(
      private filmeService: FilmeService,
      private router: Router,
      private acivetedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.filmes = [];
    const listagem = JSON.parse(sessionStorage.getItem('filmes'));
    console.log(listagem);
    if (listagem !== undefined){
      await this.recuperaFilmesDaPessoa(listagem);
    }
  }

  async recuperaFilmesDaPessoa(listaUrlFilmes) {
    listaUrlFilmes.forEach(async urlFilme => {
        await this.filmeService.getObjectByUrl(urlFilme).toPromise()
        .then(data => {
          if (data !== null && data !== undefined) {
            this.filmes.push(data);
          }
        }
      ).catch(error => console.log(error));
    });
  }

  voltarListagemPessoas() {
    this.router.navigate(['pessoas']);
  }

}
