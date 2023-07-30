import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProdutoService{
  constructor(private http: HttpClient){}
  public buscarProdutos(): Observable<any>{
    return this.http.get<any>('http://localhost:8100/listar-produtos')
  }
  public adicionarProduto(produto: any): Observable<any>{
    return this.http.post<any>('http://localhost:8100/adicionar-produto', produto)
  }
}
