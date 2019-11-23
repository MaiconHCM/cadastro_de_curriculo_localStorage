import { Component, OnInit } from '@angular/core';
import { Pessoa } from './models/pessoa';
import { PessoaStorageService } from './service/pessoaStorage';

@Component({
  selector:'app-pessoa-list',
  templateUrl:'./pessoaListComponent.html'
})

export class pessoaListComponent implements OnInit{
  pessoaList:Pessoa[];

  ngOnInit():void{
    this.pessoaList=PessoaStorageService.getList();
  }
}