import { GraphQLError } from 'graphql';
import { Job, Resolvers } from '../../generatedModels';

export const jobResolvers: Resolvers = {
  Query: {
    job: (_parent, { input }, { dataSources }) => {
      const job = dataSources.jobDataSource.getJob(input.id);
      if (!job) {
        throw notFoundError(`Job with ID ${input.id} not found`);
      }
      return job;
    },

    jobs: (_parent, _args, { dataSources }) => {
      const jobs = dataSources.jobDataSource.getAllJobs();
      if (jobs.length === 0) {
        throw notFoundError('No jobs found');
      }
      return jobs;
    },
  },

  Job: {
    datePosted: (parent, _args, { }) => {
      switch (parent.id) {
        case '1':
          return '2023-10-01T00:00:00Z';
        case '2':
          return '2023-10-02T00:00:00Z';
        default:
          return new Date().toISOString();
      }
    },
  },

  Mutation: {
    createJob: (_parent, { input }, { dataSources,  request}) => {
      // TODO: Implement authentication and authorization logic
      console.log('authorization', request.header.authorization);
      const job = dataSources.jobDataSource.createJob(input.title, input.description);
      if (!job) {
        throw badRequestError('Failed to create job');
      }
      return job;
    },
  },
};

export type MappedJob = Omit<Job, 'datePosted'>;

const notFoundError = (message: string) => {
  return new GraphQLError(message, {
    extensions: {
      code: 'NOT_FOUND',
      http: {
        status: 404,
      },
    },
  });
};

const badRequestError = (message: string) => {
  return new GraphQLError(message, {
    extensions: {
      code: 'BAD_REQUEST',
      http: {
        status: 400,
      },
    },
  });
};

