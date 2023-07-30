import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  public nome!: string;
  public descricao!: string;
  public imagem!: string;
  public valor!: number;
  public categoria!: string;

  constructor(private produtoService: ProdutoService,private router: Router){}
  public adicionarProduto(){
    let produto = new Produto(this.nome, this.descricao, this.imagem, this.valor, this.categoria);

    this.produtoService.adicionarProduto(produto).subscribe((response) =>{
      console.log(response)
    })

    this.router.navigate(['/']);
  }



}
