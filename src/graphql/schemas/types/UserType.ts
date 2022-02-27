//Using graphql's SDL
const UserType = `#graphql
  """
  User attributes definition
  """
  type User {
    id: ID!,
    "User Email"
    email: String!,
    "User Name"
    name: String!,
    "user created at time"
    createdAt: String!
  }
  input UserType {
    email: String!,
    name: String  
  }

  type Query {
      users: [User!],
      user(id: String!): User!
  }
  type Mutation {
      createUser(user: UserType): User,
      deleteUser(id: String): User,
      updateUser(id: String, name: String, email: String): String
  }
  schema {
      query: Query,
      mutation: Mutation
  }
`;

export default UserType;


/* 
In case you want to declare it yourself:


const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'UserType',

  fields: () => ({
    id: { type: GraphQLID },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    }
  });
});

*/