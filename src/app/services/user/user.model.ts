export class UserModel{
  readonly id: number;
  name: string;
  email: string;
  constructor(data: any = {}) {
    this.id = data.id;
    this.name = data.name ? data.name : '';
    this.email = data.email ? data.email : '';
  }
}
