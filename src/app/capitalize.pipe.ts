import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  private exceptions: Set<string> = new Set(['god', 'man']);

  transform(value: string): string {
    if (!value) return value;

    return value
      .toLowerCase()
      .split(' ')
      .map(word => {
        // Primera mayuscula si tiene +3 letras y no es una execpción
        if (word.length > 3 || this.exceptions.has(word.toLowerCase())) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word; // Deja sin cambiar si tiene menos de 3 letras
        }
      })
      .join(' ');
  }

}
