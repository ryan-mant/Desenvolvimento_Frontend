export default class Anime {
  nome: string;
  genero: string;
  episodios: Number;
  finalizado: boolean;
  imagem: String;

  constructor(nome: string, genero: string, episodios: Number, finalizado: boolean, imagem: String){
    this.nome = nome;
    this.genero = genero;
    this.episodios = episodios;
    this.finalizado = finalizado;
    this.imagem = imagem;
  }
}
