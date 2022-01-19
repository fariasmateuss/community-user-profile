export type User = {
  user: {
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
};
