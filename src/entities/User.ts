import { uuid } from 'uuidv4';

export default class User {
  public readonly id?: string;

  public name: string;

  public email: string;

  public password: string;

  constructor(props: Omit<User, 'id'>) {
    Object.assign(this, props);
    this.id = uuid();
  }
}
