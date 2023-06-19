
import { PrismaClient } from "@prisma/client";
import { objectType } from "nexus"
import { Profile } from "./Profile"
const prisma = new PrismaClient();
export const User = objectType({
	name: "User",
	definition(t) {
		t.id('id')
		t.string('name')
		t.string('email')
		t.list.field('Profile', { type: Profile,
			resolve(parent, _args, ctx) {
				return prisma.profile.findMany({
				  where: {
					id:1
				  },
				})
			  }, 
		
		});
		
	
	}
})
