import { objectType } from "nexus"

export const User = objectType({
	name: "User",
	definition(t) {
		t.id('id')
		t.string('name')
		t.string('email')
	
	}
})
