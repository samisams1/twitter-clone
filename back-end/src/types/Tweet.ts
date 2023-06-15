const {objectType} = require('nexus')

export const Tweet = objectType({
	name: "Tweet",
	definition(t) {
		t.model.id()
		t.model.content()
		t.model.author()
		t.model.createdAt()
		t.model.likes()
		t.model.comments()
	}
})
