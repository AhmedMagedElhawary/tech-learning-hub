import { Resolvers } from './generatedModels';

const resolvers: Resolvers = {
  Query: {
    job: () => ({
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
    }),
  },
};

export default resolvers;
