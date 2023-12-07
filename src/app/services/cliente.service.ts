import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente/cliente.model';
import { Login } from '../login/login.model';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http : HttpClient) {}

  public gravar(obj : Cliente){          
    this.http.post<String>("http://localhost:8081/api/cliente", obj)
    .subscribe();        
  }
  
  public alterar(obj : Cliente){          
    this.http.put<String>("http://localhost:8081/api/cliente", obj)
    .subscribe();        
  }

  public carregar(codigo: number): Observable<Cliente>{
    return this.http.get<Cliente>("http://localhost:8081/api/cliente/"+codigo);         
  }

  public remover(codigo: number) {
    return this.http.delete<String>("http://localhost:8081/api/cliente/"+codigo).subscribe();    
  }

  public listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>("http://localhost:8081/api/cliente/lista");         
  }
}