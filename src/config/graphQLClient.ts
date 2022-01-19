import { GraphQLClient } from 'graphql-request';

const endpoint = `https://api.github.com/graphql`;

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
  },
});
