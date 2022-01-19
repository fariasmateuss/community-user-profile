import { gql } from 'graphql-request';

import { client } from '@config/graphQLClient';
import { Repositories } from '@graphql/schemas';

export const GET_REPOSITORIES = gql`
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

export async function getRepositories() {
  const { viewer } = await client.request(GET_REPOSITORIES);

  return viewer as Repositories;
}
