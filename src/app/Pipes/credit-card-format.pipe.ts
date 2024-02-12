import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
  standalone: true,
})
export class CreditCardFormatPipe implements PipeTransform {
  transform(creditCardNumber: string): string {
    // Format credit card number as "0000 – 0000 – 0000 – 0000"
    return creditCardNumber.replace(/(\d{4})(?=\d)/g, '$1 - ');
  }
}
