import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simple'
})
export class SimplePipe implements PipeTransform {

  transform(value: any, args1: number, args2: number, args3: string): any {
    var mul = args1 * args2;
    return value + args1 + " * " + args2 + " = " +  mul + args3;
  }

}
