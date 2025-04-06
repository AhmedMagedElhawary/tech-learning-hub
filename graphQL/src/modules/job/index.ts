import jobTypeDefs from './schema';
import { jobResolvers } from './resolvers';
import { GraphQLModule } from '../../types';
export * from './types';

export const job: GraphQLModule = {
  typeDefs: jobTypeDefs,
  resolvers: jobResolvers,
};
