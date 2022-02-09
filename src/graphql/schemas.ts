export type User = {
  bio: string;
  email: string;
  location: string;
  name: string;
  avatarUrl: string;
  websiteUrl: string;
  repositories: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
};

export type Repository = {
  id: string;
  description: string;
  name: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
  url: string;
  stargazerCount: number;
  forkCount: number;
};

export type PinnableRepositories = {
  pinnableItems: {
    nodes: Repository[];
  };
};
