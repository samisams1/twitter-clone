import { PrismaClient } from "@prisma/client"

const {objectType} = require('nexus')
const prisma = new PrismaClient();
export const LikedTweet = objectType({
	name: "LikedTweet",
	definition(t) {
	    t.id('id')
		t.list.field('Tweet', { type: 'Tweet',
		resolve(_parent, _args, ctx) {
				return prisma.tweet.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		
		})
	
	}
})
