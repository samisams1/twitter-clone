
const {objectType} = require('nexus')

//import { objectType } from "nexus"

  
export const Profile = objectType({
  name: 'Profile',
  definition(t) {

   t.id('id')
   t.string('bio')
   t.string('loaction')
   t.string('website')
   t.string('avatar')
  },
})
