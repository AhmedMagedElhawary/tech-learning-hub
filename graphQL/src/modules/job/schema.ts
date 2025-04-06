const jobTypeDefs = `#graphql
  extend type Query {
    """
    Get a job by ID.
    """
    job: Job!
    jobs: [Job!]
  }

  type Job {
    id: ID!
    title: String!
    description: String!
    """
    __Date__.
    """
    datePosted: String!
  }
`;

export default jobTypeDefs;
