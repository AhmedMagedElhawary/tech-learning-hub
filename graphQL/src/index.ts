// src/index.ts
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLModule } from './types';
import { Resolvers } from './generatedModels';
import { job } from './modules/job';

const baseTypeDefs = `#graphql
schema {
  query: Query
}
  type Query
`;

const baseResolvers: Partial<Resolvers> = {
  Query: {},
};

const base: GraphQLModule = {
  typeDefs: baseTypeDefs,
  resolvers: baseResolvers,
};

const modules: GraphQLModule[] = [base, job];

export const resolvers: Resolvers = mergeResolvers(
  modules.flatMap((m) => (m.resolvers ? [m.resolvers] : []))
) as Resolvers;

export const typeDefs = mergeTypeDefs(modules.map((m) => m.typeDefs));

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default schema;
