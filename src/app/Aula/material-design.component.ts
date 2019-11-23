import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { PessoaStorageService } from '../service/pessoaStorage';

@Component(
    {
        selector: 'app-material-design',
        templateUrl: './material-design.component.html',
    }
)
export class MaterialDesingComponent implements OnInit {

    pessoa: Pessoa;


    ngOnInit() {
        this.pessoa = new Pessoa();
    }

    getCidades():String[]{
        return ["","Pato Branco","Francisco Beltão","Dois Vizinhos"];
    }
    getBairros():String[]{
        return ["1","aa","b c","d"];
    }

    salvar() {
        PessoaStorageService.saveList(this.pessoa);
    }
}


