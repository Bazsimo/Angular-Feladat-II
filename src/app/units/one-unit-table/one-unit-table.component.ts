import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {IUnit} from '../../interfaces/unit-interface';
import {UnitService} from '../unit.service';
import {ConvertCivUniquePropPipe} from '../../shared/convert-civ-unique-prop.pipe';

@Component({
  selector: 'app-one-unit-table',
  templateUrl: './one-unit-table.component.html',
  styleUrls: ['./one-unit-table.component.css']
})
export class OneUnitTableComponent implements OnInit, OnChanges{

  // tslint:disable-next-line:variable-name
  private _errorMessage: string;
  units: IUnit[] = [];
  unit: IUnit;
  dummyUrl = 'assets/jaguar_warrior.json';
  @Input() inputUrl: string[] = [];
  urlArray: string[] = [];

  constructor(private unitService: UnitService, private pipe: ConvertCivUniquePropPipe) { }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    for (let entry of this.inputUrl){
      this.unitService.getOneUnit(entry).subscribe({
        next: value => {
          this.unit = value;
          this.units.push(this.unit);
          // console.table(this.unit);
        },
        error: err => this._errorMessage = err
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.urlArray = this.inputUrl;
    for (let i = 0; i < this.urlArray.length; i++){
      this.urlArray[i] = this.pipe.transform(this.urlArray[i]);
      this.urlArray[i] = 'api/unit/' + this.urlArray[i];
    }
  }
}
