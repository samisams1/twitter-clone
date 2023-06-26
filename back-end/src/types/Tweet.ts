import { PrismaClient } from "@prisma/client"

const {objectType} = require('nexus')
const prisma = new PrismaClient();
export const Tweet = objectType({
	name: "Tweet",
	definition(t) {
		t.id('id')
		t.string('content')
		t.int('authorId')
		t.string('createdAt')
		t.list.field('likes', { type: 'LikedTweet',
		resolve(_parent, _args, ctx) {
				return prisma.likedTweet.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		
		});
		t.list.field('comments', { type: 'Comment',
		resolve(_parent, _args, ctx) {
				return prisma.comment.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		
		});
		t.list.field('author', { type: 'User',
		resolve(_parent, _args, ctx) {
				return prisma.user.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		
		});
    

	}
})
