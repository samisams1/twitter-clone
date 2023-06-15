
const {objectType} = require('nexus')
export const Following = objectType({
	name: "Following",
	definition(t) {
		t.model.id()
		t.model.User()
		t.model.name()
		t.model.avatar()
		t.model.followId()
	}
})
