import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';




@NgModule({
  declarations: [
    AppComponent,
    
    
    PokemonlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
