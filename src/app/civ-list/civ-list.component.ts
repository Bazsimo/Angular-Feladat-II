import {Component, OnInit} from '@angular/core';
import {ICivilizations} from '../interfaces/civilizations';
import {CivsService} from './civs.service';

@Component({
  selector: 'app-civ-list',
  templateUrl: './civ-list.component.html',
  styleUrls: ['./civ-list.component.css']
})
export class CivListComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _listFilter: string;
  // tslint:disable-next-line:variable-name
  private _errorMessage: string;
  civs: ICivilizations[] = [];
  filteredCivs: ICivilizations[] = [];
  details: boolean[] = [];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCivs = this.listFilter ? this.performFilter(this.listFilter) : this.civs;
  }

  constructor(private civService: CivsService) {
  }

  performFilter(filterBy: string): ICivilizations[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.civs.filter((civ: ICivilizations) =>
      civ.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  clickOnUnique(id: number): void {
    this.details[id] = !this.details[id];
  }

  ngOnInit(): void {
    this.civService.getCivs().subscribe({
        next: value => {
          // console.table(value);
          this.civs = value;
          this.filteredCivs = this.civs;
        },
        error: err => this._errorMessage = err
      });
  }
}
