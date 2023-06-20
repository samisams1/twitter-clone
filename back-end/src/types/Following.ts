import { PrismaClient } from "@prisma/client"

const {objectType} = require('nexus')
const prisma = new PrismaClient();
export const Following = objectType({
	name: "Following",
	definition(t) {
		t.id('id')
		t.string('name')
		t.string('avator')
		t.list.field('Following', { type: 'Following',
			resolve(parent, _args, ctx) {
				return prisma.following.findMany()
			  }, 
		
		})
	}
})
