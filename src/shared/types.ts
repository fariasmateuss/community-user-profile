export type Post = {
  id: number;
  title: string;
  cover_image: string;
  canonical_url: string;
  published_at: string;
  reading_time_minutes: number;
  user: {
    name: string;
    profile_image: string;
  };
};
