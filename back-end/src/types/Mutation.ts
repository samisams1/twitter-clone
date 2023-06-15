import { idArg, list, mutationType, stringArg } from "@nexus/schema";
import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken"
import { APP_SECRET, getUserId } from "../utils"
const prisma = new PrismaClient();
export const Mutation = mutationType({
    definition(t){
        t.field('createDraft', {
            type: 'Post',
            args: {
              title: stringArg(),
              body: stringArg(),
            },
            resolve: (_parent, { title, body }, ctx) => {
              return prisma.post.create({
                data: {
                  title,
                  body,
                },
              })
            },
          });
          t.field("deletePost", {
			type: "Post",
			args: {
				id:stringArg()
			},
			resolve: (_parent, { id }, ctx) => {
				return prisma.post.delete({
					where: { id: id }
				})
			}
		});
        t.nullable.field('updatePost', {
            type: 'Post',
            args: { id: stringArg() },
            resolve: (_parent, { id }, ctx) => {
              return prisma.post.update({
                where: { id: id},
                data: { title: "true" },
              })
            },
          });
          t.field("signup", {
            type: "AuthPayload",
            args: {
              name: stringArg(),
              email: stringArg(),
              password: stringArg()
            },
            resolve: async (_parent, { name, email, password }, ctx) => {
              const hashedPassword = await hash(password, 10)
              const user = await prisma.user.create({
                data: {
                  name,
                  email,
                  password: hashedPassword
                }
              })
      
              return {
                token: sign({ userId: user.id }, APP_SECRET),
                user
              }
            }
          });
          t.field("login", {
            type: "AuthPayload",
            args: {
              email: stringArg(),
              password: stringArg()
            },
            resolve: async (_parent, { email, password }, ctx) => {
              const user = await prisma.user.findFirst({
                where: {
                  email
                }
              })
              if (!user) {
                throw new Error(`No user found for email: ${email}`)
              }
              const passwordValid = await compare(password, user.password)
              if (!passwordValid) {
                throw new Error("Invalid password")
              }
              return {
                token: sign({ userId: user.id }, APP_SECRET),
                user
              }
            }
          });
        	t.field("createProfile", {
            type: "Profile",
            args: {
              bio: stringArg(),
              location: stringArg(),
              website: stringArg(),
              avatar: stringArg()
            },
            resolve: (_parent, args, ctx) => {
              //const userId = getUserId(ctx)
             // if (!userId) throw new Error("Could not authenticate user.")
              return prisma.profile.create({
                data: {
                  ...args,
                 User: { connect: { id: Number(1) } }
                }
              })
            }
          })  
    }
    });
module.exports = {
    Mutation
}