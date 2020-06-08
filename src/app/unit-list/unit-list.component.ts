import { Component, OnInit } from '@angular/core';
import {IUnit} from '../interfaces/unit-interface';
import {UnitService} from '../units/unit.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _errorMessage: string;
  units: IUnit[] = [];

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.unitService.getUnits().subscribe({
      next: value => {
        this.units = value;
        console.table(this.units);
      },
      error: err => this._errorMessage = err
    });
  }

}
