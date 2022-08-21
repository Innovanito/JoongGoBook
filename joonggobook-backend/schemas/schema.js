// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import pin from './pin'
import comment from './comment'
import postedBy from './postedBy'
import save from './save'
import accountInfo from './accountInfo'
import defaultImage from './defaultImage'
import directMeesage from './directMeesage'
import dm from './dm'
import chat from './chat'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    user,
    accountInfo,
    pin,
    comment,
    postedBy,
    save,
    defaultImage,
    directMeesage,
    dm,
    chat
  ])
})
