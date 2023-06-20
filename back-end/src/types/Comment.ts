import { PrismaClient } from "@prisma/client"

const {objectType} = require('nexus')
const prisma = new PrismaClient();
export const Comment = objectType({
	name: "Comment",
	definition(t) {
		t.id('id')
		t.string('content')
		//t.model.User()
		t.list.field('User', { type: 'User',
		resolve(_parent, _args, ctx) {
			return prisma.comment.findMany()
		  }, 
	
	})
		//t.model.Comment()

	//	t.model.commentId()
	}
})

