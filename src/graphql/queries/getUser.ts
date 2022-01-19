import { gql } from 'graphql-request';

import { client } from '@config/graphQLClient';
import { User } from '@graphql/schemas';

const GET_USER = gql`
  query GetUser {
    viewer {
      name
      avatarUrl
      bio
      email
      location
      websiteUrl
      repositories {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;

export async function getUser() {
  const { viewer } = await client.request(GET_USER);

  return viewer as User;
}
