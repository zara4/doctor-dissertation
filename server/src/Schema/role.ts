import { registerEnumType } from "type-graphql";

  export enum Role {
    Admin = 'ADMIN',
    User = 'USER'
  }
  
  export enum Role {
    'ADMIN',
    'USER'
  }
  
  registerEnumType(Role, {
    name: "Role"
  });
