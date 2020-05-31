import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/Pessoa.model';
import { PessoaService } from 'src/app/services/pessoa-service.service';
import { Router } from '@angular/router';
import { Session } from 'protractor';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Pessoa[];
  pageAtual;
  proximaPagina;
  paginaAnterior;
  page = 1;
  isProximaPagina = true;
  isPaginaAnterior = false;

  constructor(
      private pessoaService: PessoaService,
      private router: Router) { }

  async ngOnInit() {
    this.pessoas = [];
    sessionStorage.clear();
    await this.listarTodos();
    await this.recuperaDadosDasPessoas();
  }

  async listarTodos() {
    if (this.pageAtual === undefined) {
      await this.pessoaService.getPessoas().toPromise()
      .then(data => {
        this.pessoas = data.results;
        this.proximaPagina = data.next;
        this.paginaAnterior = data.previous;
       }
      ).catch(error => console.log(error));
    } else {
      await this.pessoaService.getObjectByUrl(this.pageAtual).toPromise()
      .then(data => {
        this.pessoas = data.results;
        this.proximaPagina = data.next;
        this.paginaAnterior = data.previous;
       }
      ).catch(error => console.log(error));
    }
  }

  async recuperaDadosDasPessoas() {
    this.pessoas.forEach(
      pessoa => {
         this.retornaNomeObjeto(pessoa.species).then(
           retorno => {
            pessoa.species = retorno;
           }
         );

         this.retornaNomeObjeto(pessoa.homeworld).then(
          retorno => {
           pessoa.homeworld = retorno;
          }
        );
      }
    );
  }

  async retornaNomeObjeto(url) {
    let nome = 'n/a';
    if (undefined !== url[0]) {
      await this.pessoaService.getObjectByUrl(url).toPromise()
       .then(async data => {
         nome = await data.name;
       }
     ).catch(error => console.log(error));
    }
    return nome;
  }

  irParaFilmes(filmes) {
    sessionStorage.setItem('filmes', JSON.stringify(filmes));
    this.router.navigate(['filmes']);
  }


  proximo() {
    this.pageAtual = this.proximaPagina;
    if (this.pageAtual !== null) {
      this.page++;
      this.ngOnInit();
      this.isProximaPagina = true;
      this.isPaginaAnterior = true;
      return true;
    }
    this.isProximaPagina = false;
    return false;
  }

  anterior() {
    this.pageAtual = this.paginaAnterior;
    if (this.pageAtual !== null) {
      this.page--;
      this.ngOnInit();
      this.isPaginaAnterior = true;
      this.isProximaPagina = true;
      return true;
    }
    this.isPaginaAnterior = false;
    return false;
  }
}
