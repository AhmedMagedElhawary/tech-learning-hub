import { Resolvers } from '../../generatedModels';
import { Job } from './types';

export const jobResolvers: Partial<Resolvers> = {
  Query: {
    job: (): Job => ({
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
    }),
  },
};
