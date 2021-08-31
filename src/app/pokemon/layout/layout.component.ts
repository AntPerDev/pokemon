import { Component } from '@angular/core';

// 1ª Forma:
type Tabs = 'tab-favoritos' | 'tab-pokemons';
// 2ª Forma: con enum
// enum Tabs {
//   tabFavoritos,
//   tabPokemons
// }



@Component({
  selector: 'pokemon-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  // 1ª Forma:
  public currentTab: Tabs = 'tab-pokemons';
  // 2ª Forma con enums
  //  public currentTab: Tabs = Tabs.tabPokemons;


   constructor(){

   }
}
