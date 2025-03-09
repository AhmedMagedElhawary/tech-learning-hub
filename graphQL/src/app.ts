import Koa from 'koa';
import { graphqlMiddleware, httpServer } from './graphqlServer';

async function startServer() {
  const app = new Koa();
  
  // Apply GraphQL middleware
  app.use(await graphqlMiddleware());
  
  // Connect Koa to the HTTP server
  httpServer.on('request', app.callback());
  
  // Start the server
  httpServer.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
}

startServer().catch(error => {
  console.error('Error starting server:', error);
  process.exit(1);
});

export default httpServer;