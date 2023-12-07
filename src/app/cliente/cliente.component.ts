import { Component } from '@angular/core';
import { Cliente } from './cliente.model';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  mensagem : string = "";
  obj: Cliente = new Cliente();
  lista: Cliente[] = [];
  
  constructor(private clienteService: ClienteService, 
              private rotas: ActivatedRoute) {}

  ngOnInit(){
    let codigo = this.rotas.snapshot.paramMap.get("codigo");
    if(codigo!=null){
      this.obj.codigo = Number(codigo);
      this.pesquisar();
    }     
  }              

  public mostrar(){
    this.mensagem = "Cliente registrado com sucesso!";
    let clienteAux : Cliente = new Cliente(this.obj);    
    this.lista.push(clienteAux);
    window.localStorage.setItem('listaCliente', JSON.stringify(this.lista));
  }

  public gravar(){
    try{
      if(this.obj.codigo==0){
        this.clienteService.gravar(this.obj);
        this.mensagem = "Cliente gravado com sucesso!";
      }  else {
        this.clienteService.alterar(this.obj);
        this.mensagem = "Cliente alterado com sucesso!";
      }      
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public pesquisar(){
    this.mensagem = "";
    try{      
      this.clienteService.carregar(this.obj.codigo).subscribe(
        (retorno: Cliente) => {            
          this.obj.email = retorno.email;
          this.obj.nome = retorno.nome;
          this.obj.senha = retorno.senha;
          this.obj.telefone = retorno.telefone;
          if(retorno.nome==null)  this.mensagem = "Registro não encontrado!";          
        });
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public remover(){
    try{
      this.clienteService.remover(this.obj.codigo);
      this.mensagem = "registro removido com sucesso!";
    } 
    catch{
      this.mensagem = "Ocorreu um erro durante o processo!";
    }     
  }
}
