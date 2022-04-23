import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {
  
  pokemons:any[]=[];
  pokemonsBackup : any[] = [];
  name:any;
  constructor( private service:TestService) { }

  ngOnInit(): void {
    this.service.getPokemons().
    subscribe((response:any)=>{
      response.results.forEach((result:any)=>{
        this.service.getMorePokemons(result.name).
        subscribe((uniqueResponse:any)=>{
          this.pokemons.push(uniqueResponse);
          this.pokemonsBackup.push(uniqueResponse);
          console.log(this.pokemons);
        });
      });
    });
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  detailedpokemon : any;
  detailsClick(pokemon : any){
    this.detailedpokemon = pokemon;
    this.openPopup();
  }
  SearchPokemon(e:any){
    
    
    this.pokemons = this.pokemonsBackup.filter(obj => obj.name.includes(e));
   
  }

}
