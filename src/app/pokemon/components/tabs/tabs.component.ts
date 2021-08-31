import { Component } from '@angular/core';

// 1ª Forma:
type Tabs = 'tab-favoritos' | 'tab-pokemons';
// 2ª Forma: con enum
// enum Tabs {
//   tabFavoritos,
//   tabPokemons
// }


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: []
})
export class TabsComponent {

  // 1ª Forma:
  public currentTab: Tabs = 'tab-pokemons';
  // 2ª Forma con enums
  //  public currentTab: Tabs = Tabs.tabPokemons;


  constructor() {

  }

}
