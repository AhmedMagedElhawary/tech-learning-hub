import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { koaMiddleware } from '@as-integrations/koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import zlib from 'zlib';
import compress from 'koa-compress';
import typeDefs from './schema';
import resolvers from './resolvers';
import type { ApolloServer as ApolloServerType } from '@apollo/server';

// Create HTTP server
export const httpServer = http.createServer({
  keepAlive: true,
});

// Configure CORS options
const CORS_OPTIONS = {
  allowMethods: ['GET', 'POST'],
  maxAge: 5 * 60,
  origin: '*',
};

// Create Apollo Server
export const graphqlServer : ApolloServerType= new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
  ],
});

// Create GraphQL middleware
export const graphqlMiddleware = async () => {
  await graphqlServer.start();
  
  const middleware = [
    cors(CORS_OPTIONS),
    compress({
      br: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
        },
      },
    }),
    bodyParser(),
    koaMiddleware(graphqlServer),
  ];
  
  return new Router()
    .all('/graphql', ...middleware)
    .middleware();
};