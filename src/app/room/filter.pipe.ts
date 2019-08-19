import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
    transform(value: any, filter: string, type: string): any{
        if(value.length === 0 ||  filter === undefined || filter === 'All Room Types' || filter=== 'All Room Views'){
            return value;
              }
    const resultArray = [];
    for (const item of value) {
      if (item[type] === filter) {
        resultArray.push(item);
      }
    }
 
    return resultArray;
  }
}
