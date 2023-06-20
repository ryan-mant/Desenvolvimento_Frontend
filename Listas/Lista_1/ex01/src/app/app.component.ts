import { Component } from '@angular/core';
import Analista from './models/analista';
import Gestor from './models/gestor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex01';

  public analistas : Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Rodrigo", "Gestor de Vendas", 789123, []);

  constructor(){
    this.analistas.push(new Analista("Rogério", "Analista de Sistema", 456432, this.gestor.nome));
    this.analistas.push(new Analista("Amanda", "Analista de Segurança", 123098, this.gestor.nome));
    this.analistas.push(new Analista("Lucas", "Analista de Dados", 345987, this.gestor.nome));
    this.analistas.push(new Analista("Kauan", "Analista de Sistema", 321678, this.gestor.nome));
    this.analistas.push(new Analista("Lorrane", "Analista de Infrasestrutura", 543876, this.gestor.nome));
    this.analistas.push(new Analista("Patricia", "Analista de Controle de Tráfego", 190834, this.gestor.nome));
    this.analistas.push(new Analista("Humberto", "Analista de Segurança", 765234, this.gestor.nome));
    this.analistas.push(new Analista("Renan", "Analista de Sistema", 579753, this.gestor.nome));
    this.analistas.push(new Analista("Roberta", "Analista de Rede", 456432, this.gestor.nome));
    this.gestor.nomeSubordinados = this.analistas.map(analistas => analistas.nome);
  }
}
