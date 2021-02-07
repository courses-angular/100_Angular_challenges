import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';

describe('CreditCardPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
