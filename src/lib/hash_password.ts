import * as bcrypt from "bcrypt";
export class HashPassword {
  private readonly saltRounds: number;
  constructor() {
    this.saltRounds = 10;
  }
  // return a hashed password when receiving a plain password
  async generate(plainPassword: string): Promise<string> {
    return bcrypt.hash(plainPassword, this.saltRounds);
  }
  // compare a plain password with a hashed password
  async compare(plainPassword: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hash);
  }
}
