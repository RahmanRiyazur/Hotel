import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {

    transform(value:number): string{
        return value.toLocaleString();
        }

}
