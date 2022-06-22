import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ov3509198b01xk2s6md6j6/master',
  cache: new InMemoryCache()
})