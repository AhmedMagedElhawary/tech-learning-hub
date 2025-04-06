const jobTypeDefs = `#graphql
  extend type Query {
    job: Job!
  }

  type Job {
    title: String!
    description: String!
  }
`;

export default jobTypeDefs;
