const Book = require('../../models/Book')

const allBooks = async () => {
  try {
    const books = await Book.query()
    return books
  } catch (err) {
    throw new Error('books failed')
  }
}

const resolver = {
  Query: {
    allBooks,
  },
}

module.exports = resolver
