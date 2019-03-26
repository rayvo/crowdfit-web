export class User {
    id: number;
    username: string;
    email: string;
    nickname: string;
    fullname: string;
    birthday: string;
    gender: number;
    phone: string;
    bloodtype: string;
  }

  export interface EmailPasswordPair {
    email: string;
    password: string;
  }

  export interface NewAccount {
    name: string;
    email: string;
    password: string;
    phone: string;
    usertype: string;
  }
