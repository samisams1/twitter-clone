//import { objectType } from "@nexus/schema"
const {objectType} = require('nexus')

export const Post = objectType({

	name: "Post",
	definition(t) {
        t.id('id');
        t.string('title');
        t.string('body');
        
	}
})
module.exports = {
    Post,
  }