import { gql } from 'graphql-request';

import { client } from '@config/graphQLClient';
import { PinnableRepositories } from '@graphql/schemas';

export const GET_PINNABLE_REPOSITORIES = gql`
  query getRepositories {
    viewer {
      pinnableItems(first: 6) {
        nodes {
          ... on Repository {
            id
            description
            name
            primaryLanguage {
              name
              color
            }
            url
            stargazerCount
            forkCount
          }
        }
      }
    }
  }
`;

export async function getPinnableRepositories() {
  const { viewer } = await client.request(GET_PINNABLE_REPOSITORIES);

  return viewer as PinnableRepositories;
}
