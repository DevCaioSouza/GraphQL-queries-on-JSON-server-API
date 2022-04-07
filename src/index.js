import {ApolloServer} from 'apollo-server';
import fetch from 'node-fetch';
import { resolvers, typeDefs } from './graphql/schema';
// "!" no final do type Query indica que o resolver é obrigatório 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    }
  }
});

server.listen(4003).then(({url}) => {
  console.log(`Server listening on url ${url}`)
})








