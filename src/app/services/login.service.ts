import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../login/login.model';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http : HttpClient) {}

  public login(obj: Login): Observable<Login>{
    return this.http.post<Login>
    ("http://localhost:8081/api/cliente/login", obj); 
  }
}