import express from 'express';
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import CommentResolver from './FormResolvers/CommentResolver';
import UserResolver from './FormResolvers/UserResolver';
import { PrismaClient } from "@prisma/client";
import FilesResolver from './FormResolvers/FilesResolver';
const prisma = new PrismaClient();

(async () => {
  const app = express();
  app.get('/', (_req, res) => res.send("Server Working"))
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      CommentResolver,
      FilesResolver
    ],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: () => { prisma }
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("express server started");
  });
})()
