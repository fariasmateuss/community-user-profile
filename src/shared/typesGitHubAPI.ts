export interface Users {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface Repos {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}
