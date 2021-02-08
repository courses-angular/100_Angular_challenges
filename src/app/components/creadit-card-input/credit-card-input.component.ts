import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent implements OnInit{
  @Input() public creditCardNumber = '';
  @Input() maxWidth: number = null;
  private readonly = false;
  public get isReadonly(): boolean {
    return this.readonly;
  }

  @Input()
  public set isReadonly(value: boolean) {
    this.readonly = value;
  }
  ngOnInit(): void {
     this.creditCardNumber = this.isReadonly ? this.formatReadonlyCCNum(this.creditCardNumber) : this.creditCardNumber;
  }

  private formatReadonlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    console.log(parts);
    const onlyLast4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }
      return 'xxxx';
    });
    return onlyLast4Shown.join('-');
  }

}
