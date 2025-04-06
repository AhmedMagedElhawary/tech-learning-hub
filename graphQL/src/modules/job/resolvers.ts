import { Resolvers } from '../../generatedModels';
import { Job } from './types';

export const jobResolvers: Partial<Resolvers> = {
  Query: {
    job: (): Omit<Job, 'datePosted'> => ({
      id: '1',
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
    }),
    jobs: (): Omit<Job, 'datePosted'>[] => [
      {
        id: '1',
        title: 'Software Engineer',
        description: 'Develop and maintain software applications.',
      },
      {
        id: '2',
        title: 'Product Manager',
        description: 'Lead product development and strategy.',
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
