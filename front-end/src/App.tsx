import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import './App.css';
import { setContext } from 'apollo-link-context';
import RoutePage from './route';

const httpLink = new HttpLink({ uri: "http://localhost:4000" })
const authLink = setContext(async (req, { headers }) => {
	const token = localStorage.getItem("token")

	return {
		...headers,
		headers: {
			Authorization: token ? `Bearer ${token}` : null
		}
	}
})

const link = authLink.concat(httpLink as any)
const client = new ApolloClient({
	link: link as any,
	cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
      <RoutePage/>
    </ApolloProvider>
  );
}

export default App;
