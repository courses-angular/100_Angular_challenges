import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(cardNumber: string): string {
    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid card length';

    }
    if (!this.isAllNumbers(cardNumber)) {
      return 'Invalid characters';
    }
    return this.formCardNumber(cardNumber);
  }

  private isAllNumbers(cardNumber: string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharacters = cardNumber.split('').filter((char) => stringNumbers.includes(char)).length;

    return totalValidCharacters === cardNumber.length;
  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpressCardLength = 15;

    if (cardNumberLength === isAmericanExpressCardLength || cardNumberLength === isMasterDiscoverVisaCardLength) {
      return true;
    }
    return false;
  }

  private formCardNumber(cardNumber: string): string {
    const parts = cardNumber.match(/[[\s\S]{1,4}/g);
    console.log(parts);
    return parts.join('-');
  }
}