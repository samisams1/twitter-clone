import { idArg, queryType } from "@nexus/schema";
import { PrismaClient } from "@prisma/client";
import { getUserId } from "../utils"
const prisma = new PrismaClient();
export const Query = queryType({
    definition(t){
     t.list.field('posts',{
        type:'Post',
        resolve: ()=>prisma.post.findMany()
     })
     t.nullable.field('post', {
        type: 'Post',
        args: { id: idArg() },
        resolve: (_parent, { id }, ctx) => {
          return prisma.post.findFirst({
            where: {
              id: String(id)
            },
          })
        },
      })
      t.field("me", {
        type: "User",
        resolve: (_parent, args, ctx) => {
          return prisma.user.findUnique({
            where: {
              id: 1,
            },
          })
        },
      }),
     t.list.field("users", {
			type: "User",
			resolve: (parent, args, ctx) => {
				return prisma.user.findMany()
			}
		})
    t.list.field("tweets", {
			type: "Tweet",
			resolve: (_parent, args, ctx) => {
				return prisma.tweet.findMany()
			}
		})

		t.field("tweet", {
			type: "Tweet",
			//nullable: true,
			//args: { id: intArg() },
			resolve: (parent, { id }, ctx) => {
				return prisma.tweet.findFirst({
					where: {
						id: Number(id)
					}
				})
			}
		})
		t.field("user", {
			type: "User",
		//	nullable: true,
			//args: { id: intArg() },
			resolve: (parent, { id }, ctx) => {
				return prisma.user.findFirst({
					where: {
						id: Number(1)
					}
				})
			}
		})
    },
    
    });
    module.exports = {
        Query,
      }