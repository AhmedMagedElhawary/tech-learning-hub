import { JobDataSource } from './dataSource/jobDataSource';
import { Resolvers } from './generatedModels';

export interface GraphQLModule {
  typeDefs: string;
  resolvers?: Partial<Resolvers>;
}


export interface ApolloContextHeaders {
  [key: string]: string | string[] | undefined;
}

export interface DataSources {
  jobDataSource: JobDataSource;
}

export interface ApolloContext {
  request: {
    header: ApolloContextHeaders;
  };
  dataSources: DataSources;
  state: Record<string, unknown>;
}
