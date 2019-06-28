class User {
  public firstName: string;
  public lastName: string;
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.age = age;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;

