import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCivUniqueProp'
})
export class ConvertCivUniquePropPipe implements PipeTransform {

  test = 'https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cataphract';
  valueArr: string[] = [];

  transform(value: string): string {
    this.valueArr = value.split('/');
    return this.valueArr[this.valueArr.length - 1];
  }

}
