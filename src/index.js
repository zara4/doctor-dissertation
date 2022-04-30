import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import App from './App';
const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers
    }
  }
});
const httpLink = createHttpLink({
  uri : 'http://localhost:4000/graphql',
});

const apolloclient = new ApolloClient({
    cache: new InMemoryCache(),
    credentials: "include",
    link: authLink.concat(httpLink),
});

ReactDOM.render(
    <ApolloProvider client= {apolloclient}>
    <App/>
    </ApolloProvider> ,document.getElementById("root"));
    