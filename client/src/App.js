import { Button } from 'semantic-ui-react';
import { ApolloProvider } from '@apollo/client';
import client from './config/apollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>Estamos en app :D</h1>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    </ApolloProvider>
  ); 
}
