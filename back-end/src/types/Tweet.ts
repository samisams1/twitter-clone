import { PrismaClient } from "@prisma/client"

const {objectType} = require('nexus')
const prisma = new PrismaClient();
export const Tweet = objectType({
	name: "Tweet",
	definition(t) {
		t.id('id')
		t.string('content')
		t.list.field('LikedTweet', { type: 'LikedTweet',
		resolve(_parent, _args, ctx) {
				return prisma.likedTweet.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		
		})


	}
})
