export interface User {
    uid: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    usertype: string;
    birthday: string;
    avatar?: string;
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
