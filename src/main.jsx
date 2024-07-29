import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});
export const getRepositoriesData =gql`
query getRepositoriesData {
  repositories {
    name
    size
    owner
  }
}
`

export const getRepositoryDataByName=gql`
 query getRepositoryDataByName($name: String!, $owner: String!) {
   repository(name: $name, owner: $owner) {
     name
     size
     owner
     publicStatus
     numberOfFiles
     yamlContent
     webhooks
   }
 }`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </MantineProvider>
  </React.StrictMode>,
)
