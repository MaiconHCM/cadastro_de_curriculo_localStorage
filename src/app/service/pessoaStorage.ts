import { JsonPipe } from '@angular/common';
import { Pessoa } from '../models/Pessoa';

export class PessoaStorageService{
  static chave:string='PESSOA_LST';
  
  static save(valor:any):void{
    localStorage.setItem(this.chave,JSON.stringify(valor));
  }

  static saveList(valor: any): void{
    const objeto = localStorage.getItem(this.chave);

    if(!objeto){
      this.save(valor);
    }else{
      let objetoParse: Pessoa[] = JSON.parse(objeto);
      objetoParse.push(valor);
      this.save(valor);
    }

  }
  static getList():Pessoa[]{
    const lista= localStorage.getItem(this.chave);

    if(lista){
      return JSON.parse(lista);
    }
    return;
  }

  

} 