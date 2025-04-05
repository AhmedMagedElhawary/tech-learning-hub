const typeDefs = `#graphql
  schema {
    query: Query
  }

  type Query {
    job: Job!
  }
  type Job {
    title: String!
    description: String!
  }
`;

export default typeDefs;
