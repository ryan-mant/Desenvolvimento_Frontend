import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutoService){}
  public produtos: any[] = []
  ngOnInit(): void {
    this.produtoService.buscarProdutos().subscribe((response) =>{
      this.produtos = response;
    })
  }

}
