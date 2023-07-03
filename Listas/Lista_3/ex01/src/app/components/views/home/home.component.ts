import { Component } from '@angular/core';
import Anime from 'src/app/models/Anime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  animes: Anime[] = new Array<Anime>();

  constructor(){
    this.animes.push(new Anime("One Piece","Shounen",1067, false, "https://tiermaker.com/images/templates/one-piece---all-characters-630972/6309721651087990.png"));
    this.animes.push(new Anime("Naruto","Shounen",720, true, "https://i.pinimg.com/736x/cf/6e/73/cf6e734e21533f476ea3c98fc08e9817--movie-cast-action-movies.jpg"));
    this.animes.push(new Anime("Dragon Ball","Shounen",639, false, "https://i1.sndcdn.com/artworks-000123205621-2zgx1i-t500x500.jpg"));
    this.animes.push(new Anime("Darling in the Franxx","Romance",24, true, "https://i1.sndcdn.com/artworks-000353504349-dw4tu5-t500x500.jpg"));
    this.animes.push(new Anime("Death Note","Suspense",37, true, "https://i1.sndcdn.com/artworks-000413178993-hcz9v8-t500x500.jpg"));
    this.animes.push(new Anime("Black Clover","Shounen",170, false, "https://itswynnesworld.files.wordpress.com/2021/04/asta-yami.jpg"));
    this.animes.push(new Anime("Tate no Yuusha no Nariagari","Isekai",38, false, "https://i1.sndcdn.com/artworks-000515544468-gkx5cw-t500x500.jpg"));
    this.animes.push(new Anime("Shokugeki no Souma","Gastronomia",85, true, "https://akamai.sscdn.co/uploadfile/letras/albuns/8/d/5/3/461191443111612.jpg"));
    this.animes.push(new Anime("Another","Terror",12, true, "https://i.pinimg.com/564x/a4/ed/5d/a4ed5de98506fd4b705fe43559a2d62b--eye-patches-classroom.jpg"));
    this.animes.push(new Anime("Kimetsu no Yaiba","Sobrenatural",38, false, "https://i1.sndcdn.com/artworks-000666894451-o5ih2e-t500x500.jpg"));
  }

}
