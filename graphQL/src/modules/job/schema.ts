const jobTypeDefs = `#graphql

  extend type Query {
    """
    Get a job by ID.
    """
    job(input: JobInput!): Job
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

  input JobInput {
    """
    The identifier for the Job
    """
    id: String!
  }
`;

export default jobTypeDefs;
