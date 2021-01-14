const Author = require('../../models/Author')

const addAuthor = async (obj, { input }, context) => {
  try {
    // console.log(authorInput)
    const newAuthor = await Author.query()
      .insert(input)
      .returning('*')
    return newAuthor
  } catch (err) {
    throw new Error('addAuthor failed')
  }
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
