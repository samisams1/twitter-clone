import { PrismaClient } from "@prisma/client"
import { objectType } from "@nexus/schema"
const prisma =  new PrismaClient()
export const User = objectType({
	name: "User",
	definition(t) {
		t.id('id')
		t.string('name')
		t.string('email')
		t.list.field('Profile', { type: 'Profile',
		resolve(parent, _args, ctx) {
				return prisma.profile.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		
		})
		t.list.field('Tweet', { type: 'Tweet',
		resolve(parent, _args, ctx) {
				return prisma.tweet.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		
		})
		t.list.field('Comment', { type: "Comment",
		resolve(parent, _args, ctx) {
			return prisma.comment.findMany({
			  where: {
				id:1,
			  },
			})
		  }, 
	
	});
	t.list.field('LikedTweet', { type: "LikedTweet",
	resolve(_parent, _args, ctx) {
		return prisma.likedTweet.findMany({
		  where: {
			id:1,
		  },
		})
	  }, 
})
	t.list.field('Following', { type: "Following",
	resolve(_parent, _args, ctx) {
		return prisma.following.findMany({
		  where: {
			id:1,
		  },
		})
	  }, 
})
	
	}
})
