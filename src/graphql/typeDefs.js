const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date
  scalar DateTime

  type Query {
    welcome: String!
    book(id: ID!): Book!
    author(id: ID!): Author!
    booksWritten(authorId: ID!): [Book!]
    booksPublished(publisherId: ID!): [Book!]
    authorOf(bookId: ID!): Author!
    publisherOf(bookId: ID!): Publisher!
    addressOf(personId: ID!): Address!
  }

  type Mutation {
    addAuthor(input: AddAuthorInput!): Author!
    addBook(input: AddBookInput!): Book!
    updateAuthorAddress(authorId: ID!, input: updateAddressInput!): Address!
  }

  input AddAuthorInput {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address
    createdAt: DateTime
    updatedAt: DateTime
  }

  input AddBookInput {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: Date
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input updateAddressInput {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
    createdAt: DateTime
    updatedAt: DateTime
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
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    address: Address
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
    createdAt: DateTime
    updatedAt: DateTime
  }
`
