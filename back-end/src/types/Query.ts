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
              id: id,
            },
          })
        },
      })
     t.field("me", {
			type: "Profile",
			//nullable: true,
			resolve: (_parent, {id}, ctx) => {
				//const userId = getUserId(ctx)
				return prisma.profile.findFirst({
          where:{
            id:id
          }
        });
			}
		})
     t.list.field("users", {
			type: "User",
			resolve: (parent, args, ctx) => {
				return prisma.user.findMany()
			}
		})
    
    },
    
    });
    module.exports = {
        Query,
      }