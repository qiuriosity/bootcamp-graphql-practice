const Author = require('../../models/Author')

const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    throw new Error('authors failed')
  }
}

const author = async (obj, { id: authorId }, context) => {
  try {
    const a = await Author.query()
      .findOne('id', 'authorId')
    return a
  } catch (err) {
    throw new Error('author failed')
  }
}

const resolver = {
  Query: {
    allAuthors,
    author,
  },
}

module.exports = resolver
