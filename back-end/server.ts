import { ApolloServer } from "apollo-server";
import { makeSchema } from "nexus";
import { Mutation, Post, Query, User } from "./src/types";
import { AuthPayload } from "./src/types/AuthPayload";
import { Profile } from "./src/types/Profile";
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
const schema =makeSchema({
    types:[Query,Post,Profile,AuthPayload,User, Mutation],
    plugins: [nexusSchemaPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    }
   
});
const server = new ApolloServer({
    schema
})
// The `listen` method launches a web server.
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});