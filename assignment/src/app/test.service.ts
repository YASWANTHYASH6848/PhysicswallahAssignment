import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http:HttpClient) { }

  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=15`);
  }

  getMorePokemons(name : string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  
  getType(pokemon: any): string {
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }
}