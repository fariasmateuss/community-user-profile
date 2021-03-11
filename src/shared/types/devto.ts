export interface Articles {
  id: number;
  title: string;
  social_image: string;
  canonical_url: string;
  readable_publish_date: string;
  public_reactions_count: number;
  comments_count: number;
  user: {
    name: string;
    profile_image_90: string;
  };
}
