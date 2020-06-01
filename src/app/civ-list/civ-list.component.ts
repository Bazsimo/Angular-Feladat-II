import { Component, OnInit } from '@angular/core';
import {Civilizations} from './civilizations';
import {ajaxGetJSON} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-civ-list',
  templateUrl: './civ-list.component.html',
  styleUrls: ['./civ-list.component.css']
})
export class CivListComponent implements OnInit {

  civs: Civilizations[] = [
  {
    id: 1,
    name: 'Aztecs',
    expansion: 'The Conquerors',
    armyType: 'Infantry and Monk',
    uniqueUnit: 'https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior',
    uniqueTech: 'https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars',
    teamBonus: 'Relics generate +33% gold',
    civilizationBonus: 'Villagers carry +5, Military units created 15% faster, +5 Monk hit points for each Monastery technology Loom free'
  },
  {
      id: 2,
      name: 'Aztecs',
      expansion: 'The Conquerors',
      armyType: 'Infantry and Monk',
      uniqueUnit: 'https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior',
      uniqueTech: 'https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars',
      teamBonus: 'Relics generate +33% gold',
      civilizationBonus: 'Villagers carry +5, Military units created 15% faster, +5 Monk hit points for each Monastery technology Loom free'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
