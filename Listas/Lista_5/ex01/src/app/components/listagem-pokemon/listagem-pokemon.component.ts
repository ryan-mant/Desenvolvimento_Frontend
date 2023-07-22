import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-listagem-pokemon',
  templateUrl: './listagem-pokemon.component.html',
  styleUrls: ['./listagem-pokemon.component.css']
})
export class ListagemPokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  public pokemons: any[] = [];
  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response: any)=>{
      console.log(response.results);
      for(let pokemon of response.results){
        this.pokemonService.getInfoPokemon(pokemon.name).subscribe((res: any) =>{
          this.pokemons.push(res)
          console.log(res)
        })
      }
    });
  }

}
