import { CommentData } from "../interface/commentinterface";
import { Comment } from "../Schema/comment";
import {
  Arg,
     FieldResolver,
     Mutation,
     Query,
     Resolver,
     Root,
   } from "type-graphql";
   import { PrismaClient } from "@prisma/client";
import { CommentInput } from "../InputTypes/CommentInput";
   const prisma = new PrismaClient();
   
   @Resolver(() => Comment)
   export default class CommentResolver{
    @Query(() => [Comment], { nullable: true })
    async fetchComment() {
      return prisma.comment.findMany()
    }
    @Query(() => [Comment], { nullable: true })
    CommentByID(@Arg("authorfileId") authorfileId: number){
   return prisma.comment.findMany({
     where: {authorfileId : authorfileId},
   });
 }
    @Mutation(() => Boolean)
    async addComment(@Arg("Commentdata", () => CommentInput ) Commentdata: CommentInput){
      const edu = await prisma.comment.create({
        data :{
          id: Commentdata.id!,
          comment: Commentdata.comment!,
          revised: Commentdata.revised!,
          Reviewerid: Commentdata.Reviewerid!,
          original : Commentdata.original!,
          reason: Commentdata.reason!,
          authorfileId: Commentdata.authorfileId,
        }
      })
      if(edu)
      return true;
      return false;
    }
    @FieldResolver()
    authorfile(@Root() CommentData: CommentData) {
       return prisma.files.findMany({
         where: {
          id: CommentData.authorfileId
         },
      });
    }
   }
   