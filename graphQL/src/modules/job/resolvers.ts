import { GraphQLResolveInfo } from 'graphql';
import { Resolvers } from '../../generatedModels';
import { Context } from '../../types';
import { Job } from './types';

export const jobResolvers: Partial<Resolvers> = {
  Query: {
    job: (): Job => ({
      id: '1',
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      // @ts-expect-error Field will be resolved by Job.datePosted
      datePosted: undefined,
    }),
    jobs: (): Job[] => [
      {
        id: '1',
        title: 'Software Engineer',
        description: 'Develop and maintain software applications.',
        // @ts-expect-error Field will be resolved by Job.datePosted
        datePosted: undefined,
      },
      {
        id: '2',
        title: 'Product Manager',
        description: 'Lead product development and strategy.',
        // @ts-expect-error Field will be resolved by Job.datePosted
        datePosted: undefined,
      },
    ],
  },
  Job: {
    datePosted: (job) => {
      switch ((job as Job).id) {
        case '1':
          return '2023-10-01T00:00:00Z';
        case '2':
          return '2023-10-02T00:00:00Z';
        default:
          return new Date().toISOString();
      }
    },
  },
};
