import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yl-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  passwordStrengthPercent: number = 0;

  private currentPassword = '';

  // @ts-ignore
  public set password(value): void {
    this.currentPassword = value;
    this.updatePasswordStrength(value);
  }

  public get password(): string {
    return this.currentPassword;
  }

  constructor() {
  }

  public get isEightCharactersOrGreater(): boolean {
    return this.currentPassword.length >= 8;
  }

  public get hasGetOneCapitalLetterOrMore(): boolean {
    return /(.*[A-Z].*)/.test(this.currentPassword);
  }
  public get hasGetOneNumberOrMore(): boolean {
    return /(.*\d.*)/.test(this.currentPassword);
  }
  public get hasOneSpecialCharacterOrMore(): boolean {
    return /\W|_/g.test(this.currentPassword);
  }

  ngOnInit(): void {
  }

  updatePasswordStrength(value: string): void {
    let strength = 0;
    if (this.isEightCharactersOrGreater) {
      strength += 25;
    }
    if (this.hasGetOneCapitalLetterOrMore) {
      strength += 25;
    }
    if (this.hasGetOneNumberOrMore) {
      strength += 25;
    }
    if (this.hasOneSpecialCharacterOrMore) {
      strength += 25;
    }
    this.passwordStrengthPercent = strength;
  }

}
