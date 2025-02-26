import { Pipe, PipeTransform } from '@angular/core';

// pipe est un décorateur qui permet de créer un pipe
@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log('args', args);
    console.log('value', value);
      return value.replaceAll('-', '__');
  }
}

