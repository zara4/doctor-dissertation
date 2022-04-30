import { FilesData } from "../interface/filesinterface";
import { Files } from "../Schema/files";
import {
  Arg,
     FieldResolver,
     Mutation,
     Query,
     Resolver,
     Root,
   } from "type-graphql";
   import { PrismaClient } from "@prisma/client";
import { FilesInput } from "../InputTypes/FilesInput";
const prisma = new PrismaClient();

   @Resolver(() => Files)
   export default class FilesResolver{
    @Query(() => [Files], { nullable: true })
    async fetchFiles() {
      return prisma.files.findMany()
    }

    @Mutation(() => Boolean)
    async addFiles(
      @Arg("Filesdata", () => FilesInput ) Filesdata: FilesInput) {
      const Files= await prisma.files.create({
        data: {
          id: Filesdata.id,
          title: Filesdata.title,
          location: Filesdata.location,
          size:  Filesdata.size,
          authorId:Filesdata.authorId,
        },
      })
      if(Files)
      return true;
      return false;
    }
     
     @FieldResolver()
     author(@Root() educationData: FilesData) {
        return prisma.user.findMany({
          where: {
            id: educationData.authorId,
          },
       });
     }
     @FieldResolver()
     comment(@Root() UserData: FilesData) {
        return prisma.comment.findMany({
          where: {
            authorfileId: UserData.id,
          },
       });
     }
   }
   