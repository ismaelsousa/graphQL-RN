import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';
import Home from './src/pages/Home';

const client = new ApolloClient({
  uri: 'https://snowtooth.moonhighway.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
