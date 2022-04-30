import { UserData } from "../interface/userinterface";
import { User } from "../Schema/user";
import {
  Arg,
     FieldResolver,
     Mutation,
     Query,
     Resolver,
     Root,
   } from "type-graphql";
import { userInput } from "../InputTypes/UserInput";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
   
   @Resolver(() => User)
   export default class UserResolver{
    @Query(() => [User], { nullable: true })
    async fetchUser() {
      return prisma.user.findMany()
   }
    
     @Query(() => User, { nullable: true })
     UserByEmail(@Arg("email") email: string){
    return prisma.user.findUnique({
      where: {email : email},
    });
  }
  @Mutation(() => Boolean)
  async addUser(
    @Arg("Userdata", () => userInput ) Userdata: userInput) {
    const User= await prisma.user.create({
      data: {
        id: Userdata.id,
        name: Userdata.name,
        email: Userdata.email,
        version: Userdata.version,
        password: Userdata.password,
      },
    })
    if(User)
    return true;
    return false;
  }
  @FieldResolver()
  files(@Root() personData: UserData) {
     return prisma.files.findMany({
       where: {
         authorId: personData.id,
       },
    });
  }
}
   