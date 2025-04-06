import { Resolvers } from './generatedModels';

export interface GraphQLModule {
  typeDefs: string;
  resolvers?: Partial<Resolvers>;
}

export interface Context {}
