const Author = require('../../models/Author')

const authors = async () => {
  try {
    const a = await Author.query()
    return a
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
    authors,
    author,
  },
}

module.exports = resolver
