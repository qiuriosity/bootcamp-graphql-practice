const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date
  # scalar DateTime

  type Query {
    welcome: String!
    allAuthors: [Author!]!
    allBooks: [Book!]!
    book(id: ID!): Book!
    author(id: ID!): Author!
    booksWritten(authorId: ID!): [Book!]
    booksPublished(publisherId: ID!): [Book!]
    authorOf(bookId: ID!): Author!
    publisherOf(bookId: ID!): Publisher!
    addressOf(personId: ID!): Address!
  }

  type Mutation {
    addAuthor(input: AuthorInput!): Author!
    addBook(input: BookInput!): Book!
    updateAuthorAddress(authorId: ID!, input: AddressInput!): Address!
  }

  input AuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: AddressInput
  }

  input PublisherInput {
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    address: AddressInput
  }

  input BookInput {
    title: String!
    language: String!
    numPages: Int
    datePublished: Date
    bestseller: Boolean
    author: AuthorInput!
    publisher: PublisherInput!
  }

  input AddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: Date
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    address: Address
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }
`
