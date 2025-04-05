const resolvers = {
  Query: {
    greeting: () => 'Hello world!',
    job: () => ({
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
    }),
  },
};

export default resolvers;
