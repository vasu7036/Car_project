import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doller'
})
export class DollerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return " $ "+value;
  }

}
