import { gql } from "apollo-server";

export const postTypeDefs = gql`
extend type Query {
  post: Post! 
  posts: [Post!]!
}

type Post{
  id: ID!
  title: String!
  body: String!
  # userId: String!
  indexRef: Int!
  createdAt: String!
},
`



//posts: [Post!]! não pode ser nulo, e o post de dentro também não
// "!" = não pode ser nulo

