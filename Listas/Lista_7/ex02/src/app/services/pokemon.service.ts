import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
  }
  public getInfoPokemon(name: string): Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
